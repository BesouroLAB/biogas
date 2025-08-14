import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import * as Icons from '../icons/Icons.tsx';
import { XIcon, InformationCircleIcon } from '../icons/Icons.tsx';


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


// Custom Tooltip for Bar Chart
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg">
                <p className="font-bold text-lg text-teal-300">{`Ano: ${label}`}</p>
                <p className="text-base text-white">{`Mercado: US$ ${payload[0].value.toLocaleString('pt-BR')} Milhões`}</p>
            </div>
        );
    }
    return null;
};

const BusinessModelCard = ({ model }: { model: any }) => {
    const IconComponent = Icons[model.icon as IconName] as React.ElementType;
    return (
        <div className="bg-gray-800 p-6 rounded-lg ring-1 ring-white/10 flex flex-col transition-all duration-300 hover:ring-violet-500/50 hover:shadow-xl hover:shadow-violet-900/40 hover:-translate-y-1">
            <div className="flex items-center mb-4">
                {IconComponent && <IconComponent className="h-8 w-8 text-violet-300" />}
                <h5 className="ml-4 text-xl font-semibold text-violet-200">{model.title}</h5>
            </div>
            <p className="text-gray-400 text-base leading-relaxed flex-grow">{model.description}</p>
        </div>
    );
};

const RevenueStreamCard: React.FC<{ stream: any; buttonLabel: string }> = ({ stream, buttonLabel }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const IconComponent = Icons[stream.icon as IconName] as React.ElementType;

    return (
        <>
            <div className="bg-gray-900/60 p-4 rounded-lg ring-1 ring-yellow-500/20 flex flex-col transition-all duration-300 hover:bg-gray-900 hover:ring-yellow-500/50">
                <div>
                    <div className="flex items-start gap-4 w-full">
                        {IconComponent && <div className="p-2 bg-yellow-900/40 rounded-full mt-1">{<IconComponent className="h-7 w-7 text-yellow-300 flex-shrink-0" />}</div>}
                        <div>
                            <h6 className="font-bold text-lg text-yellow-200">{stream.title}</h6>
                            <p className="text-gray-400 text-base leading-relaxed">{stream.description}</p>
                        </div>
                    </div>
                </div>
                {stream.details && (
                    <button
                        onClick={() => setModalOpen(true)}
                        className="mt-4 w-full bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-200 text-sm font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 flex-shrink-0"
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
            {stream.details && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    title={stream.title}
                >
                    {stream.details}
                </Modal>
            )}
        </>
    );
};


const TechnologyHighlightCard: React.FC<{ item: any; buttonLabel: string; colorClass: 'sky' | 'teal' }> = ({ item, buttonLabel, colorClass }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const IconComponent = Icons[item.icon as IconName] as React.ElementType;

    const colorStyles = {
        sky: { text: 'text-sky-300', iconBg: 'bg-sky-900/50', button: 'bg-sky-600/40 hover:bg-sky-600/70 text-sky-200 focus:ring-sky-400', ring: 'hover:ring-sky-500/50' },
        teal: { text: 'text-teal-300', iconBg: 'bg-teal-900/50', button: 'bg-teal-600/40 hover:bg-teal-600/70 text-teal-200 focus:ring-teal-400', ring: 'hover:ring-teal-500/50' }
    };
    const selectedColor = colorStyles[colorClass];

    return (
        <>
            <div className={`bg-gray-800/60 p-6 rounded-lg ring-1 ring-white/10 flex flex-col transition-all duration-300 ${selectedColor.ring} hover:-translate-y-1`}>
                <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full mr-4 ${selectedColor.iconBg}`}>
                        {IconComponent && <IconComponent className={`h-8 w-8 ${selectedColor.text}`} />}
                    </div>
                    <h5 className={`text-xl font-semibold ${selectedColor.text}`}>{item.title}</h5>
                </div>
                <p className="text-gray-400 text-base leading-relaxed flex-grow">{item.summary}</p>
                {item.details && (
                    <button
                        onClick={() => setModalOpen(true)}
                        className={`mt-6 w-full font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${selectedColor.button}`}
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
            {item.details && (
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={item.title}>
                    {item.details}
                </Modal>
            )}
        </>
    );
};

export const SectionTendencias: React.FC<any> = ({ data, renderExpandableText }) => {
    const { tech, businessModels, finance } = data;

    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300"><p>{data.intro}</p></div>

            {/* Inovações Tecnológicas */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 space-y-8 ring-1 ring-white/10">
                <div className="flex items-center">
                    <Icons.MicrochipIcon className="h-9 w-9 text-sky-400"/>
                    <h3 className="ml-4 text-3xl font-semibold text-sky-400">{tech.title}</h3>
                </div>
                
                 <p className="prose prose-lg prose-invert max-w-none text-gray-300">{tech.intro}</p>
                
                 <div className="pt-4 space-y-8">
                    {/* Upgrading Technologies */}
                    <div>
                        <h4 className="text-2xl font-bold text-center text-sky-300 mb-6">{tech.upgrading.title}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
                            {tech.upgrading.technologies.map((item: any) => (
                                <TechnologyHighlightCard key={item.id} item={item} buttonLabel={tech.upgrading.modalButtonLabel} colorClass="sky" />
                            ))}
                        </div>
                    </div>
                    {/* Biodigester Evolution */}
                    <div>
                         <h4 className="text-2xl font-bold text-center text-sky-300 mb-6">{tech.biodigesters.title}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
                            {tech.biodigesters.technologies.map((item: any) => (
                                <TechnologyHighlightCard key={item.id} item={item} buttonLabel={tech.biodigesters.modalButtonLabel} colorClass="teal" />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="pt-8">
                     <h4 className="text-xl font-bold text-center text-sky-300">{tech.marketGrowth.title}</h4>
                    <div className="w-full max-w-4xl mx-auto h-96 mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart 
                                data={tech.marketGrowth.data} 
                                margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
                                barCategoryGap="20%"
                            >
                                <XAxis dataKey="year" stroke="#9ca3af" tick={{ fontSize: 16, fill: '#e5e7eb' }} />
                                <YAxis stroke="#9ca3af" tickFormatter={(value) => `US$${value/1000}B`} tick={{ fontSize: 14, fill: '#d1d5db' }} domain={[0, 'dataMax + 500']} />
                                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(14, 165, 233, 0.1)'}} />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                    <Cell fill="#0e7490" />
                                    <Cell fill="#0d9488" />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                     <div className="text-center bg-gray-900/50 rounded-lg p-4 max-w-sm mx-auto mt-4">
                        <p className="text-4xl font-bold text-white">{tech.marketGrowth.cagr}</p>
                        <div className="relative group flex items-center justify-center gap-2">
                            <p className="text-md text-gray-400 uppercase tracking-wider">{tech.marketGrowth.cagrLabel}</p>
                            {tech.marketGrowth.cagrTooltip && (
                                <div className="cursor-help">
                                    <InformationCircleIcon className="h-5 w-5 text-gray-500" />
                                    <div className="absolute bottom-full mb-2 w-80 p-3 bg-gray-900 text-gray-200 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 left-1/2 z-10 ring-1 ring-white/10">
                                        {tech.marketGrowth.cagrTooltip}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="space-y-8">
                {/* Novos Modelos de Negócio */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 space-y-6 ring-1 ring-white/10">
                    <div className="flex items-center">
                        <Icons.BuildingBlocksIcon className="h-9 w-9 text-violet-400"/>
                        <h3 className="ml-4 text-3xl font-semibold text-violet-400">{businessModels.title}</h3>
                    </div>
                    <p className="prose prose-lg prose-invert max-w-none text-gray-300">{businessModels.intro}</p>
                    <div className="grid grid-cols-1 gap-4 pt-4">
                        {businessModels.models.map((model: any) => (
                           <BusinessModelCard key={model.id} model={model} />
                        ))}
                    </div>
                </div>

                {/* Financiamento Climático e ESG */}
                {finance && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 space-y-6 ring-1 ring-white/10">
                        <div className="flex items-center">
                            <Icons.BanknotesIcon className="h-9 w-9 text-yellow-400"/>
                            <h3 className="ml-4 text-3xl font-semibold text-yellow-400">{finance.title}</h3>
                        </div>
                        <p className="prose prose-lg prose-invert max-w-none text-gray-300">{finance.intro}</p>

                        {finance.revenueStacking && (
                            <div className="space-y-4 pt-4">
                                <h4 className="text-xl font-bold text-center text-yellow-300">{finance.revenueStacking.title}</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                                    {finance.revenueStacking.streams.map((stream: any) => (
                                       <RevenueStreamCard key={stream.id} stream={stream} buttonLabel={finance.revenueStacking.modalButtonLabel} />
                                    ))}
                                </div>
                                <p className="text-center text-gray-400 italic mt-6 pt-4 border-t border-gray-700/50">
                                    {finance.revenueStacking.conclusion}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};