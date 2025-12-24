import React from 'react';

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform active:scale-95 text-base md:text-lg";
  
  const variants = {
    primary: "bg-gradient-primary text-text-100 shadow-[0_4px_14px_0_rgba(255,110,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,110,0,0.23)] hover:-translate-y-0.5",
    secondary: "bg-transparent border border-border-subtle text-text-200 hover:border-primary-500 hover:text-primary-400 hover:shadow-[0_0_15px_rgba(255,110,0,0.2)]",
    ghost: "text-text-300 hover:text-primary-400"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Section Wrapper ---
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${darker ? 'bg-bg-950' : 'bg-bg-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
      {/* Background Pattern Hint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>
    </section>
  );
};

// --- Typography Components ---
export const Headline: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-100 mb-6 ${className}`}>
    {children}
  </h2>
);

export const Subheadline: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <p className={`font-sans text-lg md:text-xl text-text-300 leading-relaxed max-w-3xl ${className}`}>
    {children}
  </p>
);