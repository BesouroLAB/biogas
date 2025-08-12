import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button 
        onClick={() => changeLanguage('pt')} 
        className="p-2 rounded-md hover:bg-gray-700 transition-colors"
        aria-label="Mudar para Português"
      >
        <span className="text-2xl">🇧🇷</span>
      </button>
      <button 
        onClick={() => changeLanguage('de')} 
        className="p-2 rounded-md hover:bg-gray-700 transition-colors"
        aria-label="Mudar para Alemão"
      >
        <span className="text-2xl">🇩🇪</span>
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className="p-2 rounded-md hover:bg-gray-700 transition-colors"
        aria-label="Mudar para Inglês"
      >
        <span className="text-2xl">🇺🇸</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
