
import React, { useEffect, useState } from 'react';
import { Sparkles, Palette, Ruler, Heart, ShoppingBag } from 'lucide-react';
import { styleImages } from './utils/styleOptions';

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

interface RecommendedItem {
  id: string;
  name: string;
  image: string;
  brand: string;
  price: string;
  match: number;
  category: string;
  gender: 'male' | 'female' | 'unisex';
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
    const gender = data.genderSelection.gender || 'unisex';
    
    const maleItems: RecommendedItem[] = [
      {
        id: 'm1',
        name: 'Slim Fit Oxford Shirt',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'J.Crew',
        price: '$79',
        match: 96,
        category: 'Tops',
        gender: 'male'
      },
      {
        id: 'm2',
        name: 'Selvedge Denim Jeans',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Levi\'s',
        price: '$98',
        match: 91,
        category: 'Bottoms',
        gender: 'male'
      },
      {
        id: 'm3',
        name: 'Merino Wool Sweater',
        image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Everlane',
        price: '$120',
        match: 89,
        category: 'Tops',
        gender: 'male'
      },
      {
        id: 'm4',
        name: 'Leather Chelsea Boots',
        image: 'https://images.unsplash.com/photo-1605812276723-c31bb12202a9?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Thursday Boots',
        price: '$199',
        match: 87,
        category: 'Footwear',
        gender: 'male'
      },
      {
        id: 'm5',
        name: 'Cotton Chino Pants',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Bonobos',
        price: '$88',
        match: 84,
        category: 'Bottoms',
        gender: 'male'
      },
      {
        id: 'm6',
        name: 'Structured Blazer',
        image: 'https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'SuitSupply',
        price: '$359',
        match: 82,
        category: 'Outerwear',
        gender: 'male'
      }
    ];

    const femaleItems: RecommendedItem[] = [
      {
        id: 'f1',
        name: 'Oversized Wool Blend Coat',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Eileen Fisher',
        price: '$248',
        match: 96,
        category: 'Outerwear',
        gender: 'female'
      },
      {
        id: 'f2',
        name: 'High-Rise Slim Jeans',
        image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Agolde',
        price: '$198',
        match: 91,
        category: 'Bottoms',
        gender: 'female'
      },
      {
        id: 'f3',
        name: 'Silk V-Neck Blouse',
        image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Vince',
        price: '$175',
        match: 89,
        category: 'Tops',
        gender: 'female'
      },
      {
        id: 'f4',
        name: 'Leather Ankle Boots',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Stuart Weitzman',
        price: '$299',
        match: 87,
        category: 'Footwear',
        gender: 'female'
      },
      {
        id: 'f5',
        name: 'Cashmere Sweater',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Reformation',
        price: '$148',
        match: 84,
        category: 'Tops',
        gender: 'female'
      },
      {
        id: 'f6',
        name: 'Leather Crossbody Bag',
        image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Madewell',
        price: '$148',
        match: 82,
        category: 'Accessories',
        gender: 'female'
      }
    ];

    const unisexItems: RecommendedItem[] = [
      {
        id: 'u1',
        name: 'Classic White T-Shirt',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Everlane',
        price: '$30',
        match: 94,
        category: 'Tops',
        gender: 'unisex'
      },
      {
        id: 'u2',
        name: 'Straight Leg Jeans',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Levi\'s',
        price: '$98',
        match: 92,
        category: 'Bottoms',
        gender: 'unisex'
      },
      {
        id: 'u3',
        name: 'Canvas Sneakers',
        image: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Converse',
        price: '$60',
        match: 88,
        category: 'Footwear',
        gender: 'unisex'
      },
      {
        id: 'u4',
        name: 'Denim Jacket',
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Gap',
        price: '$79',
        match: 86,
        category: 'Outerwear',
        gender: 'unisex'
      },
      {
        id: 'u5',
        name: 'Cotton Hoodie',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Champion',
        price: '$65',
        match: 84,
        category: 'Tops',
        gender: 'unisex'
      },
      {
        id: 'u6',
        name: 'Canvas Tote Bag',
        image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=300&h=400',
        brand: 'Baggu',
        price: '$38',
        match: 82,
        category: 'Accessories',
        gender: 'unisex'
      }
    ];

    let filteredItems: RecommendedItem[] = [];
    
    if (gender === 'male') {
      filteredItems = [...maleItems, ...unisexItems.slice(0, 2)];
    } else if (gender === 'female') {
      filteredItems = [...femaleItems, ...unisexItems.slice(0, 2)];
    } else {
      filteredItems = unisexItems;
    }
    
    // Sort by match score
    filteredItems.sort((a, b) => b.match - a.match);
    
    setRecommendedItems(filteredItems.slice(0, 6));
  };
  
  const styleDescriptions: Record<string, string> = {
    'minimal': 'Clean, understated, and focused on simplicity. Your wardrobe likely consists of versatile pieces in neutral colors.',
    'classic': 'Timeless and sophisticated. You prefer enduring styles over fleeting trends.',
    'bohemian': 'Free-spirited and artistic with a focus on natural fabrics, patterns, and layering.',
    'streetwear': 'Urban-inspired, comfortable, and trend-conscious with a focus on casual staples.',
    'preppy': 'Polished, collegiate, and traditional with a focus on clean lines and tailoring.',
    'romantic': 'Soft, feminine, and delicate with an emphasis on flowing silhouettes and details.',
    'edgy': 'Bold, unconventional, and statement-making with elements of rebellion.',
    'athleisure': 'Performance-focused, comfortable, and sporty, balancing function with style.',
    'business': 'Professional, refined and tailored with attention to detail and quality materials.',
    'casual': 'Relaxed, comfortable everyday wear that still maintains a stylish appearance.'
  };
  
  const getStyleImage = (style: string, gender: string) => {
    const styleImage = styleImages[style as keyof typeof styleImages];
    
    if (typeof styleImage === 'object' && styleImage !== null) {
      return styleImage[gender as keyof typeof styleImage] || styleImage['unisex'];
    }
    
    return styleImage || 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=300&h=400';
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
              src={getStyleImage(data.stylePreferences.primaryStyle, data.genderSelection.gender)} 
              alt={data.stylePreferences.primaryStyle + " style"} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=300&h=400';
              }}
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
          <span className="ml-2 text-xs bg-fashion-neutral-100 px-2 py-1 rounded-full text-fashion-neutral-700">
            {data.genderSelection.gender.charAt(0).toUpperCase() + data.genderSelection.gender.slice(1)} styles
          </span>
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
