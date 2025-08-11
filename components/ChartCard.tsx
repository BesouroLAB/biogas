

import React from 'react';

interface ChartCardProps {
    title: string;
    children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 lg:p-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">{title}</h3>
            <div>{children}</div>
        </div>
    );
};