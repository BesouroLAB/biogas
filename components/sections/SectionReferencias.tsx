

import React from 'react';
import { ChainIcon, DocumentArrowDownIcon } from '../icons/Icons.tsx';

export const SectionReferencias: React.FC<{ t: any, data: any }> = ({ t, data }) => (
    <div className="space-y-10">
        <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{t.navLinkLabels.referencias}</h2>
        
        <div className="bg-gray-800/60 rounded-xl p-8 ring-1 ring-white/10 text-center">
            <p className="prose prose-lg prose-invert max-w-none text-gray-300 mb-6">
                {data.intro}
            </p>
            {data.documentLink && (
                <a
                    href={data.documentLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white text-lg font-bold rounded-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/40 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                >
                    <DocumentArrowDownIcon className="h-6 w-6 mr-3" />
                    {data.documentLink.text}
                </a>
            )}
        </div>

        {data.list && data.list.length > 0 && (
            <div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">Principais Fontes Citadas:</h3>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg ring-1 ring-white/10">
                    <ul className="divide-y divide-gray-700">
                        {data.list.map((ref: any, index: number) => (
                            <li key={index} className="px-6 py-4 flex items-start space-x-4">
                                <span className="flex-shrink-0 text-teal-400 mt-1.5">
                                    <ChainIcon className="h-5 w-5" />
                                </span>
                                <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-teal-300 transition-colors duration-200 text-lg leading-relaxed hover:underline"
                                >
                                    {ref.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
);