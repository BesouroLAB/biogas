

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
                <FormattedTextViewer text={data.fullText} keywords={t.keywords} />
            </div>

            {data.highlights && (
                <div className="pt-6">
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