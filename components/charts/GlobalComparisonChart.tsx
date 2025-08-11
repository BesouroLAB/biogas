

import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { BrazilFlagIcon, GermanyFlagIcon, ChinaFlagIcon, DenmarkFlagIcon, UsaFlagIcon, ChartBarIcon, TableCellsIcon } from '../icons/Icons.tsx';

type ViewMode = 'chart' | 'table';

const flagMapping: Record<string, React.FC<{ className?: string }>> = {
    'Brasil': BrazilFlagIcon,
    'Alemanha (UE)': GermanyFlagIcon,
    'Dinamarca (UE)': DenmarkFlagIcon,
    'EUA': UsaFlagIcon,
    'China': ChinaFlagIcon
};

const colorMapping: Record<string, string> = {
    'Brasil': '#009c3b',
    'Alemanha (UE)': '#ffce00',
    'Dinamarca (UE)': '#c60c30',
    'EUA': '#3c3b6e',
    'China': '#de2910'
};

const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const FlagIcon = flagMapping[payload.value];

    return (
        <g transform={`translate(${x},${y})`}>
            <foreignObject x={-150} y={-12} width={140} height={24}>
                 <div className="flex items-center justify-end w-full" style={{gap: '12px'}}>
                    <span className="text-gray-200 text-lg font-medium">{payload.value}</span>
                    {FlagIcon && <FlagIcon className="h-6 w-8 rounded-sm object-cover flex-shrink-0" />}
                </div>
            </foreignObject>
        </g>
    );
};

const renderTable = (tableData: any) => {
    if (!tableData || !tableData.rows || tableData.rows.length === 0) return null;
    
    const headers = tableData.headers;
    const columnOrder = Object.keys(tableData.rows[0]);

    return (
        <div className="mt-8 overflow-x-auto rounded-lg ring-1 ring-gray-700">
            <table className="w-full text-lg text-left text-gray-400">
                <thead className="text-base text-gray-300 uppercase bg-gray-700/50">
                    <tr>
                        {headers.map((header: string) => (
                            <th key={header} scope="col" className="px-6 py-4 font-semibold">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.rows.map((row: any, rowIndex: number) => (
                        <tr key={rowIndex} className={`bg-gray-800 ${rowIndex === tableData.rows.length - 1 ? '' : 'border-b border-gray-700'}`}>
                            {columnOrder.map((key: string, colIndex: number) => {
                                const cellData = row[key];
                                const displayValue = (cellData && typeof cellData === 'object' && 'display' in cellData) ? cellData.display : (cellData ?? '-');
                                
                                return colIndex === 0 ? (
                                    <th key={colIndex} scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">{displayValue}</th>
                                ) : (
                                    <td key={colIndex} className="px-6 py-4">{displayValue}</td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export const GlobalComparisonChart: React.FC<{ tableData: any, title: string, labels: any }> = ({ tableData, title, labels }) => {
    const [viewMode, setViewMode] = useState<ViewMode>('chart');
    
    const numericMetrics = tableData.headers.filter((h: string) => 
        h !== 'Indicador' && h !== 'Principal Substrato Utilizado' && h !== 'Principal Política de Fomento'
    );
    const [selectedMetric, setSelectedMetric] = useState(numericMetrics[0]);

    const chartData = tableData.rows.map((row: any) => ({
        country: row['Indicador'].display,
        value: row[selectedMetric]?.value,
    })).filter((d: any) => d.value !== null && d.value !== undefined);

    return (
        <div className="my-10 bg-gray-800/50 rounded-lg p-6 ring-1 ring-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h4 className="text-2xl font-semibold text-gray-200">{title}</h4>
                <div className="flex flex-wrap items-center gap-4">
                    {viewMode === 'chart' && (
                        <div className="flex items-center gap-3">
                            <label htmlFor="metric-select" className="text-lg font-medium text-gray-300 whitespace-nowrap">{labels.selectMetric}:</label>
                            <select
                                id="metric-select"
                                value={selectedMetric}
                                onChange={(e) => setSelectedMetric(e.target.value)}
                                className="bg-gray-700 border border-gray-600 text-white text-base font-semibold rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full sm:w-auto p-2.5"
                            >
                                {numericMetrics.map((metric: string) => (
                                    <option key={metric} value={metric}>{metric}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="flex items-center gap-2 p-1 bg-gray-900/50 rounded-lg">
                        <button onClick={() => setViewMode('chart')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-base font-bold transition-colors ${viewMode === 'chart' ? 'bg-teal-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
                            <ChartBarIcon className="h-5 w-5" />
                            {labels.viewChart}
                        </button>
                         <button onClick={() => setViewMode('table')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-base font-bold transition-colors ${viewMode === 'table' ? 'bg-teal-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
                            <TableCellsIcon className="h-5 w-5" />
                            {labels.viewTable}
                        </button>
                    </div>
                </div>
            </div>

            {viewMode === 'chart' && (
                <>
                {chartData.length > 0 ? (
                    <div style={{ width: '100%', height: 350 }}>
                        <ResponsiveContainer>
                            <BarChart
                                data={chartData}
                                layout="vertical"
                                margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                            >
                                <XAxis type="number" stroke="#9ca3af" tick={{ fontSize: 14 }} />
                                <YAxis type="category" dataKey="country" stroke="#9ca3af" tickLine={false} axisLine={false} tick={<CustomYAxisTick />} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(31, 41, 55, 0.5)' }}
                                    contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '0.5rem', fontSize: '16px' }}
                                    itemStyle={{ color: '#e5e7eb' }}
                                    labelStyle={{ color: '#cbd5e1', fontWeight: 'bold' }}
                                />
                                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                    {chartData.map((entry: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={colorMapping[entry.country] || '#0d9488'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div className="h-[350px] flex items-center justify-center text-gray-500 text-xl">
                        {labels.noData}
                    </div>
                )}
                </>
            )}

            {viewMode === 'table' && renderTable(tableData)}
        </div>
    );
};