

import React from 'react';
import { CheckCircleIcon } from '../icons/Icons.tsx';

interface PlayerCategoryCardProps {
    title: string;
    description: string;
    players: string[];
    icon: React.ReactNode;
    color: 'blue' | 'green' | 'purple' | 'yellow';
    linkedTab?: string;
    onSeeStrategy?: (tabId: string) => void;
}

export const PlayerCategoryCard: React.FC<PlayerCategoryCardProps> = ({ title, description, players, icon, color, linkedTab, onSeeStrategy }) => {
    const colorClasses = {
        blue: {
            text: 'text-sky-400',
            ring: 'hover:ring-sky-500/50',
            shadow: 'hover:shadow-sky-900/40',
            iconBg: 'bg-sky-900/50',
            button: 'bg-sky-600/40 hover:bg-sky-600/70 text-sky-200 focus:ring-sky-400'
        },
        green: {
            text: 'text-green-400',
            ring: 'hover:ring-green-500/50',
            shadow: 'hover:shadow-green-900/40',
            iconBg: 'bg-green-900/50',
            button: 'bg-green-600/40 hover:bg-green-600/70 text-green-200 focus:ring-green-400'
        },
        purple: {
            text: 'text-purple-400',
            ring: 'hover:ring-purple-500/50',
            shadow: 'hover:shadow-purple-900/40',
            iconBg: 'bg-purple-900/50',
            button: 'bg-purple-600/40 hover:bg-purple-600/70 text-purple-200 focus:ring-purple-400'
        },
        yellow: {
            text: 'text-yellow-400',
            ring: 'hover:ring-yellow-500/50',
            shadow: 'hover:shadow-yellow-900/40',
            iconBg: 'bg-yellow-900/50',
            button: 'bg-yellow-600/40 hover:bg-yellow-600/70 text-yellow-200 focus:ring-yellow-400'
        }
    };

    const selectedColor = colorClasses[color] || colorClasses.blue;

    const handleButtonClick = () => {
        if (linkedTab && onSeeStrategy) {
            onSeeStrategy(linkedTab);
        }
    };

    return (
        <div className={`bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 flex flex-col h-full transition-all duration-300 ${selectedColor.ring} ${selectedColor.shadow} hover:-translate-y-1`}>
            <div className="flex items-center mb-5">
                <div className={`p-3 rounded-full mr-4 ${selectedColor.iconBg} ${selectedColor.text}`}>
                    {icon}
                </div>
                <h3 className={`text-2xl font-bold ${selectedColor.text}`}>{title}</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {description}
            </p>
            
            <div className="flex-grow" />

            <div className="mt-auto">
                 <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-3">Principais Nomes:</h4>
                    <div className="flex flex-wrap gap-3">
                        {players.map(player => (
                            <div key={player} className="flex items-center bg-gray-700/70 px-3 py-1.5 rounded-full">
                               <CheckCircleIcon className={`h-5 w-5 mr-2 flex-shrink-0 ${selectedColor.text}`} />
                               <span className="text-gray-200 font-medium text-base">{player}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {linkedTab && onSeeStrategy && (
                    <div className="mt-6">
                        <button
                            onClick={handleButtonClick}
                            className={`w-full font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${selectedColor.button}`}
                            aria-label={`Ver estratégia detalhada de ${title}`}
                        >
                            Ver Estratégia Detalhada &rarr;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};