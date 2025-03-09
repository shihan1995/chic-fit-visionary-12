
// Style options based on gender
export const getStyleOptions = (gender: string) => {
  const commonStyles = [
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
      value: 'streetwear', 
      label: 'Streetwear', 
      description: 'Urban, casual, comfortable, logo-focused',
      imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300&h=400'
    },
  ];

  if (gender === 'male') {
    return [
      ...commonStyles,
      { 
        value: 'business', 
        label: 'Business', 
        description: 'Professional, tailored, refined menswear',
        imageUrl: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'casual', 
        label: 'Casual', 
        description: 'Comfortable, relaxed, everyday men\'s styles',
        imageUrl: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'preppy', 
        label: 'Preppy', 
        description: 'Tailored, clean-cut, collegiate-inspired',
        imageUrl: 'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'athleisure', 
        label: 'Athleisure', 
        description: 'Athletic-inspired, comfortable, functional',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'edgy', 
        label: 'Edgy', 
        description: 'Dark colors, leather, statement pieces, unconventional',
        imageUrl: 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&q=80&w=300&h=400'
      },
    ];
  } else if (gender === 'female') {
    return [
      ...commonStyles,
      { 
        value: 'bohemian', 
        label: 'Bohemian', 
        description: 'Flowy fabrics, patterns, earthy tones, layered looks',
        imageUrl: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'romantic', 
        label: 'Romantic', 
        description: 'Soft, feminine, floral patterns, delicate details',
        imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'preppy', 
        label: 'Preppy', 
        description: 'Tailored, clean-cut, collegiate-inspired',
        imageUrl: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'athleisure', 
        label: 'Athleisure', 
        description: 'Athletic-inspired, comfortable, functional',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'edgy', 
        label: 'Edgy', 
        description: 'Dark colors, leather, statement pieces, unconventional',
        imageUrl: 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&q=80&w=300&h=400'
      },
    ];
  } else {
    return [
      ...commonStyles,
      { 
        value: 'casual', 
        label: 'Casual', 
        description: 'Comfortable, relaxed, everyday styles',
        imageUrl: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'bohemian', 
        label: 'Bohemian', 
        description: 'Flowy fabrics, patterns, earthy tones, layered looks',
        imageUrl: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'preppy', 
        label: 'Preppy', 
        description: 'Tailored, clean-cut, collegiate-inspired',
        imageUrl: 'https://images.unsplash.com/photo-1620118989031-a1d3d5a2dc11?auto=format&fit=crop&q=80&w=300&h=400'
      },
      { 
        value: 'athleisure', 
        label: 'Athleisure', 
        description: 'Athletic-inspired, comfortable, functional',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300&h=400'
      },
    ];
  }
};

export const colorOptions = [
  { value: 'black', label: 'Black', color: '#000000' },
  { value: 'white', label: 'White', color: '#FFFFFF' },
  { value: 'beige', label: 'Beige', color: '#F5F5DC' },
  { value: 'navy', label: 'Navy', color: '#000080' },
  { value: 'burgundy', label: 'Burgundy', color: '#800020' },
  { value: 'olive', label: 'Olive', color: '#556B2F' },
  { value: 'pink', label: 'Pink', color: '#FFC0CB' },
  { value: 'red', label: 'Red', color: '#FF0000' },
];

// Get popular brands based on gender
export const getPopularBrands = (gender: string) => {
  const commonBrands = ['Zara', 'H&M', 'Uniqlo', 'Nike', 'Adidas'];
  
  if (gender === 'male') {
    return [...commonBrands, 'Levi\'s', 'Calvin Klein', 'Tommy Hilfiger', 'Patagonia', 'The North Face'];
  } else if (gender === 'female') {
    return [...commonBrands, 'Mango', 'Reformation', 'Everlane', 'Aritzia', 'COS'];
  } else {
    return [...commonBrands, 'Levi\'s', 'Calvin Klein', 'Patagonia', 'The North Face', 'Madewell'];
  }
};

// Style images mapping for profile visualization
export const styleImages: Record<string, string | Record<string, string>> = {
  'minimal': 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&q=80&w=300&h=400',
  'classic': 'https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&q=80&w=300&h=400',
  'bohemian': 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=300&h=400',
  'streetwear': 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300&h=400',
  'preppy': {
    'male': 'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?auto=format&fit=crop&q=80&w=300&h=400',
    'female': 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=300&h=400',
    'unisex': 'https://images.unsplash.com/photo-1620118989031-a1d3d5a2dc11?auto=format&fit=crop&q=80&w=300&h=400'
  },
  'romantic': 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=300&h=400',
  'edgy': 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&q=80&w=300&h=400',
  'athleisure': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300&h=400',
  'business': 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=300&h=400',
  'casual': 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=300&h=400'
};
