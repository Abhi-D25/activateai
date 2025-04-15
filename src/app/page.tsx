import Image from 'next/image';
import { 
  ChartBarIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ArrowPathIcon,
  LightBulbIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CaseStudiesSection from './components/CaseStudiesSection';
import TypewriterText from './components/TypewriterText';
import QuizButton from './components/QuizButton';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <TypewriterText
                text="Activate Your Business Today"
                className="text-3xl sm:text-4xl font-bold text-white mb-6 whitespace-nowrap"
                speed={50}
              />
              <p className="text-xl text-slate-300 mb-8">
                At ActivateAI, we make artificial intelligence accessible to small and medium sized businesses. Our mission is to simplify AI adoption with tailored, practical solutions that improve efficiency, cut costs, and drive growth.
              </p>
              <div className="flex justify-center sm:justify-start">
                <QuizButton />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-50 rounded-2xl relative">
                <Image
                  src="/hero.webp"
                  alt="AI business solutions illustration"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-12 w-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">AI Integration</h3>
              </div>
              <p className="text-slate-300 mb-6">
                We seamlessly integrate AI solutions into your existing workflows and systems:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  AI Integration with existing technology
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Third-party AI solution implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Tailored business solutions using various AI tools
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <UserGroupIcon className="h-12 w-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Customer Support</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Enhance customer service with AI-powered chatbots and support systems:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  AI chatbot implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Customer feedback analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Support ticket automation
                </li>
              </ul>
            </div>
          </div>
          
          {/* Quiz Button */}
          <div className="text-center mt-12">
            <QuizButton />
            <p className="text-slate-400 mt-4">
              Get personalized recommendations for your business
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Testimonials Section */}
      <TestimonialsCarousel />
    </div>
  );
} 