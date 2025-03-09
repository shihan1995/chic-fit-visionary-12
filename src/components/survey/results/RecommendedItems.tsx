
import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

export interface RecommendedItem {
  id: string;
  name: string;
  image: string;
  brand: string;
  price: string;
  match: number;
  category: string;
  gender: 'male' | 'female' | 'unisex';
}

interface RecommendedItemsProps {
  items: RecommendedItem[];
  gender: string;
}

const RecommendedItems = ({ items, gender }: RecommendedItemsProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-fashion-neutral-200">
      <div className="flex items-center mb-6">
        <ShoppingBag size={20} className="text-fashion-neutral-900 mr-2" />
        <h3 className="text-xl font-medium text-fashion-neutral-900">Your Recommended Pieces</h3>
        <span className="ml-2 text-xs bg-fashion-neutral-100 px-2 py-1 rounded-full text-fashion-neutral-700">
          {gender.charAt(0).toUpperCase() + gender.slice(1)} styles
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((item) => (
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
  );
};

export default RecommendedItems;
