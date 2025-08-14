
import React from 'react';
import { CheckCircleIcon, UserIcon, InformationCircleIcon } from '../icons/Icons.tsx';

interface CaseStudyCardProps {
    study: {
        type: 'confirmado' | 'arquétipo';
        title: string;
        protagonist: string;
        description: string;
        relevance: string;
    };
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
    const isConfirmed = study.type === 'confirmado';

    const cardBaseClasses = "bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 ring-1 h-full flex flex-col transition-all duration-300";
    const confirmedClasses = "ring-green-500/50 shadow-2xl shadow-green-900/50";
    const archetypeClasses = "ring-white/10 hover:ring-purple-400/50 hover:shadow-xl hover:shadow-purple-900/40 hover:-translate-y-1";

    const headerIcon = isConfirmed 
        ? <CheckCircleIcon className="h-8 w-8 text-green-400" />
        : <UserIcon className="h-8 w-8 text-purple-300" />;

    const headerTextColor = isConfirmed ? 'text-green-300' : 'text-purple-200';

    return (
        <div className={`${cardBaseClasses} ${isConfirmed ? confirmedClasses : archetypeClasses}`}>
            <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">{headerIcon}</div>
                <div>
                    <h4 className={`text-2xl font-bold ${headerTextColor}`}>{study.title}</h4>
                    <p className="text-base text-gray-400 font-medium">{study.protagonist}</p>
                </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4 flex-grow">{study.description}</p>
            
            <div className="mt-auto pt-4 border-t border-white/20">
                 <div className="flex items-start gap-3">
                    <InformationCircleIcon className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-base text-gray-400"><span className="font-semibold text-gray-300">Relevância:</span> {study.relevance}</p>
                 </div>
            </div>
        </div>
    );
};
