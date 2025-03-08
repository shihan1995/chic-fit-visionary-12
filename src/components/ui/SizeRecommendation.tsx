
import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { Ruler, RotateCcw, Zap } from 'lucide-react';

const SizeRecommendation = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [sliderValue, setSliderValue] = useState(50);
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const fitPreferences = ['Slim', 'Regular', 'Relaxed'];
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-fashion-primary-light text-fashion-neutral-800 text-xs font-medium mb-4">
              <Ruler size={14} className="mr-1" />
              Smart Sizing Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-fashion-neutral-900 mb-4">Perfect Size Every Time</h2>
            <p className="text-fashion-neutral-600 text-lg max-w-2xl">
              Our AI analyzes your body measurements and brand-specific sizing to recommend your ideal fit.
            </p>
          </div>

          <div className="bg-fashion-neutral-100 rounded-xl shadow-sm border border-fashion-neutral-200 overflow-hidden animate-scale-in">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">Size Recommendation</h3>
                  
                  <div className="bg-white p-5 rounded-lg border border-fashion-neutral-200 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-fashion-neutral-600 text-sm">Based on your measurements</span>
                      <button className="text-fashion-neutral-600 hover:text-fashion-neutral-900 transition-colors text-sm flex items-center gap-1">
                        <RotateCcw size={14} />
                        Update
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-5 py-6">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          className={`
                            w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm 
                            transition-all duration-300
                            ${selectedSize === size 
                              ? 'bg-fashion-neutral-900 text-white shadow-md' 
                              : 'bg-fashion-neutral-100 text-fashion-neutral-600 hover:bg-fashion-neutral-200'}
                          `}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-fashion-success text-green-800 rounded p-3 flex items-center">
                      <Zap size={16} className="mr-2" />
                      <span className="text-sm font-medium">
                        We recommend size <strong>{selectedSize}</strong> for your body type
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-4">Fit Preference</h3>
                  <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                      {fitPreferences.map((fit, index) => (
                        <span key={index} className="text-fashion-neutral-600">{fit}</span>
                      ))}
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-fashion-neutral-200 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3C3A36 0%, #3C3A36 ${sliderValue}%, #E5E2DB ${sliderValue}%, #E5E2DB 100%)`
                      }}
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-6">Size Comparison</h3>
                  
                  <div className="bg-white rounded-lg border border-fashion-neutral-200 overflow-hidden">
                    <div className="aspect-[3/4] bg-fashion-neutral-100 flex items-center justify-center">
                      <div className="text-fashion-neutral-500 text-sm">
                        Virtual fit visualization
                      </div>
                    </div>
                    <div className="p-4 border-t border-fashion-neutral-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-fashion-neutral-900 font-medium text-sm">Size Visualization</h4>
                          <p className="text-fashion-neutral-600 text-xs">See how the selected size fits your body type</p>
                        </div>
                        <AnimatedButton 
                          variant="secondary" 
                          size="sm"
                        >
                          View Details
                        </AnimatedButton>
                      </div>
                    </div>
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

export default SizeRecommendation;
