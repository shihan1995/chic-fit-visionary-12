
import { RecommendedItem } from './RecommendedItems';

export const generateRecommendedItems = (gender: string): RecommendedItem[] => {
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
  
  filteredItems.sort((a, b) => b.match - a.match);
  
  return filteredItems.slice(0, 6);
};

export const styleDescriptions: Record<string, string> = {
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
