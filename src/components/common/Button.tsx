import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'whatsapp' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
  icon,
  iconPosition = 'right',
  ariaLabel
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-md select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  const variantStyles = {
    primary: "bg-navy-950 text-white hover:bg-navy-900 border border-navy-800 shadow-sm hover:shadow active:scale-[0.99] focus-visible:ring-navy-900",
    secondary: "bg-white text-navy-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-sm active:scale-[0.99] focus-visible:ring-navy-900",
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 border border-gold-600/30 shadow-sm font-bold active:scale-[0.99] focus-visible:ring-gold-500",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba5a] border border-[#1ebd53] shadow-sm font-semibold active:scale-[0.99] focus-visible:ring-[#25D366]",
    white: "bg-white text-navy-950 hover:bg-slate-100 shadow-sm active:scale-[0.99] focus-visible:ring-white",
    ghost: "bg-transparent text-navy-800 hover:bg-slate-100/80 active:scale-[0.99] focus-visible:ring-navy-800"
  };

  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer";

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
