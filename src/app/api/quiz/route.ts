// src/app/api/quiz/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { rateLimit } from '@/lib/rateLimit';
import { createAdminClient } from '@/lib/supabase'; // Update this import
import type { QuizFormData, ApiResponse } from '@/types/forms';

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
    const body: QuizFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.answers || body.answers.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Name, email and quiz answers are required.',
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

    // Format quiz results
    const quizResults = {
      questions: body.answers,
      completed_at: new Date().toISOString()
    };

    // Create admin client to bypass RLS
    const supabaseAdmin = createAdminClient();

    // Save to Supabase using admin client
    const { data: clientData, error: clientError } = await supabaseAdmin
      .from('clients')
      .upsert({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        company: body.company || null,
        quiz_results: quizResults,
        lead_source: 'quiz',
        status: 'potential'
      }, {
        onConflict: 'email',
        ignoreDuplicates: false
      })
      .select();

    if (clientError) {
      console.error('Error saving quiz results:', clientError);
      return NextResponse.json({
        success: false,
        message: 'Failed to submit quiz results. Please try again.',
        error: clientError.message
      } as ApiResponse, { status: 500 });
    }

    // If we have a client ID, save the quiz answers as notes
    if (clientData && clientData[0]?.id) {
      const { error: noteError } = await supabaseAdmin // Use admin client here too
        .from('notes')
        .insert({
          client_id: clientData[0].id,
          content: JSON.stringify(quizResults),
          author: 'Quiz System'
        });

      if (noteError) {
        console.error('Error saving quiz notes:', noteError);
        // Don't fail the request if note saving fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for completing the quiz! We will get back to you soon.',
      data: clientData
    } as ApiResponse);

  } catch (error) {
    console.error('Error processing quiz submission:', error);
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse, { status: 500 });
  }
}