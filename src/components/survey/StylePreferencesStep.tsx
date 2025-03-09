
import React, { useState, useEffect } from 'react';
import PrimaryStyleSelection from './style-components/PrimaryStyleSelection';
import SecondaryStyleSelection from './style-components/SecondaryStyleSelection';
import ColorSelection from './style-components/ColorSelection';
import BrandSelection from './style-components/BrandSelection';

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
  gender: string;
  onUpdate: (data: Partial<StylePreferencesData>) => void;
}

const StylePreferencesStep: React.FC<StylePreferencesStepProps> = ({ data, gender, onUpdate }) => {
  const [primaryStyle, setPrimaryStyle] = useState(data.primaryStyle);
  const [secondaryStyles, setSecondaryStyles] = useState<string[]>(data.secondaryStyles || []);
  const [favoriteColors, setFavoriteColors] = useState<string[]>(data.favoriteColors || []);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(data.brandsLiked || []);
  
  const handlePrimaryStyleSelect = (style: string) => {
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
      <PrimaryStyleSelection 
        gender={gender}
        primaryStyle={primaryStyle}
        onSelect={handlePrimaryStyleSelect}
      />
      
      <SecondaryStyleSelection 
        gender={gender}
        primaryStyle={primaryStyle}
        secondaryStyles={secondaryStyles}
        onToggle={toggleSecondaryStyle}
      />
      
      <ColorSelection 
        favoriteColors={favoriteColors}
        onToggle={toggleColor}
      />
      
      <BrandSelection 
        gender={gender}
        selectedBrands={selectedBrands}
        onSelect={selectPopularBrand}
        onRemove={removeBrand}
      />
    </div>
  );
};

export default StylePreferencesStep;
