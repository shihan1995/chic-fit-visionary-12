
import React, { useState } from 'react';
import { Filter, ShoppingBag, Clock, Sparkles, Heart, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface RecommendedItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  match: number;
  category: string;
  gender: 'male' | 'female' | 'unisex';
  style: string;
  color: string;
  occasion: string;
  isNew: boolean;
}

const RecommendedStyles = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female' | 'unisex'>('all');
  
  const recommendedItems: RecommendedItem[] = [
    {
      id: '1',
      name: 'Oversized Wool Blend Coat',
      brand: 'Eileen Fisher',
      price: '$248',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=300&h=400',
      match: 96,
      category: 'Outerwear',
      gender: 'female',
      style: 'minimal',
      color: 'neutral',
      occasion: 'casual',
      isNew: true
    },
    {
      id: '2',
      name: 'Slim Fit Stretch Jeans',
      brand: 'Levi\'s',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=300&h=400',
      match: 91,
      category: 'Bottoms',
      gender: 'male',
      style: 'classic',
      color: 'blue',
      occasion: 'casual',
      isNew: false
    },
    {
      id: '3',
      name: 'Silk V-Neck Blouse',
      brand: 'Vince',
      price: '$175',
      image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=300&h=400',
      match: 89,
      category: 'Tops',
      gender: 'female',
      style: 'romantic',
      color: 'neutral',
      occasion: 'workwear',
      isNew: true
    },
    {
      id: '4',
      name: 'Leather Chelsea Boots',
      brand: 'Clarks',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1605812276723-c31bb12202a9?auto=format&fit=crop&q=80&w=300&h=400',
      match: 87,
      category: 'Footwear',
      gender: 'unisex',
      style: 'classic',
      color: 'black',
      occasion: 'casual',
      isNew: false
    },
    {
      id: '5',
      name: 'Cashmere Sweater',
      brand: 'Everlane',
      price: '$130',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=300&h=400',
      match: 84,
      category: 'Tops',
      gender: 'unisex',
      style: 'minimal',
      color: 'neutral',
      occasion: 'casual',
      isNew: false
    },
    {
      id: '6',
      name: 'Leather Crossbody Bag',
      brand: 'Madewell',
      price: '$148',
      image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=300&h=400',
      match: 82,
      category: 'Accessories',
      gender: 'female',
      style: 'classic',
      color: 'black',
      occasion: 'casual',
      isNew: true
    },
    {
      id: '7',
      name: 'Merino Wool Shirt',
      brand: 'Uniqlo',
      price: '$59',
      image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&q=80&w=300&h=400',
      match: 80,
      category: 'Tops',
      gender: 'male',
      style: 'minimal',
      color: 'blue',
      occasion: 'workwear',
      isNew: false
    },
    {
      id: '8',
      name: 'Canvas Sneakers',
      brand: 'Converse',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300&h=400',
      match: 78,
      category: 'Footwear',
      gender: 'unisex',
      style: 'streetwear',
      color: 'white',
      occasion: 'casual',
      isNew: false
    },
    {
      id: '9',
      name: 'Denim Jacket',
      brand: 'Zara',
      price: '$79',
      image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=300&h=400',
      match: 76,
      category: 'Outerwear',
      gender: 'unisex',
      style: 'streetwear',
      color: 'blue',
      occasion: 'casual',
      isNew: true
    }
  ];
  
  const outfits = [
    {
      id: 'outfit1',
      title: 'Modern Business Casual',
      items: [recommendedItems[2], recommendedItems[1], recommendedItems[3]],
      occasion: 'Workwear',
      match: 94
    },
    {
      id: 'outfit2',
      title: 'Weekend Relaxed',
      items: [recommendedItems[6], recommendedItems[1], recommendedItems[7]],
      occasion: 'Casual',
      match: 88
    },
    {
      id: 'outfit3',
      title: 'Evening Out',
      items: [recommendedItems[0], recommendedItems[2], recommendedItems[5]],
      occasion: 'Evening',
      match: 91
    }
  ];
  
  const filterOptions = [
    { id: 'tops', label: 'Tops', category: 'category' },
    { id: 'bottoms', label: 'Bottoms', category: 'category' },
    { id: 'outerwear', label: 'Outerwear', category: 'category' },
    { id: 'accessories', label: 'Accessories', category: 'category' },
    { id: 'footwear', label: 'Footwear', category: 'category' },
    { id: 'casual', label: 'Casual', category: 'occasion' },
    { id: 'workwear', label: 'Work', category: 'occasion' },
    { id: 'evening', label: 'Evening', category: 'occasion' },
    { id: 'minimal', label: 'Minimal', category: 'style' },
    { id: 'classic', label: 'Classic', category: 'style' },
    { id: 'streetwear', label: 'Streetwear', category: 'style' },
    { id: 'romantic', label: 'Romantic', category: 'style' }
  ];
  
  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
    setSearchQuery('');
  };
  
  const filteredItems = recommendedItems.filter(item => {
    // Filter by gender
    if (selectedGender !== 'all' && item.gender !== selectedGender && item.gender !== 'unisex') {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && 
        !item.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by active filters
    if (activeFilters.length > 0) {
      const categoryFilters = activeFilters.filter(f => 
        filterOptions.find(fo => fo.id === f)?.category === 'category'
      );
      
      const occasionFilters = activeFilters.filter(f => 
        filterOptions.find(fo => fo.id === f)?.category === 'occasion'
      );
      
      const styleFilters = activeFilters.filter(f => 
        filterOptions.find(fo => fo.id === f)?.category === 'style'
      );
      
      if (categoryFilters.length > 0 && 
          !categoryFilters.some(f => item.category.toLowerCase() === f)) {
        return false;
      }
      
      if (occasionFilters.length > 0 && 
          !occasionFilters.some(f => item.occasion === f)) {
        return false;
      }
      
      if (styleFilters.length > 0 && 
          !styleFilters.some(f => item.style === f)) {
        return false;
      }
    }
    
    return true;
  });
  
  const newItems = recommendedItems.filter(item => item.isNew);
  const topRatedItems = [...recommendedItems].sort((a, b) => b.match - a.match).slice(0, 4);
  
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-fashion-neutral-900 mb-4">
          Personalized Recommendations
        </h2>
        <p className="text-lg text-fashion-neutral-600 max-w-2xl mx-auto">
          Discover styles curated specifically for you based on your preferences
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-fashion-neutral-900 flex items-center">
                <Filter size={18} className="mr-2" />
                Filters
              </h3>
              {activeFilters.length > 0 && (
                <button 
                  className="text-sm text-fashion-neutral-600 hover:text-fashion-neutral-900"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              )}
            </div>
            
            <div className="mb-4">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-fashion-neutral-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-fashion-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-fashion-neutral-500 focus:border-fashion-neutral-500 text-sm"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button onClick={() => setSearchQuery('')}>
                      <X size={16} className="text-fashion-neutral-400 hover:text-fashion-neutral-600" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Gender Preference</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    selectedGender === 'all' ? "bg-fashion-neutral-900 text-white" : "bg-fashion-neutral-100"
                  )}
                  onClick={() => setSelectedGender('all')}
                >
                  All
                </button>
                <button
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    selectedGender === 'female' ? "bg-fashion-neutral-900 text-white" : "bg-fashion-neutral-100"
                  )}
                  onClick={() => setSelectedGender('female')}
                >
                  Women
                </button>
                <button
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    selectedGender === 'male' ? "bg-fashion-neutral-900 text-white" : "bg-fashion-neutral-100"
                  )}
                  onClick={() => setSelectedGender('male')}
                >
                  Men
                </button>
                <button
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition-colors",
                    selectedGender === 'unisex' ? "bg-fashion-neutral-900 text-white" : "bg-fashion-neutral-100"
                  )}
                  onClick={() => setSelectedGender('unisex')}
                >
                  Unisex
                </button>
              </div>
            </div>
            
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions
                    .filter(filter => filter.category === 'category')
                    .map(filter => (
                      <button
                        key={filter.id}
                        className={cn(
                          "px-3 py-1 text-sm rounded-full transition-colors",
                          activeFilters.includes(filter.id) 
                            ? "bg-fashion-neutral-900 text-white" 
                            : "bg-fashion-neutral-100 hover:bg-fashion-neutral-200"
                        )}
                        onClick={() => toggleFilter(filter.id)}
                      >
                        {filter.label}
                      </button>
                    ))
                  }
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Occasion</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions
                    .filter(filter => filter.category === 'occasion')
                    .map(filter => (
                      <button
                        key={filter.id}
                        className={cn(
                          "px-3 py-1 text-sm rounded-full transition-colors",
                          activeFilters.includes(filter.id) 
                            ? "bg-fashion-neutral-900 text-white" 
                            : "bg-fashion-neutral-100 hover:bg-fashion-neutral-200"
                        )}
                        onClick={() => toggleFilter(filter.id)}
                      >
                        {filter.label}
                      </button>
                    ))
                  }
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-fashion-neutral-800 mb-2">Style</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions
                    .filter(filter => filter.category === 'style')
                    .map(filter => (
                      <button
                        key={filter.id}
                        className={cn(
                          "px-3 py-1 text-sm rounded-full transition-colors",
                          activeFilters.includes(filter.id) 
                            ? "bg-fashion-neutral-900 text-white" 
                            : "bg-fashion-neutral-100 hover:bg-fashion-neutral-200"
                        )}
                        onClick={() => toggleFilter(filter.id)}
                      >
                        {filter.label}
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content - Recommendations */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="recommended" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="recommended" className="flex items-center justify-center">
                <ShoppingBag size={16} className="mr-2" />
                All Items
              </TabsTrigger>
              <TabsTrigger value="outfits" className="flex items-center justify-center">
                <Sparkles size={16} className="mr-2" />
                Complete Outfits
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center justify-center">
                <Clock size={16} className="mr-2" />
                New Arrivals
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="recommended" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-fashion-neutral-900">
                    {activeFilters.length > 0 || searchQuery
                      ? 'Filtered Items' 
                      : 'Recommended For You'}
                  </h3>
                  <p className="text-sm text-fashion-neutral-600">
                    {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
                  </p>
                </div>
                
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="border border-fashion-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                      >
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
                          {item.isNew && (
                            <div className="absolute top-2 left-2 bg-fashion-neutral-900 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                              New
                            </div>
                          )}
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
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-fashion-neutral-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Search size={24} className="text-fashion-neutral-400" />
                    </div>
                    <h3 className="text-lg font-medium text-fashion-neutral-900 mb-2">No items found</h3>
                    <p className="text-fashion-neutral-600 mb-4">
                      Try adjusting your filters or search criteria
                    </p>
                    <AnimatedButton 
                      variant="secondary" 
                      size="sm"
                      onClick={clearFilters}
                    >
                      Clear All Filters
                    </AnimatedButton>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="outfits" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 p-6">
                <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">
                  Complete Outfit Inspiration
                </h3>
                
                <div className="space-y-8">
                  {outfits.map((outfit) => (
                    <div key={outfit.id} className="border border-fashion-neutral-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-medium text-fashion-neutral-900">{outfit.title}</h4>
                          <p className="text-sm text-fashion-neutral-600">For: {outfit.occasion}</p>
                        </div>
                        <div className="bg-white shadow-sm px-2 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Heart size={14} className="text-red-500 mr-1" fill="red" />
                          {outfit.match}% Match
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {outfit.items.map((item) => (
                          <div 
                            key={item.id} 
                            className="border border-fashion-neutral-200 rounded-lg overflow-hidden"
                          >
                            <div className="aspect-[3/4]">
                              <img 
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-2">
                              <p className="text-xs font-medium truncate">{item.name}</p>
                              <p className="text-xs text-fashion-neutral-600 truncate">{item.brand}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <AnimatedButton 
                          variant="secondary" 
                          size="sm"
                        >
                          View Details
                        </AnimatedButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 p-6">
                <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">
                  New Arrivals For You
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {newItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="border border-fashion-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
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
                        <div className="absolute top-2 left-2 bg-fashion-neutral-900 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                          New
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
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-4">
                    Top Rated For You
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {topRatedItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="border border-fashion-neutral-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300"
                      >
                        <div className="aspect-square relative">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold flex items-center shadow-sm">
                            <Heart size={12} className="text-red-500 mr-1" fill="red" />
                            {item.match}%
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium text-sm text-fashion-neutral-900 truncate">{item.name}</h4>
                          <p className="text-xs text-fashion-neutral-600">{item.brand}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RecommendedStyles;
