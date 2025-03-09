
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { getStyleOptions } from '../utils/styleOptions';

interface SecondaryStyleSelectionProps {
  gender: string;
  primaryStyle: string;
  secondaryStyles: string[];
  onToggle: (style: string) => void;
}

const SecondaryStyleSelection: React.FC<SecondaryStyleSelectionProps> = ({
  gender,
  primaryStyle,
  secondaryStyles,
  onToggle
}) => {
  const styleOptions = getStyleOptions(gender);

  if (!primaryStyle) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-medium text-fashion-neutral-900">Additional Styles</h3>
      <p className="text-sm text-fashion-neutral-600">
        Select other styles you sometimes incorporate into your wardrobe.
      </p>
      
      <div className="flex flex-wrap gap-2">
        {styleOptions
          .filter(style => style.value !== primaryStyle)
          .map((style) => (
            <button
              key={style.value}
              className={`
                flex items-center px-3 py-2 rounded-full text-sm transition-all
                ${secondaryStyles.includes(style.value) 
                  ? 'bg-fashion-neutral-900 text-white' 
                  : 'bg-fashion-neutral-100 text-fashion-neutral-700 hover:bg-fashion-neutral-200'}
              `}
              onClick={() => onToggle(style.value)}
            >
              {secondaryStyles.includes(style.value) && <Check size={14} className="mr-1" />}
              {style.label}
            </button>
          ))}
      </div>
    </motion.div>
  );
};

export default SecondaryStyleSelection;
