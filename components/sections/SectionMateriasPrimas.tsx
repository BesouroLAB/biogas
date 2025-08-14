import React, { useState, useEffect } from 'react';
import * as Icons from '../icons/Icons.tsx';
import { XIcon } from '../icons/Icons.tsx';

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
                <div className="mt-4 text-lg text-gray-300 leading-relaxed"><p>{children}</p></div>
            </div>
        </div>
    );
};

const PotentialSourceCard: React.FC<{ source: any; buttonLabel: string }> = ({ source, buttonLabel }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const IconComponent = Icons[source.icon as IconName] as React.ElementType;
    const colorClasses = {
        green: { text: 'text-green-300', ring: 'hover:ring-green-500/50', iconBg: 'bg-green-900/50', button: 'bg-green-600/40 hover:bg-green-600/70 text-green-200 focus:ring-green-400' },
        yellow: { text: 'text-yellow-300', ring: 'hover:ring-yellow-500/50', iconBg: 'bg-yellow-900/50', button: 'bg-yellow-600/40 hover:bg-yellow-600/70 text-yellow-200 focus:ring-yellow-400' },
        blue: { text: 'text-sky-300', ring: 'hover:ring-sky-500/50', iconBg: 'bg-sky-900/50', button: 'bg-sky-600/40 hover:bg-sky-600/70 text-sky-200 focus:ring-sky-400' },
        cyan: { text: 'text-cyan-300', ring: 'hover:ring-cyan-500/50', iconBg: 'bg-cyan-900/50', button: 'bg-cyan-600/40 hover:bg-cyan-600/70 text-cyan-200 focus:ring-cyan-400' },
    };
    const selectedColor = colorClasses[source.color] || colorClasses.green;

    return (
        <>
            <div className={`bg-gray-800/60 p-6 rounded-lg ring-1 ring-white/10 flex flex-col transition-all duration-300 ${selectedColor.ring} hover:-translate-y-1 h-full`}>
                <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full mr-4 ${selectedColor.iconBg}`}>
                        {IconComponent && <IconComponent className={`h-8 w-8 ${selectedColor.text}`} />}
                    </div>
                    <h4 className={`text-2xl font-bold ${selectedColor.text}`}>{source.title}</h4>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed flex-grow">{source.description}</p>
                {source.details && (
                    <button
                        onClick={() => setModalOpen(true)}
                        className={`mt-6 w-full font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${selectedColor.button}`}
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
            {source.details && (
                 <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    title={source.title}
                >
                    {source.details}
                </Modal>
            )}
        </>
    );
};

const LogisticsCard: React.FC<{ card: any }> = ({ card }) => {
    const IconComponent = Icons[card.icon as IconName] as React.ElementType;
    return (
        <div className="bg-gray-800/60 p-8 rounded-lg ring-1 ring-white/10 flex items-start gap-6">
            {IconComponent && (
                <div className="p-4 bg-gray-900 rounded-full text-gray-300 mt-1">
                    <IconComponent className="h-9 w-9" />
                </div>
            )}
            <div>
                <h4 className="text-2xl font-bold text-gray-100 mb-2">{card.title}</h4>
                <p className="text-lg text-gray-400 leading-relaxed">{card.text}</p>
            </div>
        </div>
    );
}

export const SectionMateriasPrimas: React.FC<any> = ({ data }) => {
    if (!data || !data.potential) return null;

    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>

            {/* Potential Section */}
            <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.potential.title}</h3>
                <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{data.potential.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-stretch">
                    {data.potential.sources.map((source: any) => (
                        <PotentialSourceCard key={source.id} source={source} buttonLabel={data.potential.modalButtonLabel} />
                    ))}
                </div>
            </div>

            {/* Logistics Section */}
            <div className="space-y-6 pt-8">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.logistics.title}</h3>
                <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{data.logistics.intro}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 max-w-6xl mx-auto">
                     {data.logistics.cards.map((card: any) => (
                        <LogisticsCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};