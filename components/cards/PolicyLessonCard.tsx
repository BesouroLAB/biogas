import React from 'react';
import * as Icons from '../icons/Icons.tsx';

type IconName = keyof typeof Icons;

interface PolicyLessonCardProps {
    lesson: {
        id: string;
        region: string;
        icon: IconName;
        text: string;
    };
}

export const PolicyLessonCard: React.FC<PolicyLessonCardProps> = ({ lesson }) => {
    const FlagIcon = Icons[lesson.icon] as React.ElementType;

    return (
        <div className="bg-gray-800/60 p-8 rounded-lg ring-1 ring-white/10 flex flex-col h-full transition-all duration-300 hover:ring-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/40 hover:-translate-y-1">
            <div className="flex items-center mb-4">
                {FlagIcon && <FlagIcon className="h-9 w-12 rounded-md object-cover mr-4 shadow-md" />}
                <h4 className="text-2xl font-bold text-cyan-200">{lesson.region}</h4>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                {lesson.text}
            </p>
        </div>
    );
};
