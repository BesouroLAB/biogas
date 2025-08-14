import React from 'react';
import { TabbedSection } from '../TabbedSection.tsx';
import * as Icons from '../icons/Icons.tsx';

type IconName = keyof typeof Icons;

const FederalFinancingCard: React.FC<{ fund: any }> = ({ fund }) => {
    const IconComponent = Icons[fund.icon as IconName] as React.ElementType;
    return (
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 flex flex-col h-full transition-all duration-300 hover:ring-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/40 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
                <h4 className="text-2xl font-bold text-cyan-300 w-3/4">{fund.title}</h4>
                {IconComponent && (
                    <div className="p-3 bg-cyan-900/50 rounded-full text-cyan-300">
                        <IconComponent className="h-8 w-8" />
                    </div>
                )}
            </div>
            <div className="mb-5">
                <p className="text-5xl font-bold text-white">{fund.value}</p>
                <p className="text-base text-gray-400 font-medium">{fund.valueLabel}</p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 flex-grow">{fund.description}</p>
            <div className="mt-auto pt-4 border-t border-white/20">
                <p className="text-base text-gray-400">
                    <span className="font-semibold text-gray-300">{fund.example.label}</span> {fund.example.text}
                </p>
            </div>
        </div>
    );
};

const StateProgramCard: React.FC<{ program: any }> = ({ program }) => {
    const IconComponent = Icons[program.icon as IconName] as React.ElementType;
    return (
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 flex flex-col h-full">
            <div className="flex items-center mb-5">
                {IconComponent && (
                    <div className="p-3 bg-gray-900 rounded-full text-teal-300 mr-4">
                        <IconComponent className="h-7 w-7" />
                    </div>
                )}
                <h4 className="text-2xl font-bold text-teal-300">{program.title}</h4>
            </div>
            <ul className="space-y-3 flex-grow">
                {program.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                        <Icons.CheckCircleIcon className="h-6 w-6 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-300">{benefit}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const TaxIncentiveCard: React.FC<{ card: any }> = ({ card }) => {
    const IconComponent = Icons[card.icon as IconName] as React.ElementType;
    return (
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 flex items-start gap-6">
            {IconComponent && (
                <div className="p-4 bg-gray-900 rounded-full text-yellow-300 mt-1">
                    <IconComponent className="h-9 w-9" />
                </div>
            )}
            <div>
                <h4 className="text-2xl font-bold text-yellow-300 mb-2">{card.title}</h4>
                <p className="text-lg text-gray-300 leading-relaxed">{card.description}</p>
            </div>
        </div>
    );
};


export const SectionPoliticas: React.FC<{ data: any; }> = ({ data }) => {
    
    const tabs = [
        {
            title: data.tabs.federalFinancing,
            content: (
                <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.federalFinancing.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {data.federalFinancing.funds.map((fund: any) => (
                            <FederalFinancingCard key={fund.id} fund={fund} />
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: data.tabs.statePrograms,
            content: (
                 <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.statePrograms.title}</h3>
                     <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{data.statePrograms.intro}</p>
                    <div className="grid md:grid-cols-3 gap-8 pt-4">
                        {data.statePrograms.programs.map((program: any) => (
                            <StateProgramCard key={program.id} program={program} />
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: data.tabs.taxIncentives,
            content: (
                 <div className="space-y-8">
                     <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.taxIncentives.title}</h3>
                     <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{data.taxIncentives.intro}</p>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                        {data.taxIncentives.cards.map((card: any) => (
                            <TaxIncentiveCard key={card.id} card={card} />
                        ))}
                     </div>
                </div>
            )
        }
    ];

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
