

import React from 'react';
import { FormattedTextViewer } from '../FormattedTextViewer.tsx';
import * as Icons from '../icons/Icons.tsx';

type IconName = keyof typeof Icons;

interface PlayerStrategyCardProps {
    data: {
        title: string;
        subtitle: string;
        icon: IconName;
        color: 'blue' | 'green' | 'purple' | 'yellow';
        content: { title: string; description: string }[];
    };
    keywords: string[];
}

export const PlayerStrategyCard: React.FC<PlayerStrategyCardProps> = ({ data, keywords }) => {
    const colorClasses = {
        blue: {
            text: 'text-sky-400',
            iconBg: 'bg-sky-900/50'
        },
        green: {
            text: 'text-green-400',
            iconBg: 'bg-green-900/50'
        },
        purple: {
            text: 'text-purple-400',
            iconBg: 'bg-purple-900/50'
        },
        yellow: {
            text: 'text-yellow-400',
            iconBg: 'bg-yellow-900/50'
        }
    };

    const selectedColor = colorClasses[data.color] || colorClasses.blue;
    const IconComponent = Icons[data.icon] as React.ElementType;

    return (
        <div className="bg-gray-800/60 rounded-xl p-8 ring-1 ring-white/10 space-y-8">
            <div className="flex items-center">
                <div className={`p-4 rounded-full mr-5 ${selectedColor.iconBg} ${selectedColor.text}`}>
                    {IconComponent && <IconComponent className="h-10 w-10" />}
                </div>
                <div>
                    <h3 className={`text-4xl font-bold ${selectedColor.text}`}>{data.title}</h3>
                    <p className="text-xl text-gray-400 font-medium mt-1">{data.subtitle}</p>
                </div>
            </div>
            
            <div className="space-y-6">
                {data.content.map((item, index) => (
                    <div key={index}>
                        {item.title && <h4 className="text-2xl font-semibold text-gray-200 mb-3">{item.title}</h4>}
                        <FormattedTextViewer text={item.description} keywords={keywords} />
                    </div>
                ))}
            </div>
        </div>
    );
};