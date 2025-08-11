

import React from 'react';
import { RoadmapNode } from '../cards/RoadmapNode.tsx';
import { ShieldCheckIcon, TrophyIcon, RocketLaunchIcon } from '../icons/Icons.tsx';

export const SectionRoadmap: React.FC<any> = ({ data }) => {
     const icons = {
        conservative: <ShieldCheckIcon className="h-8 w-8 text-yellow-300" />,
        realistic: <TrophyIcon className="h-10 w-10 text-teal-300" />,
        optimistic: <RocketLaunchIcon className="h-8 w-8 text-cyan-300" />
    };

    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>
            
            <div className="relative mt-16">
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-700/50" />
                
                <div className="relative flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-4">
                    <RoadmapNode scenario={data.scenarios.conservative} icon={icons.conservative} />
                    <RoadmapNode scenario={data.scenarios.realistic} icon={icons.realistic} isCentral />
                    <RoadmapNode scenario={data.scenarios.optimistic} icon={icons.optimistic} />
                </div>
            </div>
        </div>
    );
};