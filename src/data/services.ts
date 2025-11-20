import { 
  ChartBarIcon, 
  SparklesIcon, 
  CogIcon,
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  icon: any;
  gradient: string;
  image?: string;
  features: string[];
  benefits?: string[];
}

export const services: Service[] = [
  {
    id: 'lead-manager',
    title: 'Lead Manager',
    description: 'Automate lead capture, follow-ups, and CRM updates. Never miss an opportunity again.',
    fullDescription: 'Our AI-powered Lead Manager acts as your 24/7 receptionist and sales development representative. It handles incoming inquiries across voice, text, and social media, qualifies leads based on your criteria, and schedules appointments directly into your calendar.',
    icon: ChartBarIcon,
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80',
    features: [
      '24/7 Automated Lead Capture',
      'Multi-channel support (Voice, SMS, Email)',
      'Instant CRM Updates',
      'Automated Follow-up Sequences',
      'Appointment Scheduling'
    ],
    benefits: [
      'Increase conversion rates by responding instantly',
      'Save 10+ hours per week on manual follow-ups',
      'Never lose a lead to voicemail again'
    ]
  },
  {
    id: 'website-modernization',
    title: 'Website Modernization',
    description: 'Refresh your business website with modern design and performance that converts.',
    fullDescription: 'We transform outdated websites into modern, high-performance conversion engines. Our modernization process focuses on speed, mobile responsiveness, and user experience design that turns visitors into customers.',
    icon: SparklesIcon,
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
    features: [
      'Modern, Responsive Design',
      'SEO Optimization',
      'Fast Loading Speeds',
      'Conversion Rate Optimization',
      'Content Management System'
    ],
    benefits: [
      'Build trust with a professional online presence',
      'Rank higher in search results',
      'Convert more visitors into paying customers'
    ]
  },
  {
    id: 'operations-coordinator',
    title: 'Operations Coordinator',
    description: 'Streamline client onboarding, scheduling, invoicing, and support with AI.',
    fullDescription: 'The Operations Coordinator is your digital office manager. It connects your disparate tools to automate the boring stuff: sending invoices, onboarding new clients, scheduling meetings, and managing project timelines.',
    icon: CogIcon,
    gradient: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1593937505566-64f33d148915?w=800&q=80',
    features: [
      'Automated Client Onboarding',
      'Smart Scheduling',
      'Invoice Generation & Reminders',
      'Workflow Automation',
      'Task Management'
    ],
    benefits: [
      'Reduce administrative overhead',
      'Get paid faster with automated invoicing',
      'Provide a seamless experience for your clients'
    ]
  },
  {
    id: 'knowledge-base',
    title: 'Knowledge Base',
    description: 'Centralize business documents and team know-how for instant access.',
    fullDescription: 'Stop answering the same questions over and over. Our Knowledge Base solution centralizes your standard operating procedures, training materials, and business documents into an AI-searchable hub that your team can access instantly.',
    icon: BookOpenIcon,
    gradient: 'from-orange-500 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    features: [
      'Centralized Document Storage',
      'AI-Powered Search',
      'Team Access Controls',
      'Easy Content Updates',
      'Internal Q&A Bot'
    ],
    benefits: [
      'Onboard new employees 2x faster',
      'Reduce interruptions from team questions',
      'Ensure consistency in your operations'
    ]
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Get insights from your data with simple dashboards and reports.',
    fullDescription: 'Turn your messy data into clear insights. We build custom dashboards that track your most important KPIs, giving you a real-time view of your business health without the need for complex spreadsheets.',
    icon: LightBulbIcon,
    gradient: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    features: [
      'Custom Executive Dashboards',
      'Real-time Data Visualization',
      'Automated Reporting',
      'Trend Analysis',
      'Data Integration'
    ],
    benefits: [
      'Make data-driven decisions with confidence',
      'Spot trends and issues before they become problems',
      'Save time on manual reporting'
    ]
  }
];

