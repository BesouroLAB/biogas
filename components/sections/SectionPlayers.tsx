

import React, { useState } from 'react';
import { TabbedSection } from '../TabbedSection.tsx';
import { PlayerCategoryCard } from '../cards/PlayerCategoryCard.tsx';
import { PlayerStrategyCard } from '../cards/PlayerStrategyCard.tsx';
import { FormattedTextViewer } from '../FormattedTextViewer.tsx';
import * as Icons from '../icons/Icons.tsx';

type IconName = keyof typeof Icons;

export const SectionPlayers: React.FC<any> = ({ data, t }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    const handleSeeStrategy = (tabId: string) => {
        const tabIndex = tabs.findIndex(tab => tab.title.toLowerCase() === data.tabs[tabId]?.toLowerCase());
        if (tabIndex !== -1) {
            setActiveTab(tabIndex);
            
            const sectionElement = document.getElementById('players');
            if (sectionElement) {
                const headerOffset = 80; // height of sticky header
                const elementPosition = sectionElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };
    
    const overviewContent = (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            {data.categories.map((category: any) => {
                const IconComponent = Icons[category.icon as IconName] as React.ElementType;
                return (
                    <PlayerCategoryCard 
                        key={category.id}
                        title={category.title}
                        description={category.description}
                        players={category.players}
                        icon={IconComponent ? <IconComponent className="h-8 w-8" /> : null}
                        color={category.color}
                        linkedTab={category.linkedTab}
                        onSeeStrategy={handleSeeStrategy}
                    />
                );
            })}
        </div>
    );

    const tabs = [
        {
            title: data.tabs.overview,
            content: overviewContent
        },
        ...data.strategicMoves.map((playerData: any) => ({
            title: data.tabs[playerData.id],
            content: <PlayerStrategyCard data={playerData} keywords={t.keywords} />
        }))
    ];

    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            
            <TabbedSection 
                tabs={tabs} 
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            {data.conclusion && (
                 <div className="mt-12 pt-8 border-t border-gray-700 bg-gray-800/50 rounded-lg p-8 ring-1 ring-white/10">
                    <FormattedTextViewer text={data.conclusion} keywords={t.keywords} />
                 </div>
            )}
        </div>
    );
};