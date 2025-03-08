
import React, { useEffect, useState } from 'react';
import { Sparkles, Palette, Ruler, Heart, ShoppingBag } from 'lucide-react';

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

interface RecommendedItem {
  id: string;
  name: string;
  image: string;
  brand: string;
  price: string;
  match: number;
  category: string;
}

const SurveyResults = ({ data }: SurveyResultsProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recommendedItems, setRecommendedItems] = useState<RecommendedItem[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      generateRecommendedItems();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const generateRecommendedItems = () => {
    const mockItems: RecommendedItem[] = [
      {
        id: '1',
        name: 'Oversized Wool Blend Coat',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Eileen Fisher',
        price: '$248',
        match: 96,
        category: 'Outerwear'
      },
      {
        id: '2',
        name: 'Slim Fit Stretch Jeans',
        image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Levi\'s',
        price: '$89',
        match: 91,
        category: 'Bottoms'
      },
      {
        id: '3',
        name: 'Silk V-Neck Blouse',
        image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Vince',
        price: '$175',
        match: 89,
        category: 'Tops'
      },
      {
        id: '4',
        name: 'Leather Chelsea Boots',
        image: 'https://images.unsplash.com/photo-1605812276723-c31bb12202a9?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Clarks',
        price: '$150',
        match: 87,
        category: 'Footwear'
      },
      {
        id: '5',
        name: 'Cashmere Sweater',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Everlane',
        price: '$130',
        match: 84,
        category: 'Tops'
      },
      {
        id: '6',
        name: 'Leather Crossbody Bag',
        image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Madewell',
        price: '$148',
        match: 82,
        category: 'Accessories'
      }
    ];
    
    setRecommendedItems(mockItems);
  };
  
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
  
  const styleImages: Record<string, string> = {
    'minimal': 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&q=80&w=300&h=400',
    'classic': 'https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&q=80&w=300&h=400',
    'bohemian': 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=300&h=400',
    'streetwear': 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300&h=400',
    'preppy': 'https://images.unsplash.com/photo-1589992896544-8389e29a1c0f?auto=format&fit=crop&q=80&w=300&h=400',
    'romantic': 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=300&h=400',
    'edgy': 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&q=80&w=300&h=400',
    'athleisure': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300&h=400'
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
        
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-grow">
            <div className="text-lg font-medium text-fashion-neutral-900 mb-1">
              {data.stylePreferences.primaryStyle.charAt(0).toUpperCase() + data.stylePreferences.primaryStyle.slice(1)}
            </div>
            <p className="text-sm text-fashion-neutral-600">
              {styleDescriptions[data.stylePreferences.primaryStyle]}
            </p>
          </div>
          <div className="w-full md:w-48 h-64 rounded-lg overflow-hidden border border-fashion-neutral-200">
            <img 
              src={styleImages[data.stylePreferences.primaryStyle]} 
              alt={data.stylePreferences.primaryStyle + " style"} 
              className="w-full h-full object-cover"
            />
          </div>
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
      
      <div className="bg-white p-6 rounded-lg border border-fashion-neutral-200">
        <div className="flex items-center mb-6">
          <ShoppingBag size={20} className="text-fashion-neutral-900 mr-2" />
          <h3 className="text-xl font-medium text-fashion-neutral-900">Your Recommended Pieces</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {recommendedItems.map((item) => (
            <div key={item.id} className="border border-fashion-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold flex items-center shadow-sm">
                  <Heart size={12} className="text-red-500 mr-1" fill="red" />
                  {item.match}% Match
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-fashion-neutral-600 mb-1">{item.brand}</div>
                <h4 className="font-medium text-fashion-neutral-900 mb-1">{item.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-fashion-neutral-900 font-semibold">{item.price}</span>
                  <span className="text-xs px-2 py-1 bg-fashion-neutral-100 rounded-full">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
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
