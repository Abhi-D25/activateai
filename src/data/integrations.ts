export interface Integration {
    name: string;
    type: string; // e.g., "Appointment Setting", "CRM", "Text Messaging"
    industry: string[]; // e.g., ["Medical & Dental", "Home Service"]
    description?: string;
    logo?: string; // URL or path to logo
    logoShape?: 'circle' | 'square'; // Default to 'circle' if undefined
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
        logo: "/icons/cal.com.png",
        logoShape: 'square',
    },
    {
        name: "Google Calendar",
        type: "Appointment Setting",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)", "Restaurant"],
        description: "Time management and scheduling calendar service.",
        logo: "/icons/google calender.png",
        logoShape: 'square',
    },
    {
        name: "Calendly",
        type: "Appointment Setting",
        industry: ["All Industries", "Medical & Dental", "Home Service", "SPA (Beauty & Wellness)"],
        description: "Easy scheduling ahead.",
        logo: "/icons/calendly.png",
    },
    {
        name: "Housecall Pro",
        type: "Appointment Setting",
        industry: ["Home Service"],
        description: "All-in-one software for home service professionals.",
        logo: "/icons/housecall.png",
    },
    {
        name: "Telegram",
        type: "Text Messaging",
        industry: ["All Industries"],
        description: "Cloud-based mobile and desktop messaging app.",
        logo: "/icons/telegram.png",
        logoShape: 'square',
    },
    {
        name: "ZOHO",
        type: "CRM",
        industry: ["All Industries", "Medical & Dental", "Home Service"],
        description: "Suite of online productivity tools and SaaS applications.",
        logo: "/icons/zoho-crm.png",
    },
    {
        name: "Acculynx",
        type: "CRM",
        industry: ["Home Service"],
        description: "Business management software for roofing contractors.",
        logo: "/icons/acculynx.png",
    },
    {
        name: "athenahealth",
        type: "Appointment Setting",
        industry: ["Medical & Dental"],
        description: "Network-enabled services for healthcare.",
        logo: "/icons/athena health.png",
    },
    {
        name: "Dentrix",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Dental practice management software.",
        logo: "/icons/dentrix.png",
        logoShape: 'square',
    },
    {
        name: "Dentrix Ascend",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Cloud-based dental practice management software.",
        logo: "/icons/dentrix ascend.jpeg",
        logoShape: 'square',
    },
    {
        name: "Eaglesoft",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Dental practice management software.",
        logo: "/icons/eaglesoft.jpeg",
    },
    {
        name: "NextGen",
        type: "Appointment Setting",
        industry: ["Medical & Dental"],
        description: "Healthcare information technology.",
        logo: "/icons/nextgen.jpeg",
    },
    {
        name: "Open Dental",
        type: "Appointment Setting",
        industry: ["Dental", "Medical & Dental"],
        description: "Open source dental practice management software.",
        logo: "/icons/opendental.png",
    },

    // New Integrations
    // Home Service
    {
        name: "ServiceTitan",
        type: "Field Service Management",
        industry: ["Home Service"],
        description: "Software for home service businesses.",
        logo: "/icons/servicetitan.png",
    },
    {
        name: "Jobber",
        type: "Field Service Management",
        industry: ["Home Service"],
        description: "Software for home service businesses.",
        logo: "/icons/jobber.png",
    },

    // Medical & Dental
    {
        name: "DrChrono",
        type: "EHR & PMS",
        industry: ["Medical & Dental"],
        description: "EHR and medical practice management platform.",
        logo: "/icons/drchrono.png",
        logoShape: 'square',
    },
    {
        name: "Kareo",
        type: "EHR & PMS",
        industry: ["Medical & Dental"],
        description: "Cloud-based medical technology platform.",
        logo: "/icons/kareo.png",
    },
    {
        name: "Curve Dental",
        type: "Practice Management",
        industry: ["Dental", "Medical & Dental"],
        description: "Cloud-based dental software.",
        logo: "/icons/curve dental.png",
    },

    // SPA (Beauty & Wellness)
    {
        name: "Mindbody",
        type: "Management Software",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Software for wellness services.",
        logo: "/icons/mindbody.png",
    },
    {
        name: "Zenoti",
        type: "Management Software",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Cloud software for salons and spas.",
        logo: "/icons/zenoti.png",
    },
    {
        name: "Booker",
        type: "Management Software",
        industry: ["SPA (Beauty & Wellness)"],
        description: "Spa and salon management software.",
        logo: "/icons/booker.png",
    },

    // Restaurant
    {
        name: "Toast",
        type: "POS & Management",
        industry: ["Restaurant"],
        description: "Restaurant point of sale and management system.",
        logo: "/icons/toast .png",
    },
    {
        name: "OpenTable",
        type: "Reservations",
        industry: ["Restaurant"],
        description: "Online restaurant-reservation service.",
        logo: "/icons/opentable.png",
    },
    {
        name: "Uber Eats",
        type: "Delivery",
        industry: ["Restaurant"],
        description: "Online food ordering and delivery platform.",
        logo: "/icons/ubereats.png",
    },

    // General / Cross-Industry
    {
        name: "Salesforce",
        type: "CRM",
        industry: ["All Industries", "Insurance", "Medical & Dental", "Home Service"],
        description: "Cloud-based software company provides CRM service.",
        logo: "/icons/salesforce.png",
    },
    {
        name: "HubSpot",
        type: "CRM",
        industry: ["All Industries", "Insurance", "Medical & Dental"],
        description: "Inbound marketing, sales, and service software.",
        logo: "/icons/hubspot.png",
    },
    {
        name: "Slack",
        type: "Communication",
        industry: ["All Industries"],
        description: "Business communication platform.",
        logo: "/icons/slack.png",
    },
    {
        name: "Zoom",
        type: "Video Conferencing",
        industry: ["All Industries", "Medical & Dental"],
        description: "Video communications.",
        logo: "/icons/zoom.png",
    },
    {
        name: "Stripe",
        type: "Payments",
        industry: ["All Industries", "Restaurant", "SPA (Beauty & Wellness)", "Home Service"],
        description: "Financial infrastructure platform for the internet.",
        logo: "/icons/stripe.png",
    },
    {
        name: "QuickBooks",
        type: "Accounting",
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
    {
        name: "Twilio",
        type: "Communication",
        industry: ["All Industries"],
        description: "Cloud communications platform as a service.",
        logo: "/icons/twilio.png",
    },
];
