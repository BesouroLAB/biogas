



import React from 'react';
import { FunnelIcon } from './icons/Icons.tsx';

type FilterOption = {
    value: string;
    label: string;
};

type FilterConfig = {
    id: string;
    label:string;
    options: FilterOption[];
};

interface FilterBarProps {
    filters: Record<string, string>;
    onFilterChange: (filterType: string, value: string) => void;
    filterConfigs: FilterConfig[];
    title: string;
}

const FilterGroup: React.FC<{
    config: FilterConfig;
    selectedValue: string;
    onFilterChange: (filterType: string, value: string) => void;
}> = ({ config, selectedValue, onFilterChange }) => {
    
    const handleFilterClick = (value: string) => {
        onFilterChange(config.id, value);
    };

    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <h5 className="text-lg font-semibold text-gray-300 whitespace-nowrap">{config.label}:</h5>
            <div className="flex flex-wrap gap-2 p-1 bg-gray-900/50 rounded-lg">
                {config.options.map(option => (
                    <button
                        key={option.value}
                        onClick={() => handleFilterClick(option.value)}
                        className={`px-4 py-2 text-base font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                            selectedValue === option.value
                                ? 'bg-teal-500 text-white shadow-md'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                        }`}
                        aria-pressed={selectedValue === option.value}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}


export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange, filterConfigs, title }) => {
    return (
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-8 ring-1 ring-white/10 space-y-6">
             <div className="flex items-center">
                <FunnelIcon className="h-7 w-7 text-teal-400 mr-4" />
                <h4 className="text-2xl font-bold text-gray-100">{title}</h4>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-6 lg:gap-8">
                {filterConfigs.map(config => (
                    <FilterGroup
                        key={config.id}
                        config={config}
                        selectedValue={filters[config.id]}
                        onFilterChange={onFilterChange}
                    />
                ))}
            </div>
        </div>
    );
};