
import React from 'react';

type Item = {
    id: string;
    text: string;
}

interface HighlightPointCardProps {
    title: string;
    icon: React.ReactNode;
    color: 'green' | 'yellow';
    items: Item[];
    itemIcon: React.ReactNode;
}

export const HighlightPointCard: React.FC<HighlightPointCardProps> = ({ title, icon, color, items, itemIcon }) => {
    const colorClasses = {
        green: {
            text: 'text-green-400',
            ring: 'ring-green-500/30',
        },
        yellow: {
            text: 'text-yellow-400',
            ring: 'ring-yellow-500/30',
        }
    };

    const selectedColor = colorClasses[color];

    return (
        <div className={`bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 ring-1 h-full ${selectedColor.ring}`}>
            <div className="flex items-center mb-5">
                {icon}
                <h4 className={`ml-3 text-2xl font-semibold ${selectedColor.text}`}>{title}</h4>
            </div>
            <ul className="space-y-4">
                {items.map((item) => (
                    <li key={item.id} className="flex items-start">
                        <span className="flex-shrink-0 mr-3 mt-1">
                            {itemIcon}
                        </span>
                        <span className="text-gray-300 text-lg leading-relaxed">{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
