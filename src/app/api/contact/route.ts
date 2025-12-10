// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { rateLimit } from '@/lib/rateLimit';
import type { ContactFormData, ApiResponse } from '@/types/forms';

// Normalize phone number to 1XXXXXXXXXX format
function normalizePhoneNumber(phone: string): string {
  if (!phone) return '';
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');

  // If empty, return as is
  if (!digits) return phone;

  // If it already starts with 1 and has 11 digits, return as is
  if (digits.length === 11 && digits.startsWith('1')) {
    return digits;
  }

  // If it has 10 digits (US number without country code), prepend 1
  if (digits.length === 10) {
    return `1${digits}`;
  }

  // If it has 11 digits but doesn't start with 1, take last 10 and prepend 1
  if (digits.length === 11 && !digits.startsWith('1')) {
    return `1${digits.slice(-10)}`;
  }

  // If it has more than 11 digits, take the last 11 if it starts with 1, otherwise last 10 + 1
  if (digits.length > 11) {
    const last11 = digits.slice(-11);
    if (last11.startsWith('1')) {
      return last11;
    }
    // Take last 10 digits and prepend 1
    return `1${digits.slice(-10)}`;
  }

  // For cases with less than 10 digits, return as is (invalid format, backend will handle)
  return digits;
}

export async function POST(request: Request) {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || 'unknown';
  
  // Check rate limit
  if (!rateLimit(ip)) {
    return NextResponse.json({
      success: false,
      message: 'Too many requests. Please try again later.',
    } as ApiResponse, { status: 429 });
  }

  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.company || !body.website || !body.message) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, phone, company, website, and message are required.',
      } as ApiResponse, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({
        success: false,
        message: 'Please enter a valid email address.',
      } as ApiResponse, { status: 400 });
    }

    // Normalize phone number (required field)
    const normalizedPhone = normalizePhoneNumber(body.phone);

    // Normalize website - add https:// if it's just a domain (required field)
    let normalizedWebsite = body.website.trim();
    if (normalizedWebsite && !normalizedWebsite.match(/^https?:\/\//i)) {
      normalizedWebsite = `https://${normalizedWebsite}`;
    }

    // Send to n8n webhook (same as InteractiveDemoForm)
    const webhookUrl = 'https://cartersunny.app.n8n.cloud/webhook/send_email';
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        phone: normalizedPhone,
        email: body.email,
        website: normalizedWebsite,
        industry: body.industry || '',
        company: body.company,
        message: body.message,
        source: 'contact-form',
      })
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('Error from n8n webhook:', webhookResponse.status, errorText);
      return NextResponse.json({
        success: false,
        message: 'Failed to submit your message. Please try again.',
        error: `Webhook failed with status: ${webhookResponse.status}`
      } as ApiResponse, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    } as ApiResponse);

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse, { status: 500 });
  }
}