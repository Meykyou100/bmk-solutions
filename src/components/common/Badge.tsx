import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'navy' | 'gold' | 'blue' | 'slate' | 'light';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'navy',
  size = 'md',
  className = '',
  icon
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-widest'
  };

  const variantClasses = {
    navy: 'bg-navy-950 text-slate-100 border border-navy-800',
    gold: 'bg-gold-100/90 text-gold-700 border border-gold-300',
    blue: 'bg-sky-50 text-sky-800 border border-sky-200',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    light: 'bg-white/10 text-white border border-white/20 backdrop-blur-sm'
  };

  return (
    <span 
      className={`inline-flex items-center gap-1.5 font-semibold uppercase rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
