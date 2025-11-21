'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { IndustryData } from '@/app/demos/data';
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ScaleIcon,
    UserGroupIcon,
    DocumentTextIcon,
    BuildingOfficeIcon,
    SparklesIcon,
    HeartIcon,
    ClockIcon,
    CalendarIcon,
    CakeIcon,
    WifiIcon,
    ArrowLeftIcon
} from '@heroicons/react/24/outline';

interface IndustryTemplateProps {
    data: IndustryData;
}

const iconMap: Record<string, any> = {
    ScaleIcon,
    UserGroupIcon,
    DocumentTextIcon,
    BuildingOfficeIcon,
    SparklesIcon,
    HeartIcon,
    ClockIcon,
    CalendarIcon,
    CakeIcon,
    WifiIcon,
    MapPinIcon,
    PhoneIcon
};

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
    const { theme, hero, services, testimonials, contact, name, about, stats } = data;
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`min-h-screen ${theme.background} ${theme.text} ${theme.font} overflow-x-hidden`}>
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? `${theme.primary} shadow-lg py-3` : 'bg-transparent py-6'
                }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a 
                            href="/solutions"
                            className="flex items-center gap-2 text-white/90 hover:text-white transition-all group bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
                        >
                            <motion.div
                                animate={{ x: [0, -4, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center justify-center"
                            >
                                <ArrowLeftIcon className="w-4 h-4" />
                            </motion.div>
                            <span className="text-sm font-medium hidden sm:inline-block">Go Back</span>
                        </a>
                        <h1 className={`text-2xl font-bold text-white tracking-tight`}>{name}</h1>
                    </div>
                    <div className="hidden md:flex space-x-8 text-white/90 font-medium">
                        <a href="#home" className="hover:text-white transition-colors">Home</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#services" className="hover:text-white transition-colors">Services</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">Stories</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <button className={`px-6 py-2.5 rounded-full bg-white ${theme.accent} font-bold hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                        Book Now
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <Image
                        src={hero.image}
                        alt="Hero Background"
                        fill
                        className="object-cover scale-110"
                        priority
                    />
                    <div className={`absolute inset-0 ${theme.primary} opacity-70 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                            {hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light leading-relaxed">
                            {hero.subtitle}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-10 py-5 rounded-full bg-white ${theme.accent} text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all`}
                        >
                            {hero.cta}
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="relative z-20 -mt-20 container mx-auto px-6 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center border-r last:border-r-0 border-slate-100">
                            <div className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-2`}>{stat.value}</div>
                            <div className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2"
                        >
                            {about.image && (
                                <div className="relative h-[400px] w-full">
                                    <div className={`absolute -top-4 -left-4 w-24 h-24 ${theme.primary} opacity-10 rounded-full`}></div>
                                    <div className={`absolute -bottom-4 -right-4 w-32 h-32 ${theme.accent} opacity-10 rounded-full`}></div>
                                    <Image
                                        src={about.image}
                                        alt="About Us"
                                        fill
                                        className="rounded-2xl shadow-2xl relative z-10 object-cover"
                                    />
                                </div>
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2"
                        >
                            <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${theme.accent}`}>About Us</h2>
                            <h3 className={`text-4xl md:text-5xl font-bold mb-8 ${theme.heading}`}>{about.title}</h3>
                            <p className="text-lg leading-relaxed opacity-80 mb-8">
                                {about.content}
                            </p>
                            <button className={`text-lg font-semibold ${theme.accent} hover:opacity-80 transition-opacity flex items-center group`}>
                                Learn More
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={`py-32 ${theme.secondary} relative`}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${theme.accent}`}>Our Expertise</h2>
                        <h3 className={`text-4xl md:text-5xl font-bold ${theme.heading}`}>Premium Services</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = iconMap[service.iconName] || SparklesIcon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${theme.primary} bg-opacity-10 flex items-center justify-center mb-8`}>
                                        <IconComponent className={`w-8 h-8 ${theme.accent}`} />
                                    </div>
                                    <h4 className={`text-2xl font-bold mb-4 ${theme.heading}`}>{service.title}</h4>
                                    <p className="leading-relaxed opacity-70">
                                        {service.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-1/3 h-full ${theme.secondary} opacity-30 skew-x-12 translate-x-20`}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${theme.accent}`}>Testimonials</h2>
                        <h3 className={`text-4xl md:text-5xl font-bold ${theme.heading}`}>Client Stories</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-3xl bg-white border border-slate-100 shadow-xl relative"
                            >
                                <div className={`text-8xl absolute -top-6 left-8 ${theme.accent} opacity-10 font-serif`}>&quot;</div>
                                <p className={`text-xl italic mb-8 relative z-10 ${theme.heading} font-light`}>
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center border-t border-slate-100 pt-6">
                                    <div className={`w-12 h-12 rounded-full ${theme.primary} flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md`}>
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <h4 className={`font-bold text-lg ${theme.heading}`}>{testimonial.author}</h4>
                                        <p className={`text-sm ${theme.accent} font-medium`}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-32 ${theme.primary} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-8 leading-tight">Ready to Transform Your Experience?</h2>
                            <p className="text-xl opacity-80 mb-12 font-light">
                                Contact us today to schedule your appointment or consultation. We look forward to serving you.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <MapPinIcon className="w-8 h-8 mr-6 opacity-80 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                                        <span className="text-lg opacity-80">{contact.address}</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <PhoneIcon className="w-8 h-8 mr-6 opacity-80 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                        <span className="text-lg opacity-80">{contact.phone}</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <EnvelopeIcon className="w-8 h-8 mr-6 opacity-80 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                        <span className="text-lg opacity-80">{contact.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl text-slate-800 shadow-2xl"
                        >
                            <h3 className={`text-3xl font-bold mb-8 ${theme.heading}`}>Send us a Message</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 opacity-70">Name</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 opacity-70">Email</label>
                                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 opacity-70">Message</label>
                                    <textarea className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none h-32 transition-all" placeholder="How can we help?"></textarea>
                                </div>
                                <button className={`w-full py-5 rounded-xl ${theme.primary} text-white font-bold text-lg hover:opacity-90 hover:shadow-lg transition-all transform hover:-translate-y-1`}>
                                    Send Message
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 ${theme.secondary} border-t border-slate-200 text-center text-slate-500 text-sm`}>
                <p className="font-medium">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
                <p className="mt-2 opacity-60">Powered by ActivateAI Website Modernization</p>
            </footer>
        </div>
    );
}
