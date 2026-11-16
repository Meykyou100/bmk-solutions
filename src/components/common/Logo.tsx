import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '',
  size = 'md' 
}) => {
  const isLight = variant === 'light';

  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16'
  };

  const logoSrc = isLight ? '/logo-bmk-white.png' : '/logo-bmk.png';

  return (
    <a 
      href="#accueil" 
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-900 rounded-lg transition-transform duration-200 active:scale-[0.98] ${className}`}
      aria-label="BMK SOLUTIONS — Accueil"
    >
      <img
        src={logoSrc}
        alt="BMK SOLUTIONS — Sécurité • Électricité • Énergie"
        className={`${heightClasses[size]} w-auto object-contain transition-all duration-300 group-hover:opacity-95`}
        loading="eager"
      />
    </a>
  );
};
