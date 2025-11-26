export interface Integration {
    name: string;
    type: string; // e.g., "Appointment Setting", "CRM", "Text Messaging"
    industry: string[]; // e.g., ["Medical & Dental", "Home Service"]
    description?: string;
    logo?: string; // URL or path to logo
}

export const industries = [
    "All Industries",
    "Home Service",
    "Medical & Dental",
    "Insurance",
    "SPA (Beauty & Wellness)",
    "Restaurant",
];

export const integrations: Integration[] = [
    // Existing Integrations
    {
        name: "Cal.com",
        type: "Appointment Setting",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)"],
        description: "Open source scheduling infrastructure for everyone.",
    },
    {
        name: "Google Calendar",
        type: "Appointment Setting",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)", "Restaurant"],
        description: "Time management and scheduling calendar service.",
    },
    {
        name: "Calendly",
        type: "Appointment Setting",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)"],
        description: "Easy scheduling ahead.",
    },
    {
        name: "Housecall Pro",
        type: "Appointment Setting",
        industry: ["Home Service"],
        description: "All-in-one software for home service professionals.",
    },
    {
        name: "Newo Chat",
        type: "Text Messaging",
        industry: ["All Industries"],
        description: "Integrated chat solution.",
    },
    {
        name: "Telegram",
        type: "Text Messaging",
        industry: ["All Industries"],
        description: "Cloud-based mobile and desktop messaging app.",
    },
    {
        name: "ZOHO",
        type: "CRM",
        industry: ["All Industries", "Medical & Dental", "Home Service"],
        description: "Suite of online productivity tools and SaaS applications.",
    },
    {
        name: "Acculynx",
        type: "CRM",
        industry: ["Home Service"],
        description: "Business management software for roofing contractors.",
    },
    {
        name: "Bitrix",
        type: "CRM",
        industry: ["All Industries"],
        description: "Social enterprise software.",
    },
    {
        name: "athenahealth",
        type: "Appointment Setting",
        industry: ["Medical & Dental"],
        description: "Network-enabled services for healthcare.",
    },
    {
        name: "Dentrix",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Dental practice management software.",
    },
    {
        name: "Dentrix Ascend",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Cloud-based dental practice management software.",
    },
    {
        name: "Eaglesoft",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Dental practice management software.",
    },
    {
        name: "NextGen",
        type: "Appointment Setting",
        industry: ["Medical & Dental"],
        description: "Healthcare information technology.",
    },
    {
        name: "Open Dental",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Open source dental practice management software.",
    },

    // New Integrations
    // Home Service
    {
        name: "ServiceTitan",
        type: "Field Service Management",
        industry: ["Home Service"],
        description: "Software for home service businesses.",
    },
    {
        name: "Jobber",
        type: "Field Service Management",
        industry: ["Home Service"],
        description: "Software for home service businesses.",
    },

    // Medical & Dental
    {
        name: "DrChrono",
        type: "EHR & PMS",
        industry: ["Medical & Dental"],
        description: "EHR and medical practice management platform.",
    },
    {
        name: "Kareo",
        type: "EHR & PMS",
        industry: ["Medical & Dental"],
        description: "Cloud-based medical technology platform.",
    },
    {
        name: "Curve Dental",
        type: "Practice Management",
        industry: ["Dental", "Medical & Dental"],
        description: "Cloud-based dental software.",
    },

    // SPA (Beauty & Wellness)
    {
        name: "Mindbody",
        type: "Management Software",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Software for wellness services.",
    },
    {
        name: "Zenoti",
        type: "Management Software",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Cloud software for salons and spas.",
    },
    {
        name: "Booker",
        type: "Management Software",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Spa and salon management software.",
    },

    // Restaurant
    {
        name: "Toast",
        type: "POS & Management",
        industry: ["Restaurant"],
        description: "Restaurant point of sale and management system.",
    },
    {
        name: "OpenTable",
        type: "Reservations",
        industry: ["Restaurant"],
        description: "Online restaurant-reservation service.",
    },
    {
        name: "Uber Eats",
        type: "Delivery",
        industry: ["Restaurant"],
        description: "Online food ordering and delivery platform.",
    },

    // General / Cross-Industry
    {
        name: "Salesforce",
        type: "CRM",
        industry: ["All Industries", "Insurance", "Medical & Dental", "Home Service"],
        description: "Cloud-based software company provides CRM service.",
    },
    {
        name: "HubSpot",
        type: "CRM",
        industry: ["All Industries", "Insurance", "Medical & Dental"],
        description: "Inbound marketing, sales, and service software.",
    },
    {
        name: "Slack",
        type: "Communication",
        industry: ["All Industries"],
        description: "Business communication platform.",
    },
    {
        name: "Zoom",
        type: "Video Conferencing",
        industry: ["All Industries", "Medical & Dental"],
        description: "Video communications.",
    },
    {
        name: "Stripe",
        type: "Payments",
        industry: ["All Industries", "Restaurant", "SPA (Beauty & Wellness)", "Home Service"],
        description: "Financial infrastructure platform for the internet.",
    },
    {
        name: "QuickBooks",
        type: "Accounting",
        industry: ["All Industries", "Home Service", "Restaurant", "SPA (Beauty & Wellness)"],
        description: "Accounting software package.",
    },
    {
        name: "Zapier",
        type: "Automation",
        industry: ["All Industries"],
        description: "Product that allows end users to integrate the web applications they use.",
    },
    {
        name: "Twilio",
        type: "Communication",
        industry: ["All Industries"],
        description: "Cloud communications platform as a service.",
    },
];
