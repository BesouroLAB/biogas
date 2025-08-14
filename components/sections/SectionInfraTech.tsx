import React from 'react';
import { TabbedSection } from '../TabbedSection.tsx';
import { TechnologyCard } from '../cards/TechnologyCard.tsx';
import * as Icons from '../icons/Icons.tsx';

const ProvidersPanel: React.FC<{ data: any }> = ({ data }) => (
    <div className="space-y-8">
        <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.title}</h3>
        <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{data.intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-4">
            {data.categories.map((category: any) => (
                <div key={category.id} className="bg-gray-800/60 rounded-xl p-6 ring-1 ring-white/10">
                    <h4 className="text-2xl font-bold text-gray-200 mb-4">{category.title}</h4>
                    <div className="flex flex-wrap gap-3">
                        {category.players.map((player: string) => (
                            <span key={player} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full font-medium text-base">
                                {player}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const SectionInfraTech: React.FC<{ data: any; }> = ({ data }) => {

    const digestionTab = {
        title: data.tabs.digestion,
        content: (
            <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.digestionTech.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {data.digestionTech.technologies.map((tech: any) => (
                        <TechnologyCard key={tech.id} tech={tech} />
                    ))}
                </div>
            </div>
        )
    };

    const upgradingTab = {
        title: data.tabs.upgrading,
        content: (
             <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.upgradingTech.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {data.upgradingTech.technologies.map((tech: any) => (
                        <TechnologyCard key={tech.id} tech={tech} />
                    ))}
                </div>
            </div>
        )
    };

    const providersTab = {
        title: data.tabs.providers,
        content: <ProvidersPanel data={data.providers} />
    };

    const tabs = [digestionTab, upgradingTab, providersTab];

    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>
            <TabbedSection tabs={tabs} />
        </div>
    );
};