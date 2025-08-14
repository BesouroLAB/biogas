

import React, { useState, useRef, useEffect } from 'react';
import { BrazilFlagIcon, UkFlagIcon, GermanyFlagIcon, ChevronDownIcon } from './icons/Icons.tsx';
import { Language } from '../App.tsx';

interface LanguageSwitcherProps {
    currentLanguage: Language;
    onLanguageChange: (lang: Language) => void;
}

const languageOptions: { lang: Language; icon: React.FC<{ className?: string }>; label: string }[] = [
    { lang: 'pt', icon: BrazilFlagIcon, label: 'PT-BR' },
    { lang: 'en', icon: UkFlagIcon, label: 'EN' },
    { lang: 'de', icon: GermanyFlagIcon, label: 'DE' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const CurrentOption = languageOptions.find(opt => opt.lang === currentLanguage) || languageOptions[0];
    const CurrentFlag = CurrentOption.icon;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleSelect = (lang: Language) => {
        onLanguageChange(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-400"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <CurrentFlag className="h-6 w-8 rounded-sm" />
                <ChevronDownIcon className="h-5 w-5 text-gray-400" isExpanded={isOpen} />
            </button>
            {isOpen && (
                <ul
                    className="absolute top-full right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg overflow-hidden ring-1 ring-white/10 z-50"
                    role="listbox"
                >
                    {languageOptions.map(({ lang, icon: Icon, label }) => (
                        <li key={lang}>
                            <button
                                onClick={() => handleSelect(lang)}
                                className="w-full flex items-center gap-3 px-4 py-3 text-left text-lg font-medium text-gray-200 hover:bg-gray-600/70 transition-colors"
                                role="option"
                                aria-selected={currentLanguage === lang}
                            >
                                <Icon className="h-6 w-8 rounded-sm" />
                                <span>{label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};