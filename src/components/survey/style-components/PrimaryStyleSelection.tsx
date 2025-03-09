
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { getStyleOptions } from '../utils/styleOptions';

interface PrimaryStyleSelectionProps {
  gender: string;
  primaryStyle: string;
  onSelect: (style: string) => void;
}

const PrimaryStyleSelection: React.FC<PrimaryStyleSelectionProps> = ({ 
  gender, 
  primaryStyle, 
  onSelect 
}) => {
  const styleOptions = getStyleOptions(gender);
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-fashion-neutral-900">Your Style Identity</h3>
      <p className="text-sm text-fashion-neutral-600">
        Select the style that resonates most with your fashion identity.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {styleOptions.map((style) => (
          <motion.div
            key={style.value}
            whileHover={{ scale: 1.03 }}
            className={`
              relative rounded-lg overflow-hidden border-2 cursor-pointer transition-all
              ${primaryStyle === style.value 
                ? 'border-fashion-neutral-900 shadow-md' 
                : 'border-fashion-neutral-200 hover:border-fashion-neutral-300'}
            `}
            onClick={() => onSelect(style.value)}
          >
            <div className="aspect-[3/4]">
              <img 
                src={style.imageUrl} 
                alt={style.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                <h4 className="text-white font-medium">{style.label}</h4>
                <p className="text-white/80 text-xs line-clamp-2">{style.description}</p>
              </div>
              {primaryStyle === style.value && (
                <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                  <Heart size={16} className="text-fashion-neutral-900 fill-fashion-neutral-900" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrimaryStyleSelection;
