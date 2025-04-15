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
    client: "TechRetail Solutions",
    industry: "Retail",
    duration: "3 months",
    keyTechnologies: ["AI Inventory Management", "Predictive Analytics", "Cloud Integration"],
    description: "A comprehensive AI solution for a retail chain with multiple locations. The system integrated with existing POS systems to provide real-time inventory tracking and predictive stock management.",
    results: [
      "30% reduction in stockouts",
      "25% decrease in inventory holding costs",
      "40% improvement in restocking efficiency",
      "Automated reorder suggestions with 95% accuracy",
      "Real-time inventory tracking across all locations"
    ],
    image: "/case-study-1.webp"
  },
  {
    id: 2,
    title: "Customer Service Enhancement",
    client: "ServicePro Solutions",
    industry: "Customer Service",
    duration: "2 months",
    keyTechnologies: ["AI Chatbot", "Natural Language Processing", "Analytics Dashboard"],
    description: "Implementation of an AI-powered customer service solution that integrated with existing support systems to provide 24/7 automated support while maintaining high customer satisfaction.",
    results: [
      "60% reduction in response time",
      "45% decrease in support ticket volume",
      "85% customer satisfaction rate",
      "24/7 automated support coverage",
      "Reduced support staff workload by 40%"
    ],
    image: "/case-study-2.webp"
  }
]; 