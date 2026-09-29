export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  duration: string;
  keyTechnologies: string[];
  description: string;
  results: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Retail Store Automation",
    client: "Example Retail Business",
    industry: "Retail",
    duration: "Varies by scope",
    keyTechnologies: ["AI Inventory Management", "Predictive Analytics", "Cloud Integration"],
    description: "A comprehensive AI solution for retail businesses with multiple locations. The system integrates with existing POS systems to provide real-time inventory tracking and predictive stock management.",
    results: [
      "Reduced stockouts through smart forecasting",
      "Lower inventory holding costs",
      "Faster restocking with automated alerts",
      "Automated reorder suggestions",
      "Real-time inventory tracking across locations"
    ],
    image: "/case-study-1.webp"
  },
  {
    id: 2,
    title: "Customer Service Enhancement",
    client: "Example Service Business",
    industry: "Customer Service",
    duration: "Varies by scope",
    keyTechnologies: ["AI Chatbot", "Natural Language Processing", "Analytics Dashboard"],
    description: "An AI-powered customer service solution that integrates with existing support systems to provide automated support while maintaining quality service.",
    results: [
      "Faster response times",
      "Fewer repetitive support tickets",
      "Improved customer experience",
      "24/7 automated support coverage",
      "Reduced support staff workload"
    ],
    image: "/case-study-2.webp"
  }
]; 