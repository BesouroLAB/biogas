
import React, { useState } from 'react';
import { UserIcon } from './icons/Icons.tsx';
import { FormattedTextViewer } from './FormattedTextViewer.tsx';

export const InfoTabs: React.FC<{ data: any }> = ({ data }) => {
    const [activeTab, setActiveTab] = useState('adminCouncil');

    if (!data) return null;

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const tabConfig = [
        { id: 'adminCouncil', label: data.tabs.adminCouncil },
        { id: 'execCouncil', label: data.tabs.execCouncil },
        { id: 'aboutUs', label: data.tabs.aboutUs },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'adminCouncil':
            case 'execCouncil':
                const councilData = data[activeTab];
                if (!councilData || !councilData.members) return null;

                const is2D = Array.isArray(councilData.members[0]);

                if (is2D) {
                    const isAdminCouncil = activeTab === 'adminCouncil';
                    const gridClasses = isAdminCouncil
                        ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6'
                        : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-4';

                    return (
                        <div className="w-full space-y-6 p-4">
                            {(councilData.members as string[][]).map((row, rowIndex) => (
                                <div key={rowIndex} className={`grid ${gridClasses} gap-x-6 gap-y-4 text-center`}>
                                    {row.map((name: string) => (
                                        <div key={name} className="flex flex-col items-center">
                                            <div className="p-3 bg-gray-700/80 rounded-full mb-2 ring-1 ring-white/10">
                                                 <UserIcon className="h-7 w-7 text-gray-400" />
                                            </div>
                                            <span className="font-medium text-sm text-gray-300">{name}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    );
                }

                // Fallback for 1D array
                return (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-4 text-center p-4">
                        {(councilData.members as string[]).map((name: string) => (
                            <div key={name} className="flex flex-col items-center">
                                <div className="p-3 bg-gray-700/80 rounded-full mb-2 ring-1 ring-white/10">
                                     <UserIcon className="h-7 w-7 text-gray-400" />
                                </div>
                                <span className="font-medium text-sm text-gray-300">{name}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'aboutUs':
                const aboutData = data.aboutUs;
                return (
                     <div className="max-w-4xl mx-auto text-left">
                        <FormattedTextViewer text={aboutData.text} keywords={[]} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-12">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 lg:p-8 ring-1 ring-white/10 shadow-lg">
                <div className="flex justify-center mb-6">
                    <div className="inline-flex flex-wrap justify-center rounded-lg bg-gray-900/50 p-1.5 gap-1">
                         {tabConfig.map(tab => (
                             <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className={`px-4 sm:px-6 py-2.5 text-base font-bold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                                    activeTab === tab.id
                                        ? 'bg-teal-500 text-white shadow'
                                        : 'text-gray-300 hover:bg-gray-700/60 hover:text-white'
                                }`}
                                aria-pressed={activeTab === tab.id}
                            >
                                {tab.label}
                            </button>
                         ))}
                    </div>
                </div>
                <div className="min-h-[150px] flex items-center justify-center">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};
