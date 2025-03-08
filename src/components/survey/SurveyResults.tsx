
import React, { useEffect, useState } from 'react';
import { Sparkles, Palette, Ruler, Heart } from 'lucide-react';

interface SurveyResultsProps {
  data: {
    colorAnalysis: {
      skinTone: string;
      undertone: string;
      recommendedColors: string[];
    };
    sizeAnalysis: {
      recommendedSizes: Record<string, string>;
    };
    stylePreferences: {
      primaryStyle: string;
      secondaryStyles: string[];
      favoriteColors: string[];
      favoritePatterns: string[];
      favoriteAccessories: string[];
      brandsLiked: string[];
    };
  };
}

const SurveyResults = ({ data }: SurveyResultsProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate AI processing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const styleDescriptions: Record<string, string> = {
    'minimal': 'Clean, understated, and focused on simplicity. Your wardrobe likely consists of versatile pieces in neutral colors.',
    'classic': 'Timeless and sophisticated. You prefer enduring styles over fleeting trends.',
    'bohemian': 'Free-spirited and artistic with a focus on natural fabrics, patterns, and layering.',
    'streetwear': 'Urban-inspired, comfortable, and trend-conscious with a focus on casual staples.',
    'preppy': 'Polished, collegiate, and traditional with a focus on clean lines and tailoring.',
    'romantic': 'Soft, feminine, and delicate with an emphasis on flowing silhouettes and details.',
    'edgy': 'Bold, unconventional, and statement-making with elements of rebellion.',
    'athleisure': 'Performance-focused, comfortable, and sporty, balancing function with style.'
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-16 h-16 border-4 border-fashion-neutral-200 border-t-fashion-neutral-900 rounded-full animate-spin mb-4"></div>
        <h3 className="text-lg font-medium text-fashion-neutral-900 mb-2">Creating Your Style Profile</h3>
        <p className="text-sm text-fashion-neutral-600">
          Our AI is analyzing your preferences to create your personalized fashion profile...
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
        <div className="flex items-center mb-4">
          <Sparkles size={20} className="text-fashion-neutral-900 mr-2" />
          <h3 className="text-xl font-medium text-fashion-neutral-900">Your Fashion Personality</h3>
        </div>
        
        <div className="mb-6">
          <div className="text-lg font-medium text-fashion-neutral-900 mb-1">
            {data.stylePreferences.primaryStyle.charAt(0).toUpperCase() + data.stylePreferences.primaryStyle.slice(1)}
          </div>
          <p className="text-sm text-fashion-neutral-600">
            {styleDescriptions[data.stylePreferences.primaryStyle]}
          </p>
        </div>
        
        <div>
          <div className="text-sm font-medium text-fashion-neutral-800 mb-2">You also incorporate elements of:</div>
          <div className="flex flex-wrap gap-2">
            {data.stylePreferences.secondaryStyles.map((style) => (
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
          <div className="flex items-center mb-4">
            <Palette size={20} className="text-fashion-neutral-900 mr-2" />
            <h3 className="text-lg font-medium text-fashion-neutral-900">Color Profile</h3>
          </div>
          
          <div className="mb-4">
            <div className="text-sm text-fashion-neutral-600 mb-1">Skin Tone:</div>
            <div className="font-medium text-fashion-neutral-900">
              {data.colorAnalysis.skinTone.charAt(0).toUpperCase() + data.colorAnalysis.skinTone.slice(1)} with {data.colorAnalysis.undertone} undertones
            </div>
          </div>
          
          <div>
            <div className="text-sm text-fashion-neutral-600 mb-2">Your Best Colors:</div>
            <div className="grid grid-cols-4 gap-2">
              {data.colorAnalysis.recommendedColors.slice(0, 8).map((color, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-md border border-fashion-neutral-200"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
          <div className="flex items-center mb-4">
            <Ruler size={20} className="text-fashion-neutral-900 mr-2" />
            <h3 className="text-lg font-medium text-fashion-neutral-900">Size Profile</h3>
          </div>
          
          <div className="space-y-2">
            {Object.entries(data.sizeAnalysis.recommendedSizes).slice(0, 4).map(([category, size]) => (
              <div key={category} className="flex justify-between border-b border-fashion-neutral-200 pb-2">
                <span className="text-sm text-fashion-neutral-600">{category}</span>
                <span className="font-medium text-fashion-neutral-900">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
        <div className="flex items-center mb-4">
          <Heart size={20} className="text-fashion-neutral-900 mr-2" />
          <h3 className="text-lg font-medium text-fashion-neutral-900">Style Preferences</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Favorite Colors</h4>
            <div className="flex flex-wrap gap-2">
              {data.stylePreferences.favoriteColors.map((color) => (
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
              {data.stylePreferences.favoritePatterns.map((pattern) => (
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
              {data.stylePreferences.brandsLiked.slice(0, 6).map((brand) => (
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
      
      <div className="bg-fashion-primary-light p-6 rounded-lg">
        <div className="flex items-start">
          <Sparkles size={24} className="text-fashion-neutral-900 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-medium text-fashion-neutral-900 mb-2">What's Next?</h3>
            <p className="text-sm text-fashion-neutral-700">
              Your style profile is now complete! We'll use this information to provide you with personalized fashion recommendations, styling tips, and outfit ideas that match your unique preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyResults;
