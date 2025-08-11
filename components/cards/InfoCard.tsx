
import React from 'react';

export const InfoCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 ring-1 ring-white/10 h-full">
        <div className="flex items-center mb-4">
            {icon}
            <h4 className="ml-3 text-2xl font-semibold text-cyan-300">{title}</h4>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg leading-relaxed">
            {children}
        </ul>
    </div>
);
