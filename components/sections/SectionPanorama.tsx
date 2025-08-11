


import React from 'react';
import { FilterBar } from '../FilterBar.tsx';
import { SummaryStatCard } from '../cards/SummaryStatCard.tsx';
import { AnalysisPanel } from '../AnalysisPanel.tsx';
import { BuildingLibraryIcon, FactoryIcon, FireIcon, ChartBarIcon, GlobeAltIcon } from '../icons/Icons.tsx';
import { RankingCard } from '../cards/RankingCard.tsx';

export const SectionPanorama: React.FC<any> = ({ t, data, filters, handleFilterChange, panoramaData, renderExpandableText }) => {
    
    const selectedRegionData = panoramaData[filters.region];
    const keyMetrics = selectedRegionData.keyMetrics[filters.sourceType];
    const regionSourceData = selectedRegionData.sourceData;

    const filterConfigs = [
        {
            id: 'region',
            label: t.filters.region.label,
            options: Object.keys(t.filters.region.options).map(key => ({
                value: key,
                label: t.filters.region.options[key]
            }))
        },
        {
            id: 'sourceType',
            label: t.filters.sourceType.label,
            options: Object.keys(t.filters.sourceType.options).map(key => ({
                value: key,
                label: t.filters.sourceType.options[key]
            }))
        }
    ];

    const summaryIcons: { [key: string]: React.ReactNode } = {
        plants: <BuildingLibraryIcon className="h-8 w-8" />,
        capacity: <FactoryIcon className="h-8 w-8" />,
        biomethane: <FireIcon className="h-8 w-8" />,
    };
    
    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.summaryStats.map((stat: any) => (
                    <SummaryStatCard 
                        key={stat.label}
                        icon={summaryIcons[stat.id]}
                        label={stat.label}
                        value={stat.value}
                        growth={stat.growth}
                        tooltip={stat.tooltip}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <RankingCard 
                    icon={<ChartBarIcon className="h-8 w-8" />}
                    title={data.rankings.byPlants.title}
                    items={data.rankings.byPlants.items}
                    tooltip={data.rankings.byPlants.tooltip}
                />
                <RankingCard 
                    icon={<GlobeAltIcon className="h-8 w-8" />}
                    title={data.rankings.byCapacity.title}
                    items={data.rankings.byCapacity.items}
                    tooltip={data.rankings.byCapacity.tooltip}
                />
            </div>
            
            <FilterBar filters={filters} onFilterChange={handleFilterChange} filterConfigs={filterConfigs} title={t.filters.title} />

            <AnalysisPanel 
                t={t}
                data={data}
                filters={filters}
                renderExpandableText={renderExpandableText}
                keyMetrics={keyMetrics}
                regionSourceData={regionSourceData}
            />

        </div>
    );
}
