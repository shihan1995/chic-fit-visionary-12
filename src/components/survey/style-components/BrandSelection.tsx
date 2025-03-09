
import React from 'react';
import { motion } from 'framer-motion';
import { getPopularBrands } from '../utils/styleOptions';

interface BrandSelectionProps {
  gender: string;
  selectedBrands: string[];
  onSelect: (brand: string) => void;
  onRemove: (brand: string) => void;
}

const BrandSelection: React.FC<BrandSelectionProps> = ({ 
  gender, 
  selectedBrands, 
  onSelect, 
  onRemove 
}) => {
  const popularBrands = getPopularBrands(gender);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-medium text-fashion-neutral-900">Favorite Brands</h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedBrands.map((brand) => (
          <div
            key={brand}
            className="px-3 py-1 bg-fashion-primary-light text-fashion-neutral-900 rounded-full text-sm flex items-center"
          >
            {brand}
            <button
              onClick={() => onRemove(brand)}
              className="ml-2 p-0.5 hover:bg-fashion-neutral-300 rounded-full"
            >
              <span className="sr-only">Remove</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      <div>
        <p className="text-sm text-fashion-neutral-600 mb-2">Popular brands:</p>
        <div className="flex flex-wrap gap-2">
          {popularBrands
            .filter(brand => !selectedBrands.includes(brand))
            .map((brand) => (
              <button
                key={brand}
                className="px-3 py-1 bg-fashion-neutral-100 text-fashion-neutral-700 hover:bg-fashion-neutral-200 rounded-full text-sm transition-colors"
                onClick={() => onSelect(brand)}
              >
                {brand}
              </button>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BrandSelection;
