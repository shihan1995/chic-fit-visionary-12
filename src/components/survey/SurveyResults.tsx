
import React, { useEffect, useState } from 'react';
import { styleImages } from './utils/styleOptions';
import LoadingState from './results/LoadingState';
import FashionPersonality from './results/FashionPersonality';
import ColorProfile from './results/ColorProfile';
import SizeProfile from './results/SizeProfile';
import StylePreferences from './results/StylePreferences';
import RecommendedItems, { RecommendedItem } from './results/RecommendedItems';
import NextStepsCard from './results/NextStepsCard';
import { generateRecommendedItems, styleDescriptions } from './results/mockData';

interface SurveyResultsProps {
  data: {
    genderSelection: {
      gender: string;
    };
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
  const [recommendedItems, setRecommendedItems] = useState<RecommendedItem[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      const items = generateRecommendedItems(data.genderSelection.gender || 'unisex');
      setRecommendedItems(items);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [data.genderSelection.gender]);
  
  if (isLoading) {
    return <LoadingState />;
  }
  
  return (
    <div className="space-y-8">
      <FashionPersonality 
        primaryStyle={data.stylePreferences.primaryStyle}
        secondaryStyles={data.stylePreferences.secondaryStyles}
        gender={data.genderSelection.gender}
        styleDescriptions={styleDescriptions}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ColorProfile 
          skinTone={data.colorAnalysis.skinTone}
          undertone={data.colorAnalysis.undertone}
          recommendedColors={data.colorAnalysis.recommendedColors}
        />
        
        <SizeProfile 
          recommendedSizes={data.sizeAnalysis.recommendedSizes}
        />
      </div>
      
      <StylePreferences 
        favoriteColors={data.stylePreferences.favoriteColors}
        favoritePatterns={data.stylePreferences.favoritePatterns}
        brandsLiked={data.stylePreferences.brandsLiked}
      />
      
      <RecommendedItems 
        items={recommendedItems}
        gender={data.genderSelection.gender}
      />
      
      <NextStepsCard />
    </div>
  );
};

export default SurveyResults;
