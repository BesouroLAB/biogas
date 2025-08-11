
import React from 'react';

export const TrendHighlightCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    color: 'sky' | 'violet' | 'yellow';
}> = ({ icon, title, description, color }) => (
    <div className={`bg-gray-800/50 p-6 rounded-lg ring-1 ring-white/10 flex items-start space-x-5 transition-all duration-300 hover:ring-${color}-500/30 hover:shadow-xl hover:shadow-${color}-900/40 hover:-translate-y-1`}>
        <div className={`flex-shrink-0 bg-${color}-900/50 text-${color}-300 rounded-full p-4`}>
            {icon}
        </div>
        <div>
            <h5 className={`text-xl font-bold text-${color}-300 mb-1`}>{title}</h5>
            <p className="text-gray-400 text-base leading-relaxed">{description}</p>
        </div>
    </div>
);