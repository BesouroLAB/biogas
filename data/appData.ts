

import React from 'react';
import { DashboardIcon, ReportIcon, ArrowTrendingUpIcon, BuildingLibraryIcon, ChainIcon, CogIcon, FireIcon, PresentationChartLineIcon, GlobeAltIcon, BookOpenIcon, MapIcon, DocumentTextIcon, DocumentArrowDownIcon, BuildingOffice2Icon, UserGroupIcon } from '../components/icons/Icons.tsx';

const baseMetrics = {
    potentialSucro: '5,2 Bi Nm³/ano',
    capacityPurification: '667M Nm³/ano',
    capacityLandfill: '122,25 MW',
    purificationPlants: 79,
    technicalPotential: '>97 Bi Nm³/ano'
};

const panoramaDataBase = {
    keyMetrics: {
        all: baseMetrics,
        saneamento: { potentialSucro: '0', capacityPurification: '350M Nm³/ano', capacityLandfill: '122,25 MW', purificationPlants: 35, technicalPotential: '>40 Bi Nm³/ano' },
        industria: { potentialSucro: '0', capacityPurification: '100M Nm³/ano', capacityLandfill: '0', purificationPlants: 14, technicalPotential: '>15 Bi Nm³/ano' },
        agropecuaria: { potentialSucro: '5,2 Bi Nm³/ano', capacityPurification: '217M Nm³/ano', capacityLandfill: '0', purificationPlants: 30, technicalPotential: '>42 Bi Nm³/ano' }
    },
    sourceData: [
        { fonte: 'Saneamento & RSU', porcentagem: 60 },
        { fonte: 'Indústria', porcentagem: 21 },
        { fonte: 'Agropecuária', porcentagem: 19 },
    ]
};

