import React, { useState, useEffect } from 'react';
import { TabbedSection } from '../TabbedSection.tsx';
import * as Icons from '../icons/Icons.tsx';
import { XIcon, InformationCircleIcon } from '../icons/Icons.tsx';

// --- Modal Component ---
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
                className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 m-4 max-w-lg w-full ring-1 ring-white/10 animate-slide-up"
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

// --- Pricing Tab ---
const PricingTab: React.FC<{ data: any }> = ({ data }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={data.strategy.modal.title}>
                {data.strategy.modal.content}
            </Modal>
            <div className="bg-gray-800/60 rounded-xl p-8 ring-1 ring-white/10 flex flex-col justify-center text-center">
                <h4 className="text-2xl font-bold text-sky-300 mb-6">{data.title}</h4>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-lg font-semibold">
                    <div className="bg-gray-700 p-4 rounded-lg">{data.formula.molecule}</div>
                    <Icons.CheckCircleIcon className="h-8 w-8 text-sky-400 rotate-90 md:rotate-0" />
                    <div className="bg-gray-700 p-4 rounded-lg">{data.formula.attribute}</div>
                    <Icons.ArrowsRightLeftIcon className="h-8 w-8 text-sky-400 rotate-90 md:rotate-0" />
                    <div className="bg-sky-900/50 p-4 rounded-lg text-sky-200 ring-1 ring-sky-500/50">{data.formula.finalPrice}</div>
                </div>
                <p className="text-gray-400 mt-6 text-base">{data.description}</p>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-8 ring-1 ring-sky-500/30 flex flex-col">
                <div className="flex items-center mb-3">
                    <Icons.TrophyIcon className="h-8 w-8 text-sky-300" />
                    <h4 className="ml-3 text-2xl font-bold text-sky-300">{data.strategy.title}</h4>
                </div>
                <p className="text-gray-300 text-lg flex-grow">{data.strategy.description}</p>
                <button
                    onClick={() => setModalOpen(true)}
                    className="mt-6 w-full bg-sky-600/40 hover:bg-sky-600/70 text-sky-200 font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-400"
                >
                    {data.strategy.button}
                </button>
            </div>
        </div>
    );
};

// --- Tariffs Tab ---
const TariffCard: React.FC<{ title: string, description: string, icon: React.ReactNode, tooltip?: string }> = ({ title, description, icon, tooltip }) => (
    <div className="bg-gray-800/60 rounded-xl p-6 ring-1 ring-white/10 h-full relative group">
        <div className="flex items-center mb-3">
            {icon}
            <h4 className="ml-3 text-2xl font-bold text-yellow-300">{title}</h4>
        </div>
        <p className="text-gray-300 text-lg">{description}</p>
        {tooltip && (
            <div className="absolute top-4 right-4 text-gray-500 cursor-pointer">
                <InformationCircleIcon className="h-6 w-6" />
                <div className="absolute bottom-full mb-2 w-72 p-3 bg-gray-900 text-gray-200 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 left-1/2 z-10">
                    {tooltip}
                </div>
            </div>
        )}
    </div>
);

const TariffsTab: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <TariffCard title={data.injection.title} description={data.injection.description} icon={<Icons.LayersIcon className="h-8 w-8 text-yellow-300"/>} />
                <TariffCard title={data.positive_trend.title} description={data.positive_trend.description} icon={<Icons.ArrowTrendingUpIcon className="h-8 w-8 text-yellow-300"/>} tooltip={data.positive_trend.tooltip} />
                <TariffCard title={data.challenge.title} description={data.challenge.description} icon={<Icons.XCircleIcon className="h-8 w-8 text-yellow-300"/>} tooltip={data.challenge.tooltip} />
            </div>
        </div>
    );
};

// --- Distribution Tab ---
const DistributionChannelCard: React.FC<{ channel: any }> = ({ channel }) => {
    const IconComponent = Icons[channel.icon as keyof typeof Icons] as React.ElementType;
    return (
        <div className="bg-gray-800/60 rounded-xl p-6 ring-1 ring-white/10 h-full flex flex-col">
            <div className="flex items-center mb-4">
                <div className="p-3 bg-violet-900/50 rounded-full text-violet-300 mr-4">
                    <IconComponent className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-violet-300">{channel.title}</h4>
            </div>
            <p className="text-gray-300 text-lg mb-4 flex-grow">{channel.description}</p>
            <div className="space-y-3 mt-auto">
                <p className="flex items-start"><Icons.CheckCircleIcon className="h-6 w-6 text-green-400 mr-2 flex-shrink-0 mt-0.5" /> <span className="text-gray-300">{channel.pros}</span></p>
                <p className="flex items-start"><Icons.XCircleIcon className="h-6 w-6 text-red-400 mr-2 flex-shrink-0 mt-0.5" /> <span className="text-gray-300">{channel.cons}</span></p>
            </div>
        </div>
    );
};

const DistributionTab: React.FC<{ data: any }> = ({ data }) => (
    <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-gray-200 text-center">{data.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {data.channels.map((channel: any) => (
                <DistributionChannelCard key={channel.id} channel={channel} />
            ))}
        </div>
    </div>
);


export const SectionMercado: React.FC<{ data: any; }> = ({ data }) => {
    const tabs = [
        {
            title: data.tabs.pricing,
            content: <PricingTab data={data.pricing} />
        },
        {
            title: data.tabs.tariffs,
            content: <TariffsTab data={data.tariffs} />
        },
        {
            title: data.tabs.distribution,
            content: <DistributionTab data={data.distribution} />
        }
    ];

    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>
            <TabbedSection tabs={tabs} />
        </div>
    );
};