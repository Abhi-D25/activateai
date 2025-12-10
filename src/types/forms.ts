// src/types/forms.ts

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry?: string;
  message: string;
}

export interface QuizFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  answers: {
    question: string;
    answer: string;
  }[];
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
} 