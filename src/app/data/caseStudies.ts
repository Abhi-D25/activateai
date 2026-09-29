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
      "Reduce stockouts through smart forecasting",
      "Lower inventory holding costs",
      "Speed up restocking with automated alerts",
      "Generate automated reorder suggestions",
      "Track inventory in real-time across locations"
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
      "Speed up response times",
      "Handle repetitive support tickets automatically",
      "Improve customer experience",
      "Provide 24/7 automated support coverage",
      "Free up support staff for complex issues"
    ],
    image: "/case-study-2.webp"
  }
]; 