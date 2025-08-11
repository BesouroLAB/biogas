


import React from 'react';
import { TrendHighlightCard } from '../cards/TrendHighlightCard.tsx';
import { LayersIcon, ArrowsRightLeftIcon, BeakerIcon, ArrowPathIcon, CubeTransparentIcon, BuildingOffice2Icon, MicrochipIcon, BuildingBlocksIcon, BanknotesIcon, SparklesIcon, TrophyIcon, ShieldCheckIcon } from '../icons/Icons.tsx';

export const SectionTendencias: React.FC<any> = ({ t, data, renderExpandableText }) => {
    const icons: Record<string, React.ReactNode> = {
        'Separação por Membranas': <LayersIcon className="h-7 w-7" />,
        'Adsorção por Oscilação de Pressão (PSA)': <ArrowsRightLeftIcon className="h-7 w-7" />,
        'Reatores CSTR e UASB': <BeakerIcon className="h-7 w-7" />,
        'Resíduo Zero (Gás Verde)': <ArrowPathIcon className="h-7 w-7" />,
        'Clusters e Hubs de Biometano': <CubeTransparentIcon className="h-7 w-7" />,
        'Parcerias Público-Privadas (PPPs)': <BuildingOffice2Icon className="h-7 w-7" />,
        'Atração de Capital ESG': <SparklesIcon className="h-7 w-7" />,
        'Fomento Público (BNDES/FINEP)': <TrophyIcon className="h-7 w-7" />,
        'Empilhamento de Receitas (Stacking)': <ShieldCheckIcon className="h-7 w-7" />,
    };

    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">{data.intro}</div>

            {/* Main content cards */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Tech Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 space-y-4 ring-1 ring-white/10">
                    <div className="flex items-center">
                        <MicrochipIcon className="h-9 w-9 text-sky-400"/>
                        <h4 className="ml-4 text-3xl font-semibold text-sky-400">{data.tech.title}</h4>
                    </div>
                    {renderExpandableText('trends-tech', data.tech.description, 250)}
                </div>

                {/* Business Models Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 space-y-4 ring-1 ring-white/10">
                    <div className="flex items-center">
                        <BuildingBlocksIcon className="h-9 w-9 text-violet-400"/>
                        <h4 className="ml-4 text-3xl font-semibold text-violet-400">{data.businessModels.title}</h4>
                    </div>
                    {renderExpandableText('trends-biz', data.businessModels.description, 250)}
                </div>

                {/* Finance Card (New) */}
                {data.finance && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 space-y-4 ring-1 ring-white/10">
                        <div className="flex items-center">
                            <BanknotesIcon className="h-9 w-9 text-yellow-400"/>
                            <h4 className="ml-4 text-3xl font-semibold text-yellow-400">{data.finance.title}</h4>
                        </div>
                        {renderExpandableText('trends-finance', data.finance.description, 250)}
                    </div>
                )}
            </div>
            
            {/* Visual Summary */}
            <div className="pt-8">
                <h3 className="text-3xl font-bold text-center text-gray-200 mb-8">{data.highlightsTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Tech Highlights */}
                    {data.techRoutes.map((route: any) => (
                        <TrendHighlightCard 
                            key={route.id}
                            icon={icons[route.title] || <MicrochipIcon className="h-7 w-7" />}
                            title={route.title}
                            description={route.description}
                            color="sky"
                        />
                    ))}
                    {/* Business Model Highlights */}
                    {data.businessModelExamples.map((example: any) => (
                         <TrendHighlightCard 
                            key={example.id}
                            icon={icons[example.title] || <BuildingBlocksIcon className="h-7 w-7" />}
                            title={example.title}
                            description={example.description}
                            color="violet"
                        />
                    ))}
                    {/* Finance Highlights (New) */}
                     {data.financeHighlights && data.financeHighlights.map((highlight: any) => (
                         <TrendHighlightCard 
                            key={highlight.id}
                            icon={icons[highlight.title] || <BanknotesIcon className="h-7 w-7" />}
                            title={highlight.title}
                            description={highlight.description}
                            color="yellow"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};