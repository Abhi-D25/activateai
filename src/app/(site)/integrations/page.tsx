import React from 'react';
import IntegrationsBoard from '@/components/IntegrationsBoard';
import ParticleBackground from '@/app/components/ParticleBackground';

export const metadata = {
    title: 'Integrations - ActivateAI',
    description: 'Connect ActivateAI with your favorite tools and services.',
};

export default function IntegrationsPage() {
    return (
        <div className="min-h-screen bg-black relative">
            <div className="absolute inset-0 z-0">
                <ParticleBackground />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                        {/* Background blobs removed as per user request */}
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Integrations
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        Connect ActivateAI with your favorite tools and services to streamline your workflow and enhance your business operations.
                    </p>
                </div>
            </div>

            {/* Integrations Board */}
            <IntegrationsBoard />
        </div>
    );
}
