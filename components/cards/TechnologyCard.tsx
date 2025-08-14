import React, { useState, useEffect } from 'react';
import { XIcon } from '../icons/Icons.tsx';
import * as Icons from '../icons/Icons.tsx';

type IconName = keyof typeof Icons;

const Modal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
            role="dialog" aria-modal="true" aria-labelledby="modal-title"
        >
            <div
                className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 m-4 max-w-2xl w-full ring-1 ring-white/10 animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start">
                    <h3 id="modal-title" className="text-2xl font-bold text-teal-300 pr-4">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors flex-shrink-0 p-1 rounded-full -mt-2 -mr-2" aria-label="Fechar modal">
                        <XIcon className="h-7 w-7" />
                    </button>
                </div>
                <div className="mt-4 text-lg text-gray-300 leading-relaxed"><p>{children}</p></div>
            </div>
        </div>
    );
};

interface TechnologyCardProps {
    tech: {
        id: string;
        title: string;
        icon: IconName;
        summary: string;
        details: string;
    }
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const IconComponent = Icons[tech.icon] as React.ElementType;

    return (
        <>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 flex flex-col h-full transition-all duration-300 hover:ring-teal-500/50 hover:shadow-xl hover:shadow-teal-900/40 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                    {IconComponent && (
                        <div className="p-3 bg-teal-900/50 rounded-full text-teal-300 mr-4">
                            <IconComponent className="h-8 w-8" />
                        </div>
                    )}
                    <h4 className="text-xl font-bold text-teal-200">{tech.title}</h4>
                </div>
                <p className="text-gray-300 text-base leading-relaxed flex-grow mb-6">{tech.summary}</p>
                <button
                    onClick={() => setModalOpen(true)}
                    className="mt-auto w-full bg-teal-600/40 hover:bg-teal-600/70 text-teal-200 font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-400"
                >
                    Saiba Mais
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={tech.title}>
                {tech.details}
            </Modal>
        </>
    );
};