// Mock data for different regions, plausibly distributed from the national total.
export const panoramaData = {
    brasil: panoramaDataBase,
    sudeste: {
        keyMetrics: {
            all: { potentialSucro: '3.0 Bi Nm³/ano', capacityPurification: '300M Nm³/ano', capacityLandfill: '70 MW', purificationPlants: 40, technicalPotential: '>45 Bi Nm³/ano' },
            saneamento: { potentialSucro: '0', capacityPurification: '200M Nm³/ano', capacityLandfill: '70 MW', purificationPlants: 20, technicalPotential: '>20 Bi Nm³/ano' },
            industria: { potentialSucro: '0', capacityPurification: '50M Nm³/ano', capacityLandfill: '0', purificationPlants: 10, technicalPotential: '>8 Bi Nm³/ano' },
            agropecuaria: { potentialSucro: '3.0 Bi Nm³/ano', capacityPurification: '50M Nm³/ano', capacityLandfill: '0', purificationPlants: 10, technicalPotential: '>17 Bi Nm³/ano' }
        },
        sourceData: [
            { fonte: 'Saneamento & RSU', porcentagem: 55 },
            { fonte: 'Indústria', porcentagem: 25 },
            { fonte: 'Agropecuária', porcentagem: 20 },
        ]
    },
    sul: {
        keyMetrics: {
            all: { potentialSucro: '1.2 Bi Nm³/ano', capacityPurification: '200M Nm³/ano', capacityLandfill: '25 MW', purificationPlants: 25, technicalPotential: '>25 Bi Nm³/ano' },
            saneamento: { potentialSucro: '0', capacityPurification: '50M Nm³/ano', capacityLandfill: '25 MW', purificationPlants: 5, technicalPotential: '>8 Bi Nm³/ano' },
            industria: { potentialSucro: '0', capacityPurification: '30M Nm³/ano', capacityLandfill: '0', purificationPlants: 3, technicalPotential: '>5 Bi Nm³/ano' },
            agropecuaria: { potentialSucro: '1.2 Bi Nm³/ano', capacityPurification: '120M Nm³/ano', capacityLandfill: '0', purificationPlants: 17, technicalPotential: '>12 Bi Nm³/ano' }
        },
        sourceData: [
            { fonte: 'Saneamento & RSU', porcentagem: 30 },
            { fonte: 'Indústria', porcentagem: 15 },
            { fonte: 'Agropecuária', porcentagem: 55 },
        ]
    },
    nordeste: {
        keyMetrics: {
            all: { potentialSucro: '0.5 Bi Nm³/ano', capacityPurification: '80M Nm³/ano', capacityLandfill: '20 MW', purificationPlants: 8, technicalPotential: '>15 Bi Nm³/ano' },
            saneamento: { potentialSucro: '0', capacityPurification: '60M Nm³/ano', capacityLandfill: '20 MW', purificationPlants: 5, technicalPotential: '>7 Bi Nm³/ano' },
            industria: { potentialSucro: '0', capacityPurification: '10M Nm³/ano', capacityLandfill: '0', purificationPlants: 1, technicalPotential: '>2 Bi Nm³/ano' },
            agropecuaria: { potentialSucro: '0.5 Bi Nm³/ano', capacityPurification: '10M Nm³/ano', capacityLandfill: '0', purificationPlants: 2, technicalPotential: '>6 Bi Nm³/ano' }
        },
        sourceData: [
            { fonte: 'Saneamento & RSU', porcentagem: 65 },
            { fonte: 'Indústria', porcentagem: 10 },
            { fonte: 'Agropecuária', porcentagem: 25 },
        ]
    },
    centro_oeste: {
        keyMetrics: {
            all: { potentialSucro: '0.4 Bi Nm³/ano', capacityPurification: '70M Nm³/ano', capacityLandfill: '5 MW', purificationPlants: 4, technicalPotential: '>10 Bi Nm³/ano' },
            saneamento: { potentialSucro: '0', capacityPurification: '10M Nm³/ano', capacityLandfill: '5 MW', purificationPlants: 1, technicalPotential: '>2 Bi Nm³/ano' },
            industria: { potentialSucro: '0', capacityPurification: '5M Nm³/ano', capacityLandfill: '0', purificationPlants: 1, technicalPotential: '>1 Bi Nm³/ano' },
            agropecuaria: { potentialSucro: '0.4 Bi Nm³/ano', capacityPurification: '55M Nm³/ano', capacityLandfill: '0', purificationPlants: 2, technicalPotential: '>7 Bi Nm³/ano' }
        },
        sourceData: [
            { fonte: 'Saneamento & RSU', porcentagem: 20 },
            { fonte: 'Indústria', porcentagem: 10 },
            { fonte: 'Agropecuária', porcentagem: 70 },
        ]
    },
    norte: {
        keyMetrics: {
            all: { potentialSucro: '0.1 Bi Nm³/ano', capacityPurification: '17M Nm³/ano', capacityLandfill: '2.25 MW', purificationPlants: 2, technicalPotential: '>2 Bi Nm³/ano' },
            saneamento: { potentialSucro: '0', capacityPurification: '15M Nm³/ano', capacityLandfill: '2.25 MW', purificationPlants: 1, technicalPotential: '>1 Bi Nm³/ano' },
            industria: { potentialSucro: '0', capacityPurification: '1M Nm³/ano', capacityLandfill: '0', purificationPlants: 0, technicalPotential: '>0.5 Bi Nm³/ano' },
            agropecuaria: { potentialSucro: '0.1 Bi Nm³/ano', capacityPurification: '1M Nm³/ano', capacityLandfill: '0', purificationPlants: 1, technicalPotential: '>0.5 Bi Nm³/ano' }
        },
        sourceData: [
            { fonte: 'Saneamento & RSU', porcentagem: 70 },
            { fonte: 'Indústria', porcentagem: 5 },
            { fonte: 'Agropecuária', porcentagem: 25 },
        ]
    }
};


interface NavStructure {
    id: string;
    icon: React.FC<{ className?: string }>;
    component?: React.FC<any>; // Component can be assigned later
}

export const navStructure: NavStructure[] = [
    { id: 'visao-geral', icon: DashboardIcon },
    { id: 'sumario', icon: BookOpenIcon },
    { id: 'pesquisa-completa', icon: DocumentArrowDownIcon },
    { id: 'panorama', icon: ReportIcon },
    { id: 'tendencias', icon: ArrowTrendingUpIcon },
    { id: 'players', icon: BuildingOffice2Icon },
    { id: 'equidade-racial', icon: UserGroupIcon },
    { id: 'politicas', icon: BuildingLibraryIcon },
    { id: 'mercado', icon: ChainIcon },
    { id: 'infra-tech', icon: CogIcon },
    { id: 'materias-primas', icon: FireIcon },
    { id: 'producao-consumo', icon: PresentationChartLineIcon },
    { id: 'comparativo-global', icon: GlobeAltIcon },
    { id: 'roadmap-2030', icon: MapIcon },
    { id: 'referencias', icon: DocumentTextIcon },
];