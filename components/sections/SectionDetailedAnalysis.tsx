

import React from 'react';
import { TabbedSection } from '../TabbedSection.tsx';
import { GlobalComparisonChart } from '../charts/GlobalComparisonChart.tsx';

export const SectionDetailedAnalysis: React.FC<{ data: any; renderExpandableText: Function; sectionId: string; }> = ({ data, renderExpandableText, sectionId }) => {
    
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

    const tabs = data.subsections.map((subsection: any, index: number) => {
        
        let tableContent = null;
        if (sectionId === 'comparativo-global' && subsection.table) {
            tableContent = (
                 <GlobalComparisonChart 
                    tableData={subsection.table} 
                    title={subsection.chartTitle}
                    labels={subsection.chartLabels}
                />
            );
        } else if (subsection.table) {
            tableContent = renderTable(subsection.table);
        }

        return {
            title: subsection.title,
            content: (
                <div key={index} className="space-y-4">
                    {renderExpandableText(`${sectionId}-${index}`, subsection.description, 400)}
                    {tableContent}
                </div>
            )
        };
    });

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