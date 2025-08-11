
import React from 'react';
import { FormattedTextViewer } from '../FormattedTextViewer.tsx';
import { Table } from '../Table.tsx';
import { UserGroupIcon, CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '../icons/Icons.tsx';

const renderScorecardCell = (value: string) => {
    switch(value) {
        case "Sim":
        case "Sim (Mencionado)":
            return <div className="flex justify-center"><CheckCircleIcon className="h-7 w-7 text-green-400" /></div>;
        case "Não":
            return <div className="flex justify-center"><XCircleIcon className="h-7 w-7 text-red-400" /></div>;
        case "Não Específico":
             return <div className="flex justify-center"><XCircleIcon className="h-7 w-7 text-gray-500" /></div>;
        case "Parcial (Metas em elaboração)":
            return <div className="flex justify-center" title={value}><InformationCircleIcon className="h-7 w-7 text-yellow-400" /></div>;
        case "Apenas Gênero":
            return <div className="flex justify-center" title={value}><InformationCircleIcon className="h-7 w-7 text-blue-400" /></div>;
        default:
            return value;
    }
}

export const SectionEquidadeRacial: React.FC<any> = ({ data, t }) => {
    if (!data || !data.title || !data.intro) {
        return null;
    }

    const { barriers } = data;
    const tableRows = barriers?.table?.rows.map((row: any) => [
        row.company,
        renderScorecardCell(row.sustainabilityReport),
        renderScorecardCell(row.workforceData),
        renderScorecardCell(row.leadershipData),
        renderScorecardCell(row.publicGoals),
        renderScorecardCell(row.affirmativeProgram),
        renderScorecardCell(row.inclusivePurchasing),
    ]) || [];


    return (
        <div className="bg-gray-800/60 rounded-2xl p-8 lg:p-12 ring-1 ring-purple-500/30 shadow-2xl shadow-purple-900/50 my-8">
            <h2 className="text-4xl font-bold text-purple-300 mb-6 flex items-center justify-center gap-4 text-center">
                <UserGroupIcon className="h-10 w-10 flex-shrink-0"/> 
                <span>{data.title}</span>
            </h2>
            <div className="text-left max-w-4xl mx-auto space-y-8">
                <FormattedTextViewer text={data.intro} keywords={t.keywords} />

                {barriers && (
                    <div className="pt-6">
                        <h3 className="text-3xl font-bold text-purple-200 mb-4">{barriers.title}</h3>
                        <FormattedTextViewer text={barriers.text} keywords={t.keywords} />
                        
                        {barriers.table && (
                            <Table 
                                title={barriers.table.title}
                                headers={barriers.table.headers}
                                rows={tableRows}
                            />
                        )}
                    </div>
                )}
            </div>

            {data.buttonText && (
                <div className="text-center mt-10">
                    <button
                        disabled
                        className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-gray-400 text-xl font-bold rounded-lg cursor-not-allowed"
                        aria-label={data.buttonText}
                    >
                        {data.buttonText}
                    </button>
                </div>
            )}
        </div>
    );
};