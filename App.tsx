

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { Header } from './components/Header.tsx';
import { AiAssistant } from './components/AiAssistant.tsx';

import { SectionVisaoGeral } from './components/sections/SectionVisaoGeral.tsx';
import { SectionSumario } from './components/sections/SectionSumario.tsx';
import { SectionPesquisaCompleta } from './components/sections/SectionPesquisaCompleta.tsx';
import { SectionPanorama } from './components/sections/SectionPanorama.tsx';
import { SectionTendencias } from './components/sections/SectionTendencias.tsx';
import { SectionPlayers } from './components/sections/SectionPlayers.tsx';
import { SectionPoliticas } from './components/sections/SectionPoliticas.tsx';
import { SectionMercado } from './components/sections/SectionMercado.tsx';
import { SectionInfraTech } from './components/sections/SectionInfraTech.tsx';
import { SectionRoadmap } from './components/sections/SectionRoadmap.tsx';
import { SectionEquidadeRacial } from './components/sections/SectionEquidadeRacial.tsx';
import { SectionReferencias } from './components/sections/SectionReferencias.tsx';
import { SectionMateriasPrimas } from './components/sections/SectionMateriasPrimas.tsx';
import { SectionProducaoConsumo } from './components/sections/SectionProducaoConsumo.tsx';
import { SectionGlobalComparison } from './components/sections/SectionGlobalComparison.tsx';


import * as appData from './data/appData.ts';
import { translations } from './data/translations.ts';
import { geminiService } from './services/geminiService.ts';
import { ChevronDownIcon } from './components/icons/Icons.tsx';
import { FormattedTextViewer } from './components/FormattedTextViewer.tsx';

export interface AppFilters {
  region: keyof typeof appData.panoramaData;
  sourceType: keyof (typeof appData.panoramaData)['brasil']['keyMetrics'];
}

export type Language = 'pt' | 'en' | 'de';


