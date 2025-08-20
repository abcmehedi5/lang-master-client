import React from 'react';

interface WhiteButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'font-medium transition-all duration-500 ease-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden shrink-0';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };
  
  const variantClasses = {
    default: `
      bg-white text-gray-800 
      shadow-[0_0_20px_rgba(255,255,255,0.3)] 
      hover:shadow-[0_0_40px_rgba(255,255,255,0.6),inset_0_0_20px_rgba(255,255,255,0.1)]
      backdrop-blur-sm bg-white/95
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-white/40 before:to-transparent
      before:translate-x-[-200%] before:skew-x-12 before:transition-transform before:duration-700
      hover:before:translate-x-[200%]
      after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/20 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300
      hover:after:opacity-100
    `,
    outline: `
      bg-transparent text-white border-2 border-white/40
      shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] 
      hover:border-white/80 hover:text-white
      hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2),0_0_20px_rgba(255,255,255,0.3)]
      backdrop-blur-sm
      before:absolute before:inset-0 before:border-2 before:border-white/0 before:rounded-[inherit]
      before:transition-all before:duration-500 before:scale-110 before:opacity-0
      hover:before:scale-100 hover:before:opacity-100 hover:before:border-white/30
      after:absolute after:inset-2 after:bg-gradient-to-br after:from-white/10 after:via-transparent after:to-white/5 
      after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-300
      hover:after:opacity-100
    `
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default WhiteButton;