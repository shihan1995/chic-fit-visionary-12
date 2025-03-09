
import React from 'react';
import { motion } from 'framer-motion';
import { colorOptions } from '../utils/styleOptions';

interface ColorSelectionProps {
  favoriteColors: string[];
  onToggle: (color: string) => void;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ favoriteColors, onToggle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-medium text-fashion-neutral-900">Favorite Colors</h3>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
        {colorOptions.map((color) => (
          <button
            key={color.value}
            className={`
              flex flex-col items-center p-2 rounded-lg transition-all
              ${favoriteColors.includes(color.value) 
                ? 'bg-fashion-neutral-100 transform scale-105' 
                : 'hover:bg-fashion-neutral-50'}
            `}
            onClick={() => onToggle(color.value)}
          >
            <div 
              className={`
                w-10 h-10 rounded-full mb-1 border border-fashion-neutral-200
                ${favoriteColors.includes(color.value) ? 'ring-2 ring-fashion-neutral-900' : ''}
              `}
              style={{ backgroundColor: color.color }}
            ></div>
            <span className="text-xs text-fashion-neutral-900">{color.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ColorSelection;
