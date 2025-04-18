// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { rateLimit } from '@/lib/rateLimit';
import { createAdminClient } from '@/lib/supabase'; // Updated import
import type { ContactFormData, ApiResponse } from '@/types/forms';

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
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({
        success: false,
        message: 'Name, email and message are required.',
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

    // Create admin client to bypass RLS
    const supabaseAdmin = createAdminClient();

    // Save to Supabase
    const { data, error } = await supabaseAdmin
      .from('clients')
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        company: body.company || null,
        notes: body.message,
        lead_source: 'Contact Form',
        status: 'potential',
      })
      .select();

    if (error) {
      console.error('Error saving contact form:', error);
      return NextResponse.json({
        success: false,
        message: 'Failed to submit your message. Please try again.',
        error: error.message
      } as ApiResponse, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data
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