const App: React.FC = () => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const [activeSection, setActiveSection] = useState<string>('visao-geral');
    const [filters, setFilters] = useState<AppFilters>({ region: 'brasil', sourceType: 'all' });
    const [language, setLanguage] = useState<Language>('pt');
    
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const t = translations[language];

    const handleLanguageChange = (lang: Language) => {
        if (lang === 'pt') {
            setLanguage(lang);
        } else {
            alert(t.languageSwitcher.comingSoon);
        }
    };

    const navLinks = appData.navStructure.map(item => ({
        ...item,
        label: t.navLinkLabels[item.id],
    }));

    const buildContext = (data: any): string => {
        const extractText = (obj: any): string => {
            if (typeof obj === 'string') return obj;
            if (Array.isArray(obj)) return obj.map(extractText).join('\n');
            if (typeof obj === 'object' && obj !== null) {
                return Object.values(obj).map(extractText).join('\n');
            }
            return '';
        };
        const { referencesData, ...relevantData } = data;
        return extractText(relevantData);
    };

    useEffect(() => {
        const contextData = buildContext(t.reportData);
        if (contextData && t.aiAssistant?.systemInstruction) {
             geminiService.startChat({
                systemInstruction: t.aiAssistant.systemInstruction,
                context: contextData,
                contextPrompt: t.aiAssistant.contextPrompt,
                initialModelResponse: t.aiAssistant.initialModelResponse,
            });
        }
    }, [t]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
        );

        const currentRefs = sectionRefs.current;
        Object.values(currentRefs).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
             Object.values(currentRefs).forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const handleNavClick = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);
    
    const handleFilterChange = (filterType: keyof AppFilters, value: string) => {
        setFilters(prev => ({...prev, [filterType]: value }));
    };

    const toggleExpanded = useCallback((id: string) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    }, []);

    const renderExpandableText = (id: string, text: string, maxLength = 350) => {
        const isExpanded = !!expanded[id];
        const displayText = text.replace(/CO2/g, 'CO₂').replace(/H2S/g, 'H₂S').replace(/CH4/g, 'CH₄');

        const tolerance = 100;
        const needsExpansion = displayText.length > maxLength + tolerance;

        if (!needsExpansion) {
            return <FormattedTextViewer text={displayText} keywords={t.keywords} />;
        }

        return (
            <div id={`expandable-text-container-${id}`}>
                <div
                    className={`relative overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[200rem]' : 'max-h-60'}`}
                >
                    <FormattedTextViewer text={displayText} keywords={t.keywords} />
                    
                    {!isExpanded && (
                        <div 
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
                        />
                    )}
                </div>
                <button
                    onClick={() => toggleExpanded(id)}
                    aria-expanded={isExpanded}
                    aria-controls={`expandable-text-container-${id}`}
                    className="mt-4 text-teal-400 hover:text-teal-300 font-semibold text-lg focus:outline-none flex items-center transition-colors"
                >
                    {isExpanded ? t.buttons.seeLess : t.buttons.seeMore}
                    <ChevronDownIcon className="h-5 w-5 ml-1" isExpanded={isExpanded} />
                </button>
            </div>
        );
    };

    return (
        <div className="flex h-screen bg-gray-900 text-gray-200 font-sans">
            <Sidebar 
                navLinks={navLinks} 
                activeSection={activeSection} 
                onNavItemClick={handleNavClick}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header 
                    navLinks={navLinks} 
                    onNavItemClick={handleNavClick}
                    currentLanguage={language}
                    onLanguageChange={handleLanguageChange}
                />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6 lg:p-8 space-y-16">
                    {navLinks.map(({ id }) => {
                        const props: any = { t, renderExpandableText, sectionId: id };
                        let ComponentToRender: React.FC<any> | null = null;

                        switch (id) {
                            case 'visao-geral':
                                ComponentToRender = SectionVisaoGeral;
                                props.data = t.reportData;
                                break;
                            case 'sumario':
                                ComponentToRender = SectionSumario;
                                props.data = t.reportData.executiveSummary;
                                break;
                            case 'pesquisa-completa':
                                ComponentToRender = SectionPesquisaCompleta;
                                props.data = t.fullResearchSection;
                                break;
                            case 'panorama':
                                ComponentToRender = SectionPanorama;
                                props.filters = filters;
                                props.handleFilterChange = handleFilterChange;
                                props.panoramaData = appData.panoramaData;
                                props.data = t.reportData.currentScenario;
                                break;
                            case 'tendencias':
                                ComponentToRender = SectionTendencias;
                                props.data = t.reportData.trends2030;
                                break;
                            case 'players':
                                ComponentToRender = SectionPlayers;
                                props.data = t.reportData.playersData;
                                break;
                            case 'equidade-racial':
                                ComponentToRender = SectionEquidadeRacial;
                                props.data = t.reportData.equityData;
                                break;
                            case 'politicas':
                                ComponentToRender = SectionPoliticas;
                                props.data = t.reportData.policies;
                                break;
                            case 'mercado':
                                ComponentToRender = SectionMercado;
                                props.data = t.reportData.marketAndValueChain;
                                break;
                            case 'infra-tech':
                                ComponentToRender = SectionInfraTech;
                                props.data = t.reportData.infraAndTech;
                                break;
                            case 'materias-primas':
                                ComponentToRender = SectionMateriasPrimas;
                                props.data = t.reportData.rawMaterialsAndEfficiency;
                                break;
                            case 'producao-consumo':
                                ComponentToRender = SectionProducaoConsumo;
                                props.data = t.reportData.productionAndConsumption;
                                break;
                            case 'comparativo-global':
                                ComponentToRender = SectionGlobalComparison;
                                props.data = t.reportData.globalComparison;
                                break;
                            case 'roadmap-2030':
                                ComponentToRender = SectionRoadmap;
                                props.data = t.reportData.roadmapData;
                                break;
                            case 'referencias':
                                ComponentToRender = SectionReferencias;
                                props.data = t.reportData.referencesData;
                                break;
                        }

                        if (!ComponentToRender) return null;

                        return (
                            <section key={id} id={id} ref={el => { sectionRefs.current[id] = el; }}>
                                <ComponentToRender {...props} />
                            </section>
                        );
                    })}
                </main>
            </div>
            <AiAssistant translations={t.aiAssistant} />
        </div>
    );
};

export default App;