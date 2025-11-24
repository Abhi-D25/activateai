'use client';

import { motion } from 'framer-motion';
import {
    PhoneIcon,
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    CameraIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline';
// Using Lucide for brand icons if available, otherwise falling back to text/generic


import Image from 'next/image';

const channels = [
    { name: 'Phone', icon: PhoneIcon, color: 'text-blue-400' },
    { name: 'SMS', icon: ChatBubbleOvalLeftEllipsisIcon, color: 'text-green-400' },
    { name: 'WhatsApp', path: '/logos/whatsapp.svg', color: 'text-green-500' },
    { name: 'Instagram', path: '/logos/instagram.svg', color: 'text-pink-500' },
    { name: 'TikTok', path: '/logos/tiktok.svg', color: 'text-black dark:text-white' },
    { name: 'Telegram', path: '/logos/telegram.svg', color: 'text-blue-500' },
    { name: 'Facebook', path: '/logos/facebook.svg', color: 'text-blue-600' },
    { name: 'Webchat', icon: ChatBubbleLeftRightIcon, color: 'text-purple-400' },
];

export default function ClientChannelsBanner() {
    return (
        <div className="w-full py-8 bg-black/30 backdrop-blur-sm border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <p className="text-center text-slate-400 text-sm mb-6 uppercase tracking-wider font-semibold">
                    Available on all your favorite channels
                </p>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-2 pr-12">
                        {[...channels, ...channels].map((channel, index) => (
                            <div key={index} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                {channel.path ? (
                                    <div className="relative w-6 h-6">
                                        <Image
                                            src={channel.path}
                                            alt={channel.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    channel.icon && <channel.icon className={`w-6 h-6 ${channel.color}`} />
                                )}
                                <span className="text-lg font-medium text-slate-200">{channel.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 py-2 pr-12">
                        {[...channels, ...channels].map((channel, index) => (
                            <div key={`clone-${index}`} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                {channel.path ? (
                                    <div className="relative w-6 h-6">
                                        <Image
                                            src={channel.path}
                                            alt={channel.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    channel.icon && <channel.icon className={`w-6 h-6 ${channel.color}`} />
                                )}
                                <span className="text-lg font-medium text-slate-200">{channel.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
