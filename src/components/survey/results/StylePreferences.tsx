
import React from 'react';
import { Heart } from 'lucide-react';

interface StylePreferencesProps {
  favoriteColors: string[];
  favoritePatterns: string[];
  brandsLiked: string[];
}

const StylePreferences = ({ favoriteColors, favoritePatterns, brandsLiked }: StylePreferencesProps) => {
  return (
    <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
      <div className="flex items-center mb-4">
        <Heart size={20} className="text-fashion-neutral-900 mr-2" />
        <h3 className="text-lg font-medium text-fashion-neutral-900">Style Preferences</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Favorite Colors</h4>
          <div className="flex flex-wrap gap-2">
            {favoriteColors.map((color) => (
              <span 
                key={color} 
                className="px-3 py-1 bg-fashion-neutral-200 text-fashion-neutral-800 rounded-full text-xs"
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Preferred Patterns</h4>
          <div className="flex flex-wrap gap-2">
            {favoritePatterns.map((pattern) => (
              <span 
                key={pattern} 
                className="px-3 py-1 bg-fashion-neutral-200 text-fashion-neutral-800 rounded-full text-xs"
              >
                {pattern}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Favorite Brands</h4>
          <div className="flex flex-wrap gap-2">
            {brandsLiked.slice(0, 6).map((brand) => (
              <span 
                key={brand} 
                className="px-3 py-1 bg-fashion-neutral-200 text-fashion-neutral-800 rounded-full text-xs"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylePreferences;
