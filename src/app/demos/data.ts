export interface Service {
    title: string;
    description: string;
    iconName: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface Stat {
    label: string;
    value: string;
}

export interface IndustryData {
    id: string;
    name: string;
    theme: {
        primary: string;
        secondary: string;
        accent: string;
        font: string;
        background: string;
        text: string;
        heading: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
        image: string;
    };
    stats: Stat[];
    about: {
        title: string;
        content: string;
        image?: string;
    };
    services: Service[];
    testimonials: Testimonial[];
    contact: {
        address: string;
        phone: string;
        email: string;
        hours: string;
    };
}

export const industryData: Record<string, IndustryData> = {
    'professional-services': {
        id: 'professional-services',
        name: 'Sterling & Partners',
        theme: {
            primary: 'bg-slate-900',
            secondary: 'bg-slate-100',
            accent: 'text-blue-700',
            font: 'font-serif',
            background: 'bg-white',
            text: 'text-slate-700',
            heading: 'text-slate-900'
        },
        hero: {
            title: 'Strategic Excellence. Tangible Results.',
            subtitle: 'We partner with the world\'s leading organizations to solve their most complex challenges and drive sustainable growth.',
            cta: 'Schedule Consultation',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
        },
        stats: [
            { label: 'Years Experience', value: '25+' },
            { label: 'Global Offices', value: '12' },
            { label: 'Fortune 500 Clients', value: '150+' },
            { label: 'Success Rate', value: '98%' }
        ],
        about: {
            title: 'Defining the Future of Business',
            content: 'Founded in 1998, Sterling & Partners has grown from a boutique consultancy to a global powerhouse. We believe in the power of data-driven decision making combined with deep industry expertise. Our team of former C-suite executives and top-tier analysts work tirelessly to ensure your business stays ahead of the curve.',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80'
        },
        services: [
            {
                title: 'Corporate Law',
                description: 'Navigating the complex web of international regulations with precision and foresight.',
                iconName: 'ScaleIcon'
            },
            {
                title: 'Strategic Consulting',
                description: 'Unlocking new revenue streams and optimizing operational efficiency.',
                iconName: 'BuildingOfficeIcon'
            },
            {
                title: 'Risk Management',
                description: 'Proactive identification and mitigation of financial and operational risks.',
                iconName: 'DocumentTextIcon'
            }
        ],
        testimonials: [
            {
                quote: "Sterling & Partners didn't just advise us; they transformed our entire operational model.",
                author: "James Wilson",
                role: "CEO, TechCorp"
            },
            {
                quote: "The level of insight and dedication their team brings is simply unmatched in the industry.",
                author: "Sarah Chen",
                role: "Director, Global Ventures"
            }
        ],
        contact: {
            address: "123 Financial District, New York, NY 10005",
            phone: "+1 (212) 555-0123",
            email: "contact@sterlingpartners.com",
            hours: "Mon-Fri: 9:00 AM - 6:00 PM"
        }
    },
    'dental': {
        id: 'dental',
        name: 'BrightSmile Dental',
        theme: {
            primary: 'bg-teal-700',
            secondary: 'bg-teal-50',
            accent: 'text-teal-800',
            font: 'font-sans',
            background: 'bg-white',
            text: 'text-slate-700',
            heading: 'text-slate-900'
        },
        hero: {
            title: 'Your Perfect Smile Starts Here',
            subtitle: 'Experience gentle, state-of-the-art dentistry in a calming environment designed for your comfort.',
            cta: 'Book Appointment',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80'
        },
        stats: [
            { label: 'Happy Patients', value: '5,000+' },
            { label: 'Years Serving', value: '15' },
            { label: 'Specialists', value: '8' },
            { label: '5-Star Reviews', value: '450+' }
        ],
        about: {
            title: 'Caring for Your Smile, Caring for You',
            content: 'At BrightSmile, we believe that a visit to the dentist should be a positive experience. Our clinic combines the latest dental technology with a warm, family-friendly atmosphere. From routine checkups to complex cosmetic procedures, our team is dedicated to helping you achieve and maintain optimal oral health.',
            image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80'
        },
        services: [
            {
                title: 'General Dentistry',
                description: 'Comprehensive exams, digital x-rays, and gentle cleanings for the whole family.',
                iconName: 'UserGroupIcon'
            },
            {
                title: 'Cosmetic Whitening',
                description: 'Professional Zoom! whitening to brighten your smile up to 8 shades in one visit.',
                iconName: 'SparklesIcon'
            },
            {
                title: 'Orthodontics',
                description: 'Invisalign and traditional braces to align your teeth and improve your bite.',
                iconName: 'HeartIcon'
            }
        ],
        testimonials: [
            {
                quote: "I used to be terrified of the dentist, but the team here made me feel so at ease.",
                author: "Emily Rodriguez",
                role: "Patient"
            },
            {
                quote: "My kids actually look forward to their appointments. The pediatric wing is amazing!",
                author: "Michael Brown",
                role: "Parent"
            }
        ],
        contact: {
            address: "456 Wellness Blvd, Beverly Hills, CA 90210",
            phone: "+1 (310) 555-0199",
            email: "care@brightsmile.com",
            hours: "Mon-Sat: 8:00 AM - 5:00 PM"
        }
    },
    'restaurant': {
        id: 'restaurant',
        name: 'Lumière Bistro',
        theme: {
            primary: 'bg-orange-900',
            secondary: 'bg-orange-50',
            accent: 'text-orange-900',
            font: 'font-serif',
            background: 'bg-stone-50',
            text: 'text-stone-800',
            heading: 'text-stone-950'
        },
        hero: {
            title: 'A Culinary Journey Through France',
            subtitle: 'Authentic flavors, locally sourced ingredients, and an unforgettable atmosphere in the heart of the city.',
            cta: 'Reserve a Table',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80'
        },
        stats: [
            { label: 'Michelin Stars', value: '1' },
            { label: 'Wines on List', value: '200+' },
            { label: 'Years Open', value: '10' },
            { label: 'Seasonal Dishes', value: '12' }
        ],
        about: {
            title: 'Tradition Meets Innovation',
            content: 'Chef Jean-Pierre brings the rustic charm of Provence to your plate, elevated with modern techniques. We source our produce from local organic farms and fly in specialty ingredients directly from France. Lumière is more than just a meal; it is a celebration of food, wine, and good company.',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80'
        },
        services: [
            {
                title: 'Fine Dining',
                description: 'Exquisite multi-course tasting menus paired with our sommelier\'s selection.',
                iconName: 'CakeIcon'
            },
            {
                title: 'Private Events',
                description: 'Host your wedding reception or corporate dinner in our elegant private room.',
                iconName: 'UserGroupIcon'
            },
            {
                title: 'Weekend Brunch',
                description: 'Start your weekend right with our famous pastries, benedicts, and mimosas.',
                iconName: 'ClockIcon'
            }
        ],
        testimonials: [
            {
                quote: "The duck confit was absolute perfection. A true gem in the city.",
                author: "David Laurent",
                role: "Food Critic"
            },
            {
                quote: "Beautiful atmosphere and impeccable service. Perfect for date night.",
                author: "Jessica Lee",
                role: "Guest"
            }
        ],
        contact: {
            address: "789 Culinary Way, Chicago, IL 60611",
            phone: "+1 (312) 555-0888",
            email: "reservations@lumiere.com",
            hours: "Tue-Sun: 5:00 PM - 11:00 PM"
        }
    },
    'salons-spa': {
        id: 'salons-spa',
        name: 'Serenity Spa & Salon',
        theme: {
            primary: 'bg-rose-500',
            secondary: 'bg-rose-50',
            accent: 'text-rose-700',
            font: 'font-sans',
            background: 'bg-white',
            text: 'text-slate-700',
            heading: 'text-slate-900'
        },
        hero: {
            title: 'Rejuvenate Your Body & Mind',
            subtitle: 'Escape the ordinary and indulge in our luxurious spa treatments designed to restore your natural balance.',
            cta: 'Book Treatment',
            image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80'
        },
        stats: [
            { label: 'Expert Therapists', value: '20+' },
            { label: 'Treatments', value: '50+' },
            { label: 'Relaxation Rooms', value: '10' },
            { label: 'Organic Products', value: '100%' }
        ],
        about: {
            title: 'Your Sanctuary in the City',
            content: 'Serenity Spa was founded on the principle that self-care is a necessity, not a luxury. Our holistic approach combines ancient healing traditions with modern wellness science. Step into our oasis of calm and leave the stresses of the outside world behind.',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80'
        },
        services: [
            {
                title: 'Massage Therapy',
                description: 'Relaxing Swedish, Deep Tissue, and Hot Stone massages tailored to your needs.',
                iconName: 'HeartIcon'
            },
            {
                title: 'Hair Styling',
                description: 'Expert cuts, coloring, and styling by top professionals using premium products.',
                iconName: 'SparklesIcon'
            },
            {
                title: 'Facial Treatments',
                description: 'Revitalizing facials using premium organic products for glowing skin.',
                iconName: 'UserGroupIcon'
            }
        ],
        testimonials: [
            {
                quote: "I left feeling like a completely new person. The massage was heavenly.",
                author: "Amanda White",
                role: "Client"
            },
            {
                quote: "The best salon experience I've had. They really listen to what you want.",
                author: "Jennifer Wu",
                role: "Client"
            }
        ],
        contact: {
            address: "321 Relaxation Rd, Miami, FL 33139",
            phone: "+1 (305) 555-0777",
            email: "hello@serenityspa.com",
            hours: "Mon-Sun: 10:00 AM - 8:00 PM"
        }
    },
    'hotels': {
        id: 'hotels',
        name: 'The Azure Resort',
        theme: {
            primary: 'bg-blue-950',
            secondary: 'bg-blue-50',
            accent: 'text-blue-900',
            font: 'font-serif',
            background: 'bg-slate-50',
            text: 'text-slate-700',
            heading: 'text-slate-950'
        },
        hero: {
            title: 'Luxury Living by the Ocean',
            subtitle: 'Experience world-class hospitality with breathtaking views, private beaches, and unparalleled service.',
            cta: 'Check Availability',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80'
        },
        stats: [
            { label: 'Luxury Suites', value: '150' },
            { label: 'Restaurants', value: '5' },
            { label: 'Infinity Pools', value: '3' },
            { label: 'Private Beach', value: '2km' }
        ],
        about: {
            title: 'A Destination Like No Other',
            content: 'Perched on the pristine cliffs of the coast, The Azure Resort offers a secluded getaway for the discerning traveler. Every detail, from the architecture to the amenities, is designed to harmonize with the natural beauty of our surroundings. Come discover why we are voted the #1 resort in the region.',
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80'
        },
        services: [
            {
                title: 'Ocean View Suites',
                description: 'Spacious rooms with private balconies overlooking the sea and premium amenities.',
                iconName: 'BuildingOfficeIcon'
            },
            {
                title: 'Infinity Pool',
                description: 'Relax in our temperature-controlled infinity pool with swim-up bar.',
                iconName: 'WifiIcon'
            },
            {
                title: 'Concierge Service',
                description: '24/7 dedicated concierge to fulfill your every request, from tours to dining.',
                iconName: 'CalendarIcon'
            }
        ],
        testimonials: [
            {
                quote: "An absolute paradise. The staff went above and beyond for us.",
                author: "Robert Taylor",
                role: "Guest"
            },
            {
                quote: "The views are unmatched and the amenities are top-notch.",
                author: "Lisa Anderson",
                role: "Travel Blogger"
            }
        ],
        contact: {
            address: "555 Coastal Hwy, Malibu, CA 90265",
            phone: "+1 (310) 555-0999",
            email: "stay@azureresort.com",
            hours: "24/7 Front Desk"
        }
    }
};
