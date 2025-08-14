

import React from 'react';
import { SummaryStatCard } from '../cards/SummaryStatCard.tsx';
import { FormattedTextViewer } from '../FormattedTextViewer.tsx';
import * as Icons from '../icons/Icons.tsx';

type IconName = keyof typeof Icons;

export const SectionSumario: React.FC<any> = ({ t, data }) => {
    return (
        <div className="space-y-12">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-teal-400 mb-6 border-l-4 border-teal-400 pl-4">{data.sectionTitle}</h2>
                {data.intro && (
                    <div className="prose prose-lg prose-invert max-w-none text-gray-300 mb-12">
                         <p>{data.intro}</p>
                    </div>
                )}
            </div>

            {data.points && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {data.points.map((point: any) => {
                        const IconComponent = Icons[point.icon as IconName] as React.ElementType;
                        const colorClasses = {
                            green: 'text-green-400',
                            yellow: 'text-yellow-400',
                            blue: 'text-sky-400',
                        };
                        const ringClasses = {
                            green: 'ring-green-500/30',
                            yellow: 'ring-yellow-500/30',
                            blue: 'ring-sky-500/30',
                        };

                        return (
                            <div key={point.id} className={`bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 ring-1 h-full flex flex-col ${ringClasses[point.color]}`}>
                                <div className="flex items-center mb-4">
                                    {IconComponent && <IconComponent className={`h-9 w-9 mr-4 ${colorClasses[point.color]}`} />}
                                    <h4 className={`text-2xl font-bold ${colorClasses[point.color]}`}>{point.title}</h4>
                                </div>
                                <div className="text-gray-300 text-lg leading-relaxed flex-grow">
                                    <FormattedTextViewer text={point.text} keywords={t.keywords} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}


            {data.highlights && (
                <div className="pt-12">
                    {data.highlightsTitle && <h3 className="text-3xl font-bold text-center text-gray-200 mb-8">{data.highlightsTitle}</h3>}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {data.highlights.map((highlight: any) => {
                            const IconComponent = Icons[highlight.icon as IconName] as React.ElementType;
                            return (
                               <SummaryStatCard 
                                    key={highlight.id}
                                    icon={IconComponent ? <IconComponent className="h-8 w-8" /> : null}
                                    label={highlight.label}
                                    value={highlight.value}
                                    tooltip={highlight.tooltip}
                               />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};