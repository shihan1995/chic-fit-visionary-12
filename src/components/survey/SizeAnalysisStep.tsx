
import React, { useState, useEffect } from 'react';
import { Ruler } from 'lucide-react';

interface Measurements {
  bust: string;
  waist: string;
  hips: string;
}

interface SizeAnalysisData {
  height: string;
  weight: string;
  measurements: Measurements;
  recommendedSizes: Record<string, string>;
  completed: boolean;
}

interface SizeAnalysisStepProps {
  data: SizeAnalysisData;
  onUpdate: (data: Partial<SizeAnalysisData>) => void;
}

const SizeAnalysisStep = ({ data, onUpdate }: SizeAnalysisStepProps) => {
  const [height, setHeight] = useState(data.height || '');
  const [weight, setWeight] = useState(data.weight || '');
  const [measurements, setMeasurements] = useState<Measurements>(data.measurements || { bust: '', waist: '', hips: '' });
  const [isCalculating, setIsCalculating] = useState(false);
  
  const handleMeasurementChange = (key: keyof Measurements, value: string) => {
    const updatedMeasurements = { ...measurements, [key]: value };
    setMeasurements(updatedMeasurements);
    checkCompletion(height, weight, updatedMeasurements);
  };
  
  const checkCompletion = (h: string, w: string, m: Measurements) => {
    const isComplete = !!h && !!w && (!!m.bust || !!m.waist || !!m.hips);
    
    if (isComplete && !data.completed) {
      setIsCalculating(true);
      
      // Simulate AI size calculation
      setTimeout(() => {
        const recommendedSizes = {
          'Tops': 'Medium',
          'Bottoms': 'Small',
          'Dresses': 'Medium',
          'Outerwear': 'Medium',
          'Shirts': 'Medium (US 8)',
          'Pants': 'Small (US 6)',
          'Skirts': 'Small (US 6)',
        };
        
        onUpdate({ 
          height: h,
          weight: w,
          measurements: m,
          recommendedSizes,
          completed: true
        });
        
        setIsCalculating(false);
      }, 1500);
    } else if (!isComplete && data.completed) {
      onUpdate({ completed: false });
    }
  };
  
  useEffect(() => {
    if (Object.keys(data.recommendedSizes).length > 0) {
      // If we already have data, mark as complete
      onUpdate({ completed: true });
    }
  }, []);
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">Body Measurements</h3>
        <p className="text-sm text-fashion-neutral-600">
          Enter your measurements to get accurate size recommendations across different brands.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-fashion-neutral-700 mb-1">
                Height
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                    checkCompletion(e.target.value, weight, measurements);
                  }}
                  placeholder="Enter height"
                  className="w-full border border-fashion-neutral-300 rounded-md py-2 px-3 pr-12 text-fashion-neutral-900 focus:ring-1 focus:ring-fashion-neutral-900 focus:border-fashion-neutral-900"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-fashion-neutral-500 text-sm">cm</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-fashion-neutral-700 mb-1">
                Weight
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    checkCompletion(height, e.target.value, measurements);
                  }}
                  placeholder="Enter weight"
                  className="w-full border border-fashion-neutral-300 rounded-md py-2 px-3 pr-12 text-fashion-neutral-900 focus:ring-1 focus:ring-fashion-neutral-900 focus:border-fashion-neutral-900"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-fashion-neutral-500 text-sm">kg</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 border-l border-fashion-neutral-200 pl-6">
            <div>
              <label className="block text-sm font-medium text-fashion-neutral-700 mb-1">
                Bust/Chest
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={measurements.bust}
                  onChange={(e) => handleMeasurementChange('bust', e.target.value)}
                  placeholder="Enter measurement"
                  className="w-full border border-fashion-neutral-300 rounded-md py-2 px-3 pr-12 text-fashion-neutral-900 focus:ring-1 focus:ring-fashion-neutral-900 focus:border-fashion-neutral-900"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-fashion-neutral-500 text-sm">cm</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-fashion-neutral-700 mb-1">
                Waist
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={measurements.waist}
                  onChange={(e) => handleMeasurementChange('waist', e.target.value)}
                  placeholder="Enter measurement"
                  className="w-full border border-fashion-neutral-300 rounded-md py-2 px-3 pr-12 text-fashion-neutral-900 focus:ring-1 focus:ring-fashion-neutral-900 focus:border-fashion-neutral-900"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-fashion-neutral-500 text-sm">cm</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-fashion-neutral-700 mb-1">
                Hips
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={measurements.hips}
                  onChange={(e) => handleMeasurementChange('hips', e.target.value)}
                  placeholder="Enter measurement"
                  className="w-full border border-fashion-neutral-300 rounded-md py-2 px-3 pr-12 text-fashion-neutral-900 focus:ring-1 focus:ring-fashion-neutral-900 focus:border-fashion-neutral-900"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-fashion-neutral-500 text-sm">cm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isCalculating && (
        <div className="bg-fashion-primary-light p-4 rounded text-sm text-fashion-neutral-800 flex items-center justify-center">
          <div className="animate-spin mr-2 w-4 h-4 border-2 border-fashion-neutral-800 border-t-transparent rounded-full"></div>
          Calculating your recommended sizes...
        </div>
      )}
      
      {Object.keys(data.recommendedSizes).length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-fashion-neutral-900 flex items-center">
            <Ruler size={18} className="mr-2" />
            Your Recommended Sizes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(data.recommendedSizes).map(([category, size]) => (
              <div key={category} className="bg-fashion-neutral-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-fashion-neutral-700 text-sm">{category}</span>
                  <span className="text-fashion-neutral-900 font-medium">{size}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-fashion-primary-light rounded-lg">
            <p className="text-sm text-fashion-neutral-800">
              These recommendations are based on your measurements and our sizing database across popular brands. Actual fit may vary by brand and style.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeAnalysisStep;
