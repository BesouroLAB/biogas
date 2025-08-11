import React from 'react';
import { InfoTabs } from '../InfoTabs.tsx';

export const SectionVisaoGeral: React.FC<any> = ({ data }) => (
    <>
        <div className="text-center mb-10 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500 leading-tight">
                Usina Industrial de Biogás
                <br />
                Alemanha-Brasil
            </h1>
            
            <div>
                <h2 className="text-3xl font-bold text-yellow-400">
                    Pesquisa e Análise Estratégica
                </h2>
                <p className="text-xl text-gray-400 mt-2">
                    {data.subtitle}
                </p>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-6">
                    <span className="font-semibold text-gray-200">Proposta e Objetivos:</span> Planejamento e construção de um moderno complexo de usinas de biogás na América do Sul utilizando os mais recentes resultados de pesquisa e desenvolvimento.
                </p>
            </div>
        </div>

        <InfoTabs data={data.companyInfo} />
    </>
);