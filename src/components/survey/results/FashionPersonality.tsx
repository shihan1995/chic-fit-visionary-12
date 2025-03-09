
import React from 'react';
import { Sparkles } from 'lucide-react';
import { styleImages } from '../utils/styleOptions';

interface FashionPersonalityProps {
  primaryStyle: string;
  secondaryStyles: string[];
  gender: string;
  styleDescriptions: Record<string, string>;
}

const FashionPersonality = ({ 
  primaryStyle, 
  secondaryStyles, 
  gender, 
  styleDescriptions 
}: FashionPersonalityProps) => {
  const getStyleImage = (style: string, gender: string): string => {
    const styleImage = styleImages[style];
    
    if (typeof styleImage === 'object' && styleImage !== null) {
      return styleImage[gender as keyof typeof styleImage] || 
             styleImage['unisex'] as string || 
             'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300&h=400';
    }
    
    return styleImage as string || 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300&h=400';
  };

  return (
    <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
      <div className="flex items-center mb-4">
        <Sparkles size={20} className="text-fashion-neutral-900 mr-2" />
        <h3 className="text-xl font-medium text-fashion-neutral-900">Your Fashion Personality</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-grow">
          <div className="text-lg font-medium text-fashion-neutral-900 mb-1">
            {primaryStyle.charAt(0).toUpperCase() + primaryStyle.slice(1)}
          </div>
          <p className="text-sm text-fashion-neutral-600">
            {styleDescriptions[primaryStyle]}
          </p>
        </div>
        <div className="w-full md:w-48 h-64 rounded-lg overflow-hidden border border-fashion-neutral-200">
          <img 
            src={getStyleImage(primaryStyle, gender)} 
            alt={primaryStyle + " style"} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300&h=400';
            }}
          />
        </div>
      </div>
      
      <div>
        <div className="text-sm font-medium text-fashion-neutral-800 mb-2">You also incorporate elements of:</div>
        <div className="flex flex-wrap gap-2">
          {secondaryStyles.map((style) => (
            <span 
              key={style} 
              className="px-3 py-1 bg-fashion-neutral-200 text-fashion-neutral-800 rounded-full text-sm"
            >
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionPersonality;
