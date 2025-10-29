// src/app/api/track/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Airtable configuration
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_CLICK_TRACKING_TABLE = 'Click Tracking'; // Name of your click tracking table
const AIRTABLE_LEADS_TABLE = 'Lead Data'; // Name of your leads table (update this if different)

// Rate limiting for tracking (optional)
const CLICK_LIMITS = new Map<string, { count: number, timestamp: number }>();

function checkClickRateLimit(ip: string): boolean {
  const now = Date.now();
  const maxClicksPerMinute = 100; // Generous limit for click tracking
  
  const rateData = CLICK_LIMITS.get(ip) || { count: 0, timestamp: now };
  
  // Reset counter if more than a minute has passed
  if (now - rateData.timestamp > 60000) {
    rateData.count = 1;
    rateData.timestamp = now;
    CLICK_LIMITS.set(ip, rateData);
    return true;
  }
  
  rateData.count++;
  CLICK_LIMITS.set(ip, rateData);
  
  return rateData.count <= maxClicksPerMinute;
}

async function saveClickToAirtable(clickData: {
  leadEmail: string;
  emailType: string;
  linkClicked: string;
  trackingUrl: string;
  clickTimestamp: string;
  campaignBatchId: string;
  userAgent?: string;
  ipAddress?: string;
}) {
  try {
    console.log('Attempting to save to Airtable with config:', {
      baseId: AIRTABLE_BASE_ID,
      tableName: AIRTABLE_CLICK_TRACKING_TABLE,
      hasApiKey: !!AIRTABLE_API_KEY
    });

    const requestBody = {
      records: [
        {
          fields: {
            'Click Timestamp': clickData.clickTimestamp,
            'Lead Email': clickData.leadEmail,
            'Email Type': clickData.emailType,
            'Link Clicked': clickData.linkClicked,
            'Tracking URL': clickData.trackingUrl,
            'Campaign Batch ID': clickData.campaignBatchId
          }
        }
      ]
    };

    console.log('Airtable request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_CLICK_TRACKING_TABLE}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Airtable response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable API error:', response.status, errorText);
      return false;
    }

    const responseData = await response.json();
    console.log('Airtable success response:', responseData);
    return true;
  } catch (error) {
    console.error('Error saving click to Airtable:', error);
    return false;
  }
}

async function updateLeadClickCount(leadEmail: string) {
  try {
    console.log('Attempting to update click count for:', leadEmail);
    
    // First, get the current record
    const searchResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_LEADS_TABLE}?filterByFormula={Email}='${leadEmail}'`,
      {
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        }
      }
    );

    console.log('Search response status:', searchResponse.status);

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      console.error('Error searching for lead:', searchResponse.status, errorText);
      return false;
    }

    const searchData = await searchResponse.json();
    console.log('Search data:', searchData);
    
    if (searchData.records && searchData.records.length > 0) {
      const record = searchData.records[0];
      const currentClickCount = record.fields['Click Count'] || 0;
      console.log('Current click count:', currentClickCount);
      
      // Update the click count
      const updateResponse = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_LEADS_TABLE}/${record.id}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields: {
              'Click Count': currentClickCount + 1
            }
          })
        }
      );

      console.log('Update response status:', updateResponse.status);
      
      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        console.error('Error updating click count:', updateResponse.status, errorText);
        return false;
      }

      const updateData = await updateResponse.json();
      console.log('Update successful:', updateData);
      return true;
    } else {
      console.log('No lead found with email:', leadEmail);
      return false;
    }

  } catch (error) {
    console.error('Error updating lead click count:', error);
    return false;
  }
}

export async function GET(request: NextRequest) {
  try {
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 
               headersList.get('x-real-ip') || 
               'unknown';
    const userAgent = headersList.get('user-agent') || 'unknown';

    // Check rate limit
    if (!checkClickRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many clicks' }, 
        { status: 429 }
      );
    }

    // Get URL parameters
    const { searchParams } = new URL(request.url);
    
    const leadEmail = searchParams.get('email');
    const emailType = searchParams.get('type');
    const originalUrl = searchParams.get('url');
    const campaignId = searchParams.get('campaign');
    const trackingId = searchParams.get('id');

    // Validate required parameters
    if (!leadEmail || !emailType || !originalUrl || !campaignId) {
      return NextResponse.json(
        { error: 'Missing required parameters' }, 
        { status: 400 }
      );
    }

    // Decode the original URL
    const decodedUrl = decodeURIComponent(originalUrl);
    
    // Create tracking data
    const clickData = {
      leadEmail,
      emailType,
      linkClicked: decodedUrl,
      trackingUrl: request.url,
      clickTimestamp: new Date().toISOString(),
      campaignBatchId: campaignId,
      userAgent,
      ipAddress: ip
    };

    // Save click data to Airtable (wait for completion to see any errors)
    const saveResult = await saveClickToAirtable(clickData);
    console.log('Airtable save result:', saveResult);
    
    // Also try to update lead click count
    const updateResult = await updateLeadClickCount(leadEmail);
    console.log('Lead click count update result:', updateResult);

    // Log the click for debugging
    console.log('Click tracked:', {
      email: leadEmail,
      type: emailType,
      url: decodedUrl,
      timestamp: clickData.clickTimestamp,
      ip: ip
    });

    // Redirect to the original URL
    return NextResponse.redirect(decodedUrl);

  } catch (error) {
    console.error('Error in track API route:', error);
    
    // If there's an error, try to redirect to a fallback URL or homepage
    const { searchParams } = new URL(request.url);
    const originalUrl = searchParams.get('url');
    
    if (originalUrl) {
      try {
        const decodedUrl = decodeURIComponent(originalUrl);
        return NextResponse.redirect(decodedUrl);
      } catch (decodeError) {
        console.error('Error decoding URL:', decodeError);
      }
    }
    
    // Fallback to homepage if all else fails
    return NextResponse.redirect(new URL('/', request.url).toString());
  }
}