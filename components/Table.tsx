import React from 'react';

interface TableProps {
    title?: string;
    headers: string[];
    rows: (string | React.ReactNode)[][];
}

export const Table: React.FC<TableProps> = ({ title, headers, rows }) => {
    return (
        <div className="my-8">
            {title && <h5 className="text-xl font-semibold text-gray-200 mb-4">{title}</h5>}
            <div className="overflow-x-auto rounded-lg ring-1 ring-gray-700">
                <table className="min-w-full w-full text-lg text-left text-gray-400">
                    <thead className="text-base text-gray-300 uppercase bg-gray-700/50">
                        <tr>
                            {headers.map((header) => (
                                <th key={header} scope="col" className="px-6 py-4 font-semibold">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="bg-gray-800 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50">
                                {row.map((cell, cellIndex) => (
                                    cellIndex === 0 ? (
                                        <th key={cellIndex} scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">{cell}</th>
                                    ) : (
                                        <td key={cellIndex} className="px-6 py-4">{cell}</td>
                                    )
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};