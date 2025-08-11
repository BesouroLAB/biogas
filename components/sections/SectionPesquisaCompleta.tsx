

import React from 'react';
import { DocumentArrowDownIcon } from '../icons/Icons.tsx';

export const SectionPesquisaCompleta: React.FC<{ data: any }> = ({ data }) => (
    <div className="bg-gray-800/60 rounded-2xl p-8 lg:p-12 text-center ring-1 ring-teal-500/30 shadow-2xl shadow-teal-900/50 my-8">
        <h2 className="text-4xl font-bold text-teal-300 mb-4">{data.title}</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {data.description}
        </p>
        <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white text-xl font-bold rounded-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/40 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
        >
            <DocumentArrowDownIcon className="h-7 w-7 mr-3" />
            {data.buttonText}
        </a>
    </div>
);