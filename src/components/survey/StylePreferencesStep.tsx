
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

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
  { value: 'minimal', label: 'Minimal', description: 'Clean lines, neutral colors, simple silhouettes' },
  { value: 'classic', label: 'Classic', description: 'Timeless pieces, structured silhouettes, neutral palette' },
  { value: 'bohemian', label: 'Bohemian', description: 'Flowy fabrics, patterns, earthy tones, layered looks' },
  { value: 'streetwear', label: 'Streetwear', description: 'Urban, casual, comfortable, logo-focused' },
  { value: 'preppy', label: 'Preppy', description: 'Tailored, clean-cut, collegiate-inspired' },
  { value: 'romantic', label: 'Romantic', description: 'Soft, feminine, floral patterns, delicate details' },
  { value: 'edgy', label: 'Edgy', description: 'Dark colors, leather, statement pieces, unconventional' },
  { value: 'athleisure', label: 'Athleisure', description: 'Athletic-inspired, comfortable, functional' }
];

const popularBrands = [
  'Zara', 'H&M', 'COS', 'Uniqlo', 'Mango', 'Nike', 'Adidas', 
  'Reformation', 'Everlane', 'Aritzia', 'Anthropologie', 'Madewell',
  'Levi\'s', 'Urban Outfitters', 'Free People', '& Other Stories'
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
  { value: 'blue', label: 'Blue', color: '#0000FF' },
  { value: 'green', label: 'Green', color: '#008000' },
  { value: 'yellow', label: 'Yellow', color: '#FFFF00' },
  { value: 'purple', label: 'Purple', color: '#800080' },
];

const patternOptions = [
  'Solid', 'Stripes', 'Floral', 'Polka Dots', 'Geometric', 
  'Animal Print', 'Plaid/Check', 'Abstract', 'Tie-Dye'
];

const accessoryOptions = [
  'Scarves', 'Statement Earrings', 'Delicate Necklaces', 'Stacked Rings',
  'Belts', 'Hats', 'Watches', 'Sunglasses', 'Hair Accessories', 'Bracelets'
];

const StylePreferencesStep = ({ data, onUpdate }: StylePreferencesStepProps) => {
  const [primaryStyle, setPrimaryStyle] = useState(data.primaryStyle);
  const [secondaryStyles, setSecondaryStyles] = useState<string[]>(data.secondaryStyles || []);
  const [favoriteColors, setFavoriteColors] = useState<string[]>(data.favoriteColors || []);
  const [favoritePatterns, setFavoritePatterns] = useState<string[]>(data.favoritePatterns || []);
  const [favoriteAccessories, setFavoriteAccessories] = useState<string[]>(data.favoriteAccessories || []);
  const [brandsInput, setBrandsInput] = useState('');
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
  
  const togglePattern = (pattern: string) => {
    const newPatterns = favoritePatterns.includes(pattern)
      ? favoritePatterns.filter(p => p !== pattern)
      : [...favoritePatterns, pattern];
    
    setFavoritePatterns(newPatterns);
  };
  
  const toggleAccessory = (accessory: string) => {
    const newAccessories = favoriteAccessories.includes(accessory)
      ? favoriteAccessories.filter(a => a !== accessory)
      : [...favoriteAccessories, accessory];
    
    setFavoriteAccessories(newAccessories);
  };
  
  const addBrand = () => {
    if (brandsInput.trim() && !selectedBrands.includes(brandsInput.trim())) {
      const newBrands = [...selectedBrands, brandsInput.trim()];
      setSelectedBrands(newBrands);
      setBrandsInput('');
      checkCompletion(primaryStyle, secondaryStyles, favoriteColors, newBrands);
    }
  };
  
  const removeBrand = (brand: string) => {
    const newBrands = selectedBrands.filter(b => b !== brand);
    setSelectedBrands(newBrands);
    checkCompletion(primaryStyle, secondaryStyles, favoriteColors, newBrands);
  };
  
  const selectPopularBrand = (brand: string) => {
    if (!selectedBrands.includes(brand)) {
      const newBrands = [...selectedBrands, brand];
      setSelectedBrands(newBrands);
      checkCompletion(primaryStyle, secondaryStyles, favoriteColors, newBrands);
    }
  };
  
  const checkCompletion = (
    primary: string, 
    secondary: string[], 
    colors: string[], 
    brands: string[]
  ) => {
    const isComplete = !!primary && secondary.length > 0 && colors.length > 0;
    
    if (isComplete) {
      onUpdate({
        primaryStyle: primary,
        secondaryStyles: secondary,
        favoriteColors: colors,
        favoritePatterns,
        favoriteAccessories,
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
        <h3 className="text-lg font-medium text-fashion-neutral-900">Primary Style</h3>
        <p className="text-sm text-fashion-neutral-600">
          Choose the style that best represents your fashion identity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {styleOptions.map((style) => (
            <button
              key={style.value}
              className={`
                text-left p-4 rounded-lg border-2 transition-all
                ${primaryStyle === style.value 
                  ? 'border-fashion-neutral-900 bg-fashion-neutral-50' 
                  : 'border-fashion-neutral-200 hover:border-fashion-neutral-300'}
              `}
              onClick={() => handleStyleSelect(style.value)}
            >
              <div className="flex items-center justify-between">
                <span className="text-fashion-neutral-900 font-medium">{style.label}</span>
                {primaryStyle === style.value && (
                  <Heart size={16} className="text-fashion-neutral-900 fill-fashion-neutral-900" />
                )}
              </div>
              <p className="text-xs text-fashion-neutral-600 mt-1">{style.description}</p>
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">Secondary Styles</h3>
        <p className="text-sm text-fashion-neutral-600">
          Select additional styles you incorporate into your wardrobe.
        </p>
        
        <div className="flex flex-wrap gap-2">
          {styleOptions
            .filter(style => style.value !== primaryStyle)
            .map((style) => (
              <button
                key={style.value}
                className={`
                  px-4 py-2 rounded-full text-sm transition-all
                  ${secondaryStyles.includes(style.value) 
                    ? 'bg-fashion-neutral-900 text-white' 
                    : 'bg-fashion-neutral-100 text-fashion-neutral-700 hover:bg-fashion-neutral-200'}
                `}
                onClick={() => toggleSecondaryStyle(style.value)}
              >
                {style.label}
              </button>
            ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">Favorite Colors</h3>
        <p className="text-sm text-fashion-neutral-600">
          Select colors you love to wear.
        </p>
        
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              className={`
                flex flex-col items-center p-2 rounded-lg border-2 transition-all
                ${favoriteColors.includes(color.value) 
                  ? 'border-fashion-neutral-900 transform scale-105' 
                  : 'border-transparent hover:border-fashion-neutral-300'}
              `}
              onClick={() => toggleColor(color.value)}
            >
              <div 
                className="w-8 h-8 rounded-full mb-1 border border-fashion-neutral-200"
                style={{ backgroundColor: color.color }}
              ></div>
              <span className="text-xs text-fashion-neutral-900">{color.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">Favorite Patterns</h3>
        
        <div className="flex flex-wrap gap-2">
          {patternOptions.map((pattern) => (
            <button
              key={pattern}
              className={`
                px-4 py-2 rounded-full text-sm transition-all
                ${favoritePatterns.includes(pattern) 
                  ? 'bg-fashion-neutral-800 text-white' 
                  : 'bg-fashion-neutral-100 text-fashion-neutral-700 hover:bg-fashion-neutral-200'}
              `}
              onClick={() => togglePattern(pattern)}
            >
              {pattern}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">Favorite Accessories</h3>
        
        <div className="flex flex-wrap gap-2">
          {accessoryOptions.map((accessory) => (
            <button
              key={accessory}
              className={`
                px-4 py-2 rounded-full text-sm transition-all
                ${favoriteAccessories.includes(accessory) 
                  ? 'bg-fashion-neutral-800 text-white' 
                  : 'bg-fashion-neutral-100 text-fashion-neutral-700 hover:bg-fashion-neutral-200'}
              `}
              onClick={() => toggleAccessory(accessory)}
            >
              {accessory}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">Favorite Brands</h3>
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={brandsInput}
            onChange={(e) => setBrandsInput(e.target.value)}
            placeholder="Add a brand..."
            className="flex-1 border border-fashion-neutral-300 rounded-md py-2 px-3 text-fashion-neutral-900 focus:ring-1 focus:ring-fashion-neutral-900 focus:border-fashion-neutral-900"
            onKeyPress={(e) => e.key === 'Enter' && addBrand()}
          />
          <button
            onClick={addBrand}
            className="px-4 py-2 bg-fashion-neutral-900 text-white rounded-md hover:bg-fashion-neutral-800 transition-colors"
          >
            Add
          </button>
        </div>
        
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
              .slice(0, 12)
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
      </div>
    </div>
  );
};

export default StylePreferencesStep;
