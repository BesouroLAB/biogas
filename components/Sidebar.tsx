


import React from 'react';
import { useTranslation } from 'react-i18next';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, onClick, active }) => (
    <button
        onClick={onClick}
        className={`flex items-center w-full px-4 py-3 text-xl font-medium rounded-lg transition-colors duration-200 text-left ${
            active
                ? 'bg-teal-500/20 text-teal-300'
                : 'text-gray-400 hover:bg-gray-700/80 hover:text-gray-200'
        }`}
    >
        {icon}
        <span className="ml-4">{label}</span>
    </button>
);

interface SidebarProps {
    navLinks: Array<{ id: string; label: string; icon: React.FC<{ className?: string }> }>;
    activeSection: string;
    onNavItemClick: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ navLinks, activeSection, onNavItemClick }) => {
    const { t } = useTranslation();
    const FirstIcon = navLinks[0]?.icon;

    return (
        <aside 
            className="w-80 flex-shrink-0 hidden lg:flex border-r border-white/10 relative overflow-hidden"
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
                        <h1 className="text-3xl font-bold ml-4 text-white">{t('sidebar.title')}</h1>
                    </div>
                    <img
                        src="https://i.imgur.com/ojSEmGp.png"
                        alt={t('sidebar.logoAlt')}
                        className="mt-6 w-3/4 mx-auto object-contain mix-blend-lighten"
                    />
                </div>
                <nav className="flex-1 flex flex-col space-y-3 overflow-y-auto pr-2 -mr-6">
                    {navLinks.map(({ id, label, icon: Icon }) => (
                        <NavItem 
                            key={id}
                            icon={<Icon className="h-7 w-7" />} 
                            label={label} 
                            active={activeSection === id}
                            onClick={() => onNavItemClick(id)}
                        />
                    ))}
                </nav>
                <div className="mt-auto pt-4 flex-shrink-0 flex items-center justify-between">
                    <div className="text-gray-500 text-sm space-y-1 text-left">
                         <p>{t('sidebar.footer.developedBy')}</p>
                         <p>{t('sidebar.footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};