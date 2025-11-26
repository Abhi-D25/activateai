import React from 'react';
import { Integration } from '@/data/integrations';

interface IntegrationCardProps {
    integration: Integration;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ integration }) => {
    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-blue-500/20 transition-all">
                    {integration.name.charAt(0)}
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    {integration.type}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {integration.name}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {integration.description || `Seamlessly integrate ${integration.name} with your AI receptionist.`}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {integration.industry.slice(0, 2).map((ind, idx) => (
                    ind !== "All Industries" && (
                        <span key={idx} className="text-[10px] uppercase tracking-wider text-slate-500">
                            {ind}
                        </span>
                    )
                ))}
            </div>
        </div>
    );
};

export default IntegrationCard;
