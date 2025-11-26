"use client";

import React, { useState, useMemo } from 'react';
import { industries, integrations } from '@/data/integrations';
import IntegrationCard from './IntegrationCard';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const IntegrationsBoard = () => {
    const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredIntegrations = useMemo(() => {
        return integrations.filter((integration) => {
            const matchesIndustry =
                selectedIndustry === "All Industries" ||
                integration.industry.includes(selectedIndustry);

            const matchesSearch =
                integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                integration.type.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesIndustry && matchesSearch;
        });
    }, [selectedIndustry, searchQuery]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            {/* Controls Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">

                {/* Industry Filter */}
                <div className="w-full lg:w-auto overflow-x-auto pb-6 lg:pb-0 custom-scrollbar">
                    <div className="flex space-x-2">
                        {industries.map((industry) => (
                            <button
                                key={industry}
                                onClick={() => setSelectedIndustry(industry)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${selectedIndustry === industry
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                                    }`}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative w-full lg:w-72">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-lg leading-5 bg-slate-900/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                        placeholder="Search integrations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid Section */}
            {filteredIntegrations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredIntegrations.map((integration, index) => (
                        <IntegrationCard key={index} integration={integration} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
                        <MagnifyingGlassIcon className="h-8 w-8 text-slate-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Request an Integration</h3>
                    <p className="text-slate-400 max-w-md mx-auto mb-8">
                        That request may not be visible, but you can request a new integration and we will look in to it for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => { setSelectedIndustry("All Industries"); setSearchQuery(""); }}
                            className="px-6 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors font-medium"
                        >
                            Clear Filters
                        </button>
                        <a
                            href="/contact"
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-500/20"
                        >
                            Request Integration
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IntegrationsBoard;
