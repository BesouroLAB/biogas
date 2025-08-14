
import React, { useState, useEffect } from 'react';
import { XIcon } from '../icons/Icons.tsx';

const Modal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 m-4 max-w-2xl w-full ring-1 ring-white/10 animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start">
                    <h3 id="modal-title" className="text-2xl font-bold text-teal-300 pr-4">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors flex-shrink-0 p-1 rounded-full -mt-2 -mr-2"
                        aria-label="Fechar modal"
                    >
                        <XIcon className="h-7 w-7" />
                    </button>
                </div>
                <div className="mt-4 text-lg text-gray-300 leading-relaxed prose prose-invert max-w-none prose-p:my-0">
                    <p>{children}</p>
                </div>
            </div>
        </div>
    );
};


export const RoadmapNode: React.FC<{ 
    scenario: {
        title: string;
        description: string;
        kpiLabel: string;
        kpi: string;
        justification: string;
    }; 
    icon: React.ReactNode; 
    isCentral?: boolean;
    buttonLabel: string;
}> = ({ scenario, icon, isCentral = false, buttonLabel }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className={`relative w-full md:w-1/3 flex flex-col items-center text-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl ring-1 transition-all duration-300 ${isCentral ? 'ring-teal-500/50 scale-105 shadow-2xl shadow-teal-900/50 z-10' : 'ring-gray-700/80'}`}>
                <div className={`flex items-center justify-center rounded-full ring-8 mb-6 ${isCentral ? 'w-24 h-24 bg-teal-900 ring-teal-900/50' : 'w-20 h-20 bg-gray-700 ring-gray-700/50'}`}>
                    {icon}
                </div>
                <h4 className={`text-2xl font-bold ${isCentral ? 'text-teal-300' : 'text-gray-100'}`}>{scenario.title}</h4>
                <p className="mt-3 text-gray-400 text-base leading-relaxed flex-grow min-h-[120px]">{scenario.description}</p>
                <div className="mt-6 w-full pt-4 border-t border-white/10">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{scenario.kpiLabel}</p>
                    <p className={`mt-1 text-3xl font-bold ${isCentral ? 'text-white' : 'text-gray-300'}`}>{scenario.kpi}</p>
                </div>
                {scenario.justification && (
                    <button
                        onClick={() => setModalOpen(true)}
                        className={`mt-6 w-full font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${isCentral ? 'bg-teal-600/60 hover:bg-teal-600/80 text-teal-100 focus:ring-teal-400' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 focus:ring-gray-500'}`}
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
            {scenario.justification && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    title={`Justificativa: ${scenario.title}`}
                >
                    {scenario.justification}
                </Modal>
            )}
        </>
    );
};