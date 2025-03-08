
import React from 'react';
import AnimatedButton from './AnimatedButton';
import { Sparkles, Paintbrush, Heart } from 'lucide-react';

const StyleProfile = () => {
  const styles = [
    { name: 'Minimalist', score: 85 },
    { name: 'Classic', score: 62 },
    { name: 'Bohemian', score: 34 },
    { name: 'Streetwear', score: 28 },
    { name: 'Athleisure', score: 76 }
  ];

  const recentItems = [
    {
      name: 'Oversized Wool Coat',
      match: 94,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=300&h=400'
    },
    {
      name: 'Silk Blouse',
      match: 87,
      image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=300&h=400'
    },
    {
      name: 'Slim Fit Jeans',
      match: 82,
      image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=300&h=400'
    }
  ];

  return (
    <section className="py-16 bg-fashion-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-fashion-primary-light text-fashion-neutral-800 text-xs font-medium mb-4">
              <Sparkles size={14} className="mr-1" />
              AI-Powered Style Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-fashion-neutral-900 mb-4">Your Personal Style Profile</h2>
            <p className="text-fashion-neutral-600 text-lg max-w-2xl">
              Based on your preferences and past selections, we've analyzed your unique style profile.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 overflow-hidden animate-scale-in">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">Style Affinity</h3>
              
              <div className="space-y-5 mb-8">
                {styles.map((style) => (
                  <div key={style.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-fashion-neutral-800">{style.name}</span>
                      <span className="text-fashion-neutral-600">{style.score}%</span>
                    </div>
                    <div className="h-2 w-full bg-fashion-neutral-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-fashion-neutral-900 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${style.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">Recent Style Matches</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentItems.map((item, index) => (
                  <div key={index} className="border border-fashion-neutral-200 rounded-lg overflow-hidden hover-lift">
                    <div className="relative aspect-[3/4] bg-fashion-neutral-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white shadow-sm px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Heart size={12} className="text-red-500 mr-1" />
                        {item.match}% Match
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-fashion-neutral-900 font-medium text-sm">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <AnimatedButton 
                  variant="primary" 
                  icon={<Paintbrush size={18} />}
                >
                  Refine Your Style
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleProfile;
