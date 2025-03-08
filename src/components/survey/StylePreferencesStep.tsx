
import React, { useState, useEffect } from 'react';
import { Heart, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface StylePreferencesData {
  primaryStyle: string;
  secondaryStyles: string[];
  favoriteColors: string[];
  favoritePatterns: string[];
  favoriteAccessories: string[];
  brandsLiked: string[];
  completed: boolean;
}

interface StylePreferencesStepProps {
  data: StylePreferencesData;
  onUpdate: (data: Partial<StylePreferencesData>) => void;
}

const styleOptions = [
  { 
    value: 'minimal', 
    label: 'Minimal', 
    description: 'Clean lines, neutral colors, simple silhouettes',
    imageUrl: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&q=80&w=300&h=400'
  },
  { 
    value: 'classic', 
    label: 'Classic', 
    description: 'Timeless pieces, structured silhouettes, neutral palette',
    imageUrl: 'https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&q=80&w=300&h=400'
  },
  { 
    value: 'bohemian', 
    label: 'Bohemian', 
    description: 'Flowy fabrics, patterns, earthy tones, layered looks',
    imageUrl: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=300&h=400'
  },
  { 
    value: 'streetwear', 
    label: 'Streetwear', 
    description: 'Urban, casual, comfortable, logo-focused',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300&h=400'
  },
  { 
    value: 'preppy', 
    label: 'Preppy', 
    description: 'Tailored, clean-cut, collegiate-inspired',
    imageUrl: 'https://images.unsplash.com/photo-1617059322432-50dbd8d02ef1?auto=format&fit=crop&q=80&w=300&h=400'
  },
  { 
    value: 'romantic', 
    label: 'Romantic', 
    description: 'Soft, feminine, floral patterns, delicate details',
    imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=300&h=400'
  },
  { 
    value: 'edgy', 
    label: 'Edgy', 
    description: 'Dark colors, leather, statement pieces, unconventional',
    imageUrl: 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&q=80&w=300&h=400'
  },
  { 
    value: 'athleisure', 
    label: 'Athleisure', 
    description: 'Athletic-inspired, comfortable, functional',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300&h=400'
  }
];

const colorOptions = [
  { value: 'black', label: 'Black', color: '#000000' },
  { value: 'white', label: 'White', color: '#FFFFFF' },
  { value: 'beige', label: 'Beige', color: '#F5F5DC' },
  { value: 'navy', label: 'Navy', color: '#000080' },
  { value: 'burgundy', label: 'Burgundy', color: '#800020' },
  { value: 'olive', label: 'Olive', color: '#556B2F' },
  { value: 'pink', label: 'Pink', color: '#FFC0CB' },
  { value: 'red', label: 'Red', color: '#FF0000' },
];

const popularBrands = [
  'Zara', 'H&M', 'COS', 'Uniqlo', 'Mango', 'Nike', 'Adidas', 
  'Reformation', 'Everlane', 'Aritzia'
];

const StylePreferencesStep = ({ data, onUpdate }: StylePreferencesStepProps) => {
  const [primaryStyle, setPrimaryStyle] = useState(data.primaryStyle);
  const [secondaryStyles, setSecondaryStyles] = useState<string[]>(data.secondaryStyles || []);
  const [favoriteColors, setFavoriteColors] = useState<string[]>(data.favoriteColors || []);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(data.brandsLiked || []);
  
  const handleStyleSelect = (style: string) => {
    setPrimaryStyle(style);
    checkCompletion(style, secondaryStyles, favoriteColors, selectedBrands);
  };
  
  const toggleSecondaryStyle = (style: string) => {
    const newStyles = secondaryStyles.includes(style)
      ? secondaryStyles.filter(s => s !== style)
      : [...secondaryStyles, style];
    
    setSecondaryStyles(newStyles);
    checkCompletion(primaryStyle, newStyles, favoriteColors, selectedBrands);
  };
  
  const toggleColor = (color: string) => {
    const newColors = favoriteColors.includes(color)
      ? favoriteColors.filter(c => c !== color)
      : [...favoriteColors, color];
    
    setFavoriteColors(newColors);
    checkCompletion(primaryStyle, secondaryStyles, newColors, selectedBrands);
  };
  
  const selectPopularBrand = (brand: string) => {
    if (!selectedBrands.includes(brand)) {
      const newBrands = [...selectedBrands, brand];
      setSelectedBrands(newBrands);
      checkCompletion(primaryStyle, secondaryStyles, favoriteColors, newBrands);
    }
  };
  
  const removeBrand = (brand: string) => {
    const newBrands = selectedBrands.filter(b => b !== brand);
    setSelectedBrands(newBrands);
    checkCompletion(primaryStyle, secondaryStyles, favoriteColors, newBrands);
  };
  
  const checkCompletion = (
    primary: string, 
    secondary: string[], 
    colors: string[], 
    brands: string[]
  ) => {
    const isComplete = !!primary && secondary.length > 0;
    
    if (isComplete) {
      onUpdate({
        primaryStyle: primary,
        secondaryStyles: secondary,
        favoriteColors: colors,
        brandsLiked: brands,
        completed: true
      });
    } else {
      onUpdate({ completed: false });
    }
  };
  
  useEffect(() => {
    if (data.completed) {
      // If we already have data, mark as complete
      onUpdate({ completed: true });
    }
  }, []);
  
  return (
    <div className="space-y-8">
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
              onClick={() => handleStyleSelect(style.value)}
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
      
      {primaryStyle && (
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
                  onClick={() => toggleSecondaryStyle(style.value)}
                >
                  {secondaryStyles.includes(style.value) && <Check size={14} className="mr-1" />}
                  {style.label}
                </button>
              ))}
          </div>
        </motion.div>
      )}
      
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
              onClick={() => toggleColor(color.value)}
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
                onClick={() => removeBrand(brand)}
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
                  onClick={() => selectPopularBrand(brand)}
                >
                  {brand}
                </button>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StylePreferencesStep;
