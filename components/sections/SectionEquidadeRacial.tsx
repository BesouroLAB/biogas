import React from 'react';
import { UserGroupIcon, CheckCircleIcon, XCircleIcon, InformationCircleIcon, UserIcon } from '../icons/Icons.tsx';
import { TabbedSection } from '../TabbedSection.tsx';
import { Table } from '../Table.tsx';
import { FormattedTextViewer } from '../FormattedTextViewer.tsx';

const KeyPointCard: React.FC<{ title: string; text: string; }> = ({ title, text }) => (
    <div className="bg-gray-800/60 p-6 rounded-lg ring-1 ring-white/10">
        <h4 className="text-xl font-bold text-yellow-300 mb-2">{title}</h4>
        <p className="text-gray-300 text-base">{text}</p>
    </div>
);

const MonitoringSuggestionCard: React.FC<{ title: string; text: string; }> = ({ title, text }) => (
    <div className="bg-gray-800/60 p-6 rounded-lg ring-1 ring-white/10">
        <h4 className="text-xl font-bold text-cyan-300 mb-2">{title}</h4>
        <p className="text-gray-300 text-base">{text}</p>
    </div>
);

const ScorecardTable: React.FC<{ data: any }> = ({ data }) => {
    const renderCellContent = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? <CheckCircleIcon className="h-7 w-7 text-green-400 mx-auto" /> : <XCircleIcon className="h-7 w-7 text-red-400 mx-auto" />;
        }
        const text = data.legend[value] || value;
        const color = value === 'partial' ? 'text-yellow-400' : 'text-gray-300';
        return <span className={color}>{text}</span>;
    };

    const rows = data.rows.map((row: any) => [
        row.name,
        renderCellContent(row.sustainabilityReport),
        renderCellContent(row.workforceData),
        renderCellContent(row.leadershipData),
        renderCellContent(row.publicGoals),
        renderCellContent(row.affirmativeProgram),
        renderCellContent(row.inclusivePurchasing),
    ]);

    return <Table headers={data.headers} rows={rows} />;
};

export const SectionEquidadeRacial: React.FC<any> = ({ data, t }) => {
    if (!data || !data.title) {
        return (
            <div className="flex items-center justify-center min-h-[40vh] bg-gray-800/50 rounded-lg p-8 ring-1 ring-white/10">
                <p className="text-3xl font-bold text-gray-500">Em Breve</p>
            </div>
        );
    }

    const tabs = [
        {
            title: data.tabs.methodology,
            content: (
                <div className="bg-gray-800/60 p-8 rounded-lg ring-1 ring-white/10">
                    <h3 className="text-3xl font-semibold text-gray-200 mb-4">{data.methodology.title}</h3>
                    <FormattedTextViewer text={data.methodology.content} keywords={t.keywords} />
                </div>
            )
        },
        {
            title: data.tabs.leadership,
            content: (
                <div className="bg-gray-800/60 p-8 rounded-lg ring-1 ring-white/10 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-200 mb-4">{data.leadership.title}</h3>
                    <FormattedTextViewer text={data.leadership.content} keywords={t.keywords} />
                    <Table title={data.leadership.table.title} headers={data.leadership.table.headers} rows={data.leadership.table.rows} />
                </div>
            )
        },
        {
            title: data.tabs.scorecard,
            content: (
                 <div className="bg-gray-800/60 p-8 rounded-lg ring-1 ring-white/10">
                     <h3 className="text-3xl font-semibold text-gray-200 mb-4">{data.scorecard.title}</h3>
                     <ScorecardTable data={data.scorecard} />
                 </div>
            )
        },
        {
            title: data.tabs.ecosystem,
            content: (
                <div className="bg-gray-800/60 p-8 rounded-lg ring-1 ring-white/10">
                    <h3 className="text-3xl font-semibold text-gray-200 mb-4">{data.ecosystem.title}</h3>
                    <FormattedTextViewer text={data.ecosystem.content} keywords={t.keywords} />
                </div>
            )
        }
    ];

    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4 flex items-center gap-4">
                <UserGroupIcon className="h-9 w-9" />
                <span>{data.title}</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>

            <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.keyPoints.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.keyPoints.points.map((point: any) => (
                        <KeyPointCard key={point.id} title={point.title} text={point.text} />
                    ))}
                </div>
            </div>

            <div className="space-y-6 pt-8">
                 <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.monitoringSuggestions.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.monitoringSuggestions.suggestions.map((suggestion: any) => (
                        <MonitoringSuggestionCard key={suggestion.id} title={suggestion.title} text={suggestion.text} />
                    ))}
                </div>
            </div>

            <div className="pt-8">
                <TabbedSection tabs={tabs} />
            </div>
            
            {data.destaques && (
                 <div className="pt-8">
                    <h3 className="text-3xl font-semibold text-gray-200 text-center mb-6">{data.destaques.title}</h3>
                    <div className="max-w-md mx-auto bg-gray-800/60 rounded-xl p-6 ring-1 ring-white/10 flex flex-col items-center text-center">
                        <div className="p-4 bg-gray-700/80 rounded-full mb-3 ring-1 ring-white/10">
                            <UserIcon className="h-10 w-10 text-gray-300" />
                        </div>
                        <h4 className="text-2xl font-bold text-yellow-300">{data.destaques.people[0].name}</h4>
                        <p className="text-lg text-gray-400">{data.destaques.people[0].role}</p>
                    </div>
                </div>
            )}
        </div>
    );
};