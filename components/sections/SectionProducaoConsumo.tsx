import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import * as Icons from '../icons/Icons.tsx';

type IconName = keyof typeof Icons;

const StatCard: React.FC<{ stat: any }> = ({ stat }) => (
    <div className="bg-gray-800/60 rounded-lg p-6 text-center ring-1 ring-white/10">
        <p className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</p>
        <p className="text-base text-gray-400 mt-2">{stat.label}</p>
    </div>
);

const ConsumerCard: React.FC<{ sector: any }> = ({ sector }) => {
    const IconComponent = Icons[sector.icon as IconName] as React.ElementType;
    return (
        <div className="bg-gray-800/60 p-8 rounded-lg ring-1 ring-white/10 flex flex-col h-full transition-all duration-300 hover:ring-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/40 hover:-translate-y-1">
            <div className="flex items-center mb-4">
                <div className="p-3 bg-cyan-900/50 rounded-full mr-4">
                    {IconComponent && <IconComponent className="h-8 w-8 text-cyan-300" />}
                </div>
                <h4 className="text-2xl font-bold text-cyan-200">{sector.title}</h4>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed flex-grow">{sector.text}</p>
        </div>
    );
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg">
                <p className="font-bold text-lg text-teal-300">{`Ano: ${label}`}</p>
                <p className="text-base text-white">{`Produção: ${payload[0].value.toLocaleString('pt-BR')} mi m³`}</p>
            </div>
        );
    }
    return null;
};

export const SectionProducaoConsumo: React.FC<any> = ({ data }) => {
    if (!data || !data.growth) return null;
    const { growth, consumers, exports } = data;
    const ExportIcon = Icons[exports.icon as IconName] as React.ElementType;

    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>

            {/* Growth Section */}
            <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{growth.title}</h3>
                <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{growth.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {growth.stats.map((stat: any, index: number) => (
                            <StatCard key={index} stat={stat} />
                        ))}
                    </div>
                    <div className="w-full h-80 bg-gray-800/60 p-4 rounded-lg ring-1 ring-white/10">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={growth.chartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                                <XAxis dataKey="year" stroke="#9ca3af" tick={{ fontSize: 14 }} />
                                <YAxis stroke="#9ca3af" tick={{ fontSize: 14 }} label={{ value: 'mi m³', angle: -90, position: 'insideLeft', fill: '#9ca3af', dx: -5 }} />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(20, 184, 166, 0.1)' }} />
                                <Bar dataKey="value" name="Produção de Biometano" fill="#0d9488" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Consumers Section */}
            <div className="space-y-6 pt-8">
                 <h3 className="text-3xl font-semibold text-gray-200 text-center">{consumers.title}</h3>
                 <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{consumers.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 items-stretch">
                    {consumers.sectors.map((sector: any) => (
                        <ConsumerCard key={sector.id} sector={sector} />
                    ))}
                </div>
            </div>
            
            {/* Exports Section */}
             <div className="pt-8">
                <div className="bg-gray-800/60 rounded-xl p-8 ring-1 ring-white/10 flex items-center gap-8">
                    {ExportIcon && (
                        <div className="p-4 bg-gray-900 rounded-full text-gray-300">
                             <ExportIcon className="h-10 w-10" />
                        </div>
                    )}
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-200 mb-2">{exports.title}</h3>
                        <p className="text-lg text-gray-400 leading-relaxed">{exports.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
