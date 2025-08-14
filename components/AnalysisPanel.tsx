import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { TabbedSection } from './TabbedSection.tsx';
import { ChartCard } from './ChartCard.tsx';
import { MetricCard } from './cards/MetricCard.tsx';
import { LeafIcon, CogIcon, FactoryIcon, BuildingLibraryIcon, PlanetIcon } from './icons/Icons.tsx';
import { AppFilters } from '../App.tsx';

const COLORS = ['#0d9488', '#0284c7', '#0891b2', '#7c3aed', '#c026d3'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  
  // Don't render labels for very small slices to avoid clutter
  if (percent < 0.04) {
    return null;
  }
  
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="18px"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface AnalysisPanelProps {
    t: any;
    data: any;
    filters: AppFilters;
    renderExpandableText: Function;
    keyMetrics: any;
    regionSourceData: any[];
}

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ t, data, filters, renderExpandableText, keyMetrics, regionSourceData }) => {
    
    const getChartTitle = (baseTitle: string, regionFilter: string, sourceFilter: string) => {
        let title = baseTitle;
        const regionLabel = t.filters.region.options[regionFilter];
        const sourceLabel = t.filters.sourceType.options[sourceFilter];

        const additions = [];
        if (regionFilter !== 'brasil') additions.push(regionLabel);
        if (sourceFilter !== 'all') additions.push(sourceLabel);

        if (additions.length > 0) {
            title += ` - ${additions.join(' / ')}`;
        }
        return title;
    };

    const overviewTab = {
        title: data.analysisTabs.overview,
        content: (
            <ChartCard title={getChartTitle(data.chartTitles.distribution, filters.region, 'all')}>
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="w-full h-[350px]">
                        <h4 className="text-xl font-semibold text-center text-gray-300 mb-4">{data.chartTitles.biogasSources}</h4>
                        <ResponsiveContainer width="100%" height={300} key={`${filters.region}-${filters.sourceType}`}>
                            <PieChart>
                                <Pie data={regionSourceData} dataKey="porcentagem" nameKey="fonte" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" labelLine={false} label={renderCustomizedLabel}>
                                    {regionSourceData.map((entry: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.5rem', fontSize: '16px' }}
                                    itemStyle={{ color: '#e5e7eb' }}
                                    labelStyle={{ color: '#cbd5e1', fontWeight: 'bold' }}
                                />
                                <Legend wrapperStyle={{fontSize: "16px", paddingTop: "20px"}}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="w-full space-y-6">
                        <h4 className="text-xl font-semibold text-center text-gray-300">{data.distributionAnalysis.title}</h4>
                        {data.distributionAnalysis.sections.map((section: any, sIndex: number) => (
                            <div key={sIndex}>
                                <h5 className="font-bold text-lg text-teal-300 mb-3 text-center lg:text-left">{section.title}</h5>
                                <div className="space-y-3">
                                    {section.cards.map((card: any, cIndex: number) => (
                                        <div key={cIndex} className="bg-gray-900/50 p-4 rounded-lg ring-1 ring-white/10">
                                            <p className="font-semibold text-gray-200">{card.title}</p>
                                            <p className="text-gray-400 text-base">{card.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ChartCard>
        )
    };

    const metricsTab = {
        title: data.analysisTabs.metrics,
        content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 items-stretch">
                <MetricCard title={data.metrics.potentialSucro} value={keyMetrics.potentialSucro} icon={<LeafIcon className="h-7 w-7" />} tooltip={data.metricTooltips.potentialSucro} />
                <MetricCard title={data.metrics.capacityPurification} value={keyMetrics.capacityPurification} icon={<CogIcon className="h-7 w-7" />} tooltip={data.metricTooltips.capacityPurification} />
                <MetricCard title={data.metrics.capacityLandfill} value={keyMetrics.capacityLandfill} icon={<FactoryIcon className="h-7 w-7" />} tooltip={data.metricTooltips.capacityLandfill} />
                <MetricCard title={data.metrics.purificationPlants} value={keyMetrics.purificationPlants.toString()} icon={<BuildingLibraryIcon className="h-7 w-7" />} tooltip={data.metricTooltips.purificationPlants} />
                <MetricCard title={data.metrics.technicalPotential} value={keyMetrics.technicalPotential} icon={<PlanetIcon className="h-7 w-7" />} tooltip={data.metricTooltips.technicalPotential} />
            </div>
        )
    };
    
    return <TabbedSection tabs={[overviewTab, metricsTab]} />;
};