
import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { Palette, RefreshCw, Check } from 'lucide-react';

const ColorAnalysis = () => {
  const [selectedColor, setSelectedColor] = useState('#E5E2DB');
  
  const recommendedColors = [
    { hex: '#F8F7F4', name: 'Ivory' },
    { hex: '#E5E2DB', name: 'Stone' },
    { hex: '#D0CCC0', name: 'Taupe' },
    { hex: '#BAE6FD', name: 'Light Blue' },
    { hex: '#F0F9FF', name: 'Sky' },
    { hex: '#A39E8C', name: 'Sage' },
    { hex: '#FEF3C7', name: 'Cream' },
    { hex: '#D1FAE5', name: 'Mint' }
  ];
  
  const outfitSuggestions = [
    {
      title: 'Casual Elegance',
      items: ['Ivory Silk Blouse', 'Stone Tailored Trousers', 'Nude Leather Flats'],
      image: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=300&h=400'
    },
    {
      title: 'Weekend Comfort',
      items: ['Stone Cashmere Sweater', 'Light Blue Jeans', 'White Sneakers'],
      image: 'https://images.unsplash.com/photo-1602573991155-21f0143d2111?auto=format&fit=crop&q=80&w=300&h=400'
    }
  ];
  
  return (
    <section className="py-16 bg-fashion-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-fashion-primary-light text-fashion-neutral-800 text-xs font-medium mb-4">
              <Palette size={14} className="mr-1" />
              Color Harmony Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-fashion-neutral-900 mb-4">Your Perfect Color Palette</h2>
            <p className="text-fashion-neutral-600 text-lg max-w-2xl">
              Discover the colors that complement your skin tone and enhance your natural beauty.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 overflow-hidden animate-scale-in">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">Recommended Colors</h3>
                  
                  <div className="grid grid-cols-4 gap-3 mb-8">
                    {recommendedColors.map((color) => (
                      <button
                        key={color.hex}
                        className={`
                          aspect-square rounded-lg relative transition-all duration-300
                          ${selectedColor === color.hex ? 'ring-2 ring-fashion-neutral-900 scale-105' : 'hover:scale-105'}
                        `}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color.hex)}
                      >
                        {selectedColor === color.hex && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <Check size={18} className="text-fashion-neutral-900" />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <div className="bg-fashion-neutral-100 rounded-lg p-4 mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-fashion-neutral-900 font-medium text-sm">
                        {recommendedColors.find(c => c.hex === selectedColor)?.name || 'Selected Color'}
                      </h4>
                      <span className="text-fashion-neutral-600 text-xs">{selectedColor}</span>
                    </div>
                    <div
                      className="w-full h-20 rounded-md"
                      style={{ backgroundColor: selectedColor }}
                    ></div>
                    <div className="mt-3 flex justify-end">
                      <button className="text-fashion-neutral-600 hover:text-fashion-neutral-900 transition-colors text-xs flex items-center gap-1">
                        <RefreshCw size={12} />
                        Generate Similar
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">Outfit Suggestions</h3>
                  
                  <div className="space-y-4">
                    {outfitSuggestions.map((outfit, index) => (
                      <div key={index} className="bg-fashion-neutral-100 rounded-lg overflow-hidden flex hover-lift">
                        <div className="w-1/3">
                          <img 
                            src={outfit.image} 
                            alt={outfit.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <h4 className="text-fashion-neutral-900 font-medium text-sm mb-2">{outfit.title}</h4>
                          <ul className="space-y-1 mb-3">
                            {outfit.items.map((item, i) => (
                              <li key={i} className="text-fashion-neutral-600 text-xs flex items-center">
                                <span className="w-1 h-1 bg-fashion-neutral-400 rounded-full mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                          <div className="flex justify-end">
                            <AnimatedButton 
                              variant="secondary" 
                              size="sm"
                            >
                              View Details
                            </AnimatedButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <AnimatedButton 
                      variant="outline" 
                      size="md"
                      icon={<Palette size={16} />}
                    >
                      Get More Suggestions
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorAnalysis;
