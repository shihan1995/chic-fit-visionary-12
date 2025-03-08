
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
  animationDelay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
  onClick,
  animationDelay = 0,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-white border border-fashion-neutral-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] animate-slide-up",
        className
      )}
      onClick={onClick}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="bg-fashion-primary-light p-3 rounded-lg w-fit mb-5 text-fashion-neutral-900">
          {icon}
        </div>
        <h3 className="text-fashion-neutral-900 font-medium text-lg mb-2">{title}</h3>
        <p className="text-fashion-neutral-600 text-sm leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
