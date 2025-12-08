export interface Integration {
    name: string;
    type: string; // e.g., "Appointment Setting", "CRM", "Text Messaging"
    industry: string[]; // e.g., ["Medical & Dental", "Home Service"]
    description?: string;
    logo?: string; // URL or path to logo
    logoShape?: 'circle' | 'square'; // Default to 'circle' if undefined
}

// Color mapping for integration types
export const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    "Scheduling": { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
    "CRM/PMS": { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
    "Automation": { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" },
};

export const industries = [
    "All Industries",
    "Home Service",
    "Medical & Dental",
    "Insurance",
    "SPA (Beauty & Wellness)",
    "Restaurant",
];

export const integrations: Integration[] = [
    // Scheduling
    {
        name: "Cal.com",
        type: "Scheduling",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)"],
        description: "Open source scheduling infrastructure for everyone.",
        logo: "/icons/cal.com.png",
        logoShape: 'square',
    },
    {
        name: "Google Calendar",
        type: "Scheduling",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)", "Restaurant"],
        description: "Time management and scheduling calendar service.",
        logo: "/icons/google calender.png",
        logoShape: 'square',
    },
    {
        name: "Calendly",
        type: "Scheduling",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)"],
        description: "Easy scheduling ahead.",
        logo: "/icons/calendly.png",
    },

    // CRM & Practice Management (consolidated category)
    {
        name: "ZOHO",
        type: "CRM/PMS",
        industry: ["All Industries", "Medical & Dental", "Home Service"],
        description: "Suite of online productivity tools and SaaS applications.",
        logo: "/icons/zoho-crm.png",
    },
    {
        name: "Acculynx",
        type: "CRM/PMS",
        industry: ["Home Service"],
        description: "Business management software for roofing contractors.",
        logo: "/icons/acculynx.png",
    },
    {
        name: "Housecall Pro",
        type: "CRM/PMS",
        industry: ["Home Service"],
        description: "All-in-one software for home service professionals.",
        logo: "/icons/housecall.png",
    },
    {
        name: "athenahealth",
        type: "CRM/PMS",
        industry: ["Medical & Dental"],
        description: "Network-enabled services for healthcare.",
        logo: "/icons/athena health.png",
    },
    {
        name: "Dentrix",
        type: "CRM/PMS",
        industry: ["Dental", "Medical & Dental"],
        description: "Dental practice management software.",
        logo: "/icons/dentrix.png",
        logoShape: 'square',
    },
    {
        name: "Dentrix Ascend",
        type: "CRM/PMS",
        industry: ["Dental", "Medical & Dental"],
        description: "Cloud-based dental practice management software.",
        logo: "/icons/dentrix ascend.jpeg",
        logoShape: 'square',
    },
    {
        name: "Eaglesoft",
        type: "CRM/PMS",
        industry: ["Dental", "Medical & Dental"],
        description: "Dental practice management software.",
        logo: "/icons/eaglesoft.jpeg",
    },
    {
        name: "NextGen",
        type: "CRM/PMS",
        industry: ["Medical & Dental"],
        description: "Healthcare information technology.",
        logo: "/icons/nextgen.jpeg",
    },
    {
        name: "Open Dental",
        type: "CRM/PMS",
        industry: ["Dental", "Medical & Dental"],
        description: "Open source dental practice management software.",
        logo: "/icons/opendental.png",
    },
    {
        name: "DrChrono",
        type: "CRM/PMS",
        industry: ["Medical & Dental"],
        description: "EHR and medical practice management platform.",
        logo: "/icons/drchrono.png",
        logoShape: 'square',
    },
    {
        name: "Kareo",
        type: "CRM/PMS",
        industry: ["Medical & Dental"],
        description: "Cloud-based medical technology platform.",
        logo: "/icons/kareo.png",
    },
    {
        name: "Curve Dental",
        type: "CRM/PMS",
        industry: ["Dental", "Medical & Dental"],
        description: "Cloud-based dental software.",
        logo: "/icons/curve dental.png",
    },
    {
        name: "Mindbody",
        type: "CRM/PMS",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Software for wellness services.",
        logo: "/icons/mindbody.png",
    },
    {
        name: "Zenoti",
        type: "CRM/PMS",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Cloud software for salons and spas.",
        logo: "/icons/zenoti.png",
    },
    {
        name: "Booker",
        type: "CRM/PMS",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Spa and salon management software.",
        logo: "/icons/booker.png",
    },
    {
        name: "Salesforce",
        type: "CRM/PMS",
        industry: ["All Industries", "Insurance", "Medical & Dental", "Home Service"],
        description: "Cloud-based software company provides CRM service.",
        logo: "/icons/salesforce.png",
    },
    {
        name: "HubSpot",
        type: "CRM/PMS",
        industry: ["All Industries", "Insurance", "Medical & Dental"],
        description: "Inbound marketing, sales, and service software.",
        logo: "/icons/hubspot.png",
    },

    // Automation
    {
        name: "ServiceTitan",
        type: "Automation",
        industry: ["Home Service"],
        description: "Software for home service businesses.",
        logo: "/icons/servicetitan.png",
    },
    {
        name: "Jobber",
        type: "Automation",
        industry: ["Home Service"],
        description: "Software for home service businesses.",
        logo: "/icons/jobber.png",
    },
    {
        name: "Toast",
        type: "Automation",
        industry: ["Restaurant"],
        description: "Restaurant point of sale and management system.",
        logo: "/icons/toast .png",
    },
    {
        name: "OpenTable",
        type: "Automation",
        industry: ["Restaurant"],
        description: "Online restaurant-reservation service.",
        logo: "/icons/opentable.png",
    },
    {
        name: "Clover",
        type: "Automation",
        industry: ["Restaurant"],
        description: "Point of sale and business management platform for restaurants.",
        logo: "/icons/clover.png",
    },
    {
        name: "Uber Eats",
        type: "Automation",
        industry: ["Restaurant"],
        description: "Online food ordering and delivery platform.",
        logo: "/icons/ubereats.png",
    },
    {
        name: "Slack",
        type: "Automation",
        industry: ["All Industries"],
        description: "Business communication platform.",
        logo: "/icons/slack.png",
    },
    {
        name: "Twilio",
        type: "Automation",
        industry: ["All Industries"],
        description: "Cloud communications platform as a service.",
        logo: "/icons/twilio.png",
    },
    {
        name: "Zoom",
        type: "Automation",
        industry: ["All Industries", "Medical & Dental"],
        description: "Video communications.",
        logo: "/icons/zoom.png",
    },
    {
        name: "Stripe",
        type: "Automation",
        industry: ["All Industries", "Restaurant", "SPA (Beauty & Wellness)", "Home Service"],
        description: "Financial infrastructure platform for the internet.",
        logo: "/icons/stripe.png",
    },
    {
        name: "QuickBooks",
        type: "Automation",
        industry: ["All Industries", "Home Service", "Restaurant", "SPA (Beauty & Wellness)"],
        description: "Accounting software package.",
        logo: "/icons/quickbooks.png",
        logoShape: 'square',
    },
    {
        name: "Zapier",
        type: "Automation",
        industry: ["All Industries"],
        description: "Product that allows end users to integrate the web applications they use.",
        logo: "/icons/zapier.png",
    },
];
