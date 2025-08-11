



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
                className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 m-4 max-w-lg w-full ring-1 ring-white/10 animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start">
                    <h3 id="modal-title" className="text-2xl font-bold text-cyan-300 pr-4">{title}</h3>
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

type RankingItem = {
    name: string;
    value: string;
}

export const RankingCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    items: RankingItem[];
    tooltip?: string;
}> = ({ icon, title, items, tooltip }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                    <div className="bg-gray-900 p-3 rounded-full text-cyan-400 mr-4">
                        {icon}
                    </div>
                    <h4 className="text-2xl font-semibold text-cyan-300">{title}</h4>
                </div>
                <ol className="space-y-3 flex-grow">
                    {items.map((item, index) => (
                        <li key={index} className="text-gray-300 text-xl font-medium flex items-center justify-between">
                            <span>
                                <span className="font-bold text-white mr-3">{index + 1}.</span>{item.name}
                            </span>
                            <span className="text-base font-bold bg-teal-800/60 text-teal-200 px-3 py-1 rounded-full">{item.value}</span>
                        </li>
                    ))}
                </ol>
                {tooltip && (
                    <button
                        onClick={openModal}
                        className="mt-6 w-full bg-cyan-600/40 hover:bg-cyan-600/70 text-cyan-200 font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-400"
                        aria-label={`Saiba mais sobre ${title}`}
                    >
                        Saiba mais
                    </button>
                )}
            </div>
            {tooltip && (
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={closeModal}
                    title={title}
                >
                    {tooltip}
                </Modal>
            )}
        </>
    );
};