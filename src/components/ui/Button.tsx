import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
};

export default function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-transform';
  const variants: Record<string, string> = {
    primary: 'bg-orange-400 hover:bg-orange-500 text-gray-200 shadow-lg hover:scale-105',
    outline: 'bg-transparent text-orange-400 border border-orange-400/10 hover:shadow-sm hover:scale-105',
    ghost: 'bg-transparent text-orange-500',
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
