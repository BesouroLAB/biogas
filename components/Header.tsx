
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuIcon, XIcon } from './icons/Icons.tsx';
import LanguageSwitcher from './LanguageSwitcher.tsx';

interface HeaderProps {
    navLinks: Array<{ id: string; label: string; icon: React.FC<{ className?: string }> }>;
    onNavItemClick: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navLinks, onNavItemClick }) => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const FirstIcon = navLinks[0]?.icon;

    const handleLinkClick = (id: string) => {
        onNavItemClick(id);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header 
                className="sticky top-0 z-40 border-b border-white/10 bg-gray-800"
            >
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
                    <div className="flex items-center">
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-gray-300 hover:text-white transition-colors p-2 rounded-md hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <XIcon className="h-8 w-8"/> : <MenuIcon className="h-8 w-8"/>}
                        </button>

                        {/* Desktop Title */}
                        <div className="hidden lg:flex items-center">
                            <h2 className="text-xl font-semibold text-gray-200 uppercase tracking-wider">{t('title')}</h2>
                        </div>

                        {/* Mobile Title */}
                        <div className="lg:hidden flex items-center ml-2">
                            {FirstIcon && <FirstIcon className="h-8 w-8 text-teal-400" />}
                            <h1 className="text-xl font-bold ml-3 text-white">Biogás Brasil</h1>
                        </div>
                    </div>
                    <LanguageSwitcher />
                </div>
            </header>
            
            {/* Mobile Menu Slide-out */}
            <div
                id="mobile-menu-wrapper"
                className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />

                {/* Sliding Panel */}
                <div
                    className={`relative w-80 h-full bg-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    id="mobile-menu"
                    aria-hidden={!isMobileMenuOpen}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobile-menu-title"
                >
                    {/* Background Image */}
                    <img
                        src="https://i.imgur.com/pu96pOM.jpeg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                    />
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Content */}
                    <div className="relative z-10 w-full p-6 flex flex-col h-full overflow-hidden">
                        <div className="flex flex-col mb-12 px-2 flex-shrink-0">
                            <div className="flex items-center">
                                {FirstIcon && <FirstIcon className="h-10 w-10 text-teal-400" />}
                                <h1 id="mobile-menu-title" className="text-3xl font-bold ml-4 text-white">Biogás Brasil</h1>
                            </div>
                            <img
                                src="https://i.imgur.com/ojSEmGp.png"
                                alt="Logo Cooperação Alemanha-Brasil"
                                className="mt-6 w-3/4 mx-auto object-contain mix-blend-lighten"
                            />
                        </div>
                        <nav className="flex-1 flex flex-col space-y-3 overflow-y-auto pr-2 -mr-6">
                            {navLinks.map(({ id, label, icon: Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => handleLinkClick(id)}
                                    className="flex items-center w-full px-4 py-3 text-xl font-medium rounded-lg transition-colors duration-200 text-left text-gray-400 hover:bg-gray-700/80 hover:text-gray-200"
                                >
                                    <Icon className="h-7 w-7" />
                                    <span className="ml-4">{label}</span>
                                </button>
                            ))}
                        </nav>
                        <div className="mt-auto pt-4 flex-shrink-0 flex items-center justify-between">
                            <div className="text-gray-500 text-sm space-y-1 text-left">
                                <p>Desenvolvido por Tiago Fernandes | BesouroLAB</p>
                                <p>2025 &copy;Todos os Direitos Reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
