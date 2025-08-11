
import React from 'react';

export const RoadmapNode: React.FC<{ scenario: any; icon: React.ReactNode; isCentral?: boolean }> = ({ scenario, icon, isCentral = false }) => (
    <div className={`relative w-full md:w-1/3 flex flex-col items-center text-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl ring-1 transition-all duration-300 ${isCentral ? 'ring-teal-500/50 scale-105 shadow-2xl shadow-teal-900/50 z-10' : 'ring-gray-700/80'}`}>
        <div className={`flex items-center justify-center rounded-full ring-8 mb-6 ${isCentral ? 'w-24 h-24 bg-teal-900 ring-teal-900/50' : 'w-20 h-20 bg-gray-700 ring-gray-700/50'}`}>
            {icon}
        </div>
        <h4 className={`text-2xl font-bold ${isCentral ? 'text-teal-300' : 'text-gray-100'}`}>{scenario.title}</h4>
        <p className="mt-3 text-gray-400 text-base leading-relaxed flex-grow min-h-[120px]">{scenario.description}</p>
        <div className="mt-6 w-full pt-4 border-t border-white/10">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{scenario.kpiLabel}</p>
            <p className={`mt-1 text-3xl font-bold ${isCentral ? 'text-white' : 'text-gray-300'}`}>{scenario.kpi}</p>
        </div>
    </div>
);
