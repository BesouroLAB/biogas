
import React from 'react';
import { FunnelIcon } from '../icons/Icons.tsx';

interface FunnelDataPoint {
    label: string;
    value: number;
    color: string;
}

interface FunnelChartProps {
    data: FunnelDataPoint[];
    title: string;
}

export const FunnelChart: React.FC<FunnelChartProps> = ({ data, title }) => {
    if (!data || data.length === 0) return null;

    const maxValue = data[0]?.value || 100;

    return (
        <div className="bg-gray-800/60 rounded-xl p-6 lg:p-8 ring-1 ring-purple-500/30 w-full">
            <h3 className="text-2xl font-bold text-purple-200 mb-6 text-center flex items-center justify-center gap-3">
                <FunnelIcon className="h-7 w-7" />
                <span>{title}</span>
            </h3>
            <div className="space-y-2 relative max-w-3xl mx-auto">
                {data.map((item, index) => {
                    const widthPercentage = (item.value / maxValue) * 100;
                    return (
                        <div key={index} className="flex flex-col items-center group" title={`${item.label}: ${item.value}%`}>
                            <div className="w-full flex justify-between items-center px-2 mb-1">
                                <span className="text-gray-300 text-base font-medium">{item.label}</span>
                                <span className="text-white font-bold text-base">{item.value}%</span>
                            </div>
                            <div className="w-full h-8 flex items-center justify-center relative">
                                <div 
                                    className={`h-full ${item.color} rounded transition-all duration-500 ease-out`}
                                    style={{ width: `${widthPercentage}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
