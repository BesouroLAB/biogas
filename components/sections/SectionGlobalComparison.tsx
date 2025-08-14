import React from 'react';
import { GlobalComparisonChart } from '../charts/GlobalComparisonChart.tsx';
import { PolicyLessonCard } from '../cards/PolicyLessonCard.tsx';

export const SectionGlobalComparison: React.FC<{ data: any }> = ({ data }) => {
    if (!data || !data.positioning || !data.lessons) return null;

    const { positioning, lessons } = data;

    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-bold text-teal-400 mb-4 border-l-4 border-teal-400 pl-4">{data.title}</h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>{data.intro}</p>
            </div>

            {/* Global Positioning Section */}
            <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{positioning.title}</h3>
                <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{positioning.summary}</p>
                
                <GlobalComparisonChart
                    tableData={positioning.table}
                    title={positioning.chartTitle}
                    labels={positioning.chartLabels}
                />
            </div>

            {/* Global Lessons Section */}
            <div className="space-y-6 pt-8">
                <h3 className="text-3xl font-semibold text-gray-200 text-center">{lessons.title}</h3>
                <p className="prose prose-lg prose-invert max-w-3xl mx-auto text-center text-gray-300">{lessons.intro}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 items-stretch">
                    {lessons.items.map((lesson: any) => (
                        <PolicyLessonCard key={lesson.id} lesson={lesson} />
                    ))}
                </div>
            </div>
        </div>
    );
};
