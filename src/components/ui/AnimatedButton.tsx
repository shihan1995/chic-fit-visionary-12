
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'right',
}: AnimatedButtonProps) => {
  const baseClasses = "relative overflow-hidden rounded-md font-medium transition-all duration-300 active:scale-[0.98] flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-fashion-neutral-900 text-white hover:bg-fashion-neutral-800",
    secondary: "bg-fashion-neutral-100 text-fashion-neutral-900 border border-fashion-neutral-300 hover:bg-fashion-neutral-200",
    outline: "bg-transparent text-fashion-neutral-900 border border-fashion-neutral-900 hover:bg-fashion-neutral-900 hover:text-white",
  };
  
  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3 gap-2.5",
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
    >
      {icon && iconPosition === 'left' && (
        <span className="inline-flex items-center">{icon}</span>
      )}
      <span className="relative">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex items-center">{icon}</span>
      )}
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute inset-0 opacity-0 hover:opacity-10 transition duration-300 bg-white/20"></span>
      </span>
    </button>
  );
};

export default AnimatedButton;
