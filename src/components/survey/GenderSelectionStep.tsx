
import React from 'react';
import { User, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GenderSelectionStepProps {
  data: {
    gender: string;
  };
  onUpdate: (data: { gender: string }) => void;
}

const GenderSelectionStep = ({ data, onUpdate }: GenderSelectionStepProps) => {
  const handleGenderSelect = (gender: string) => {
    onUpdate({ gender });
  };

  return (
    <div className="space-y-6">
      <p className="text-fashion-neutral-600">
        To provide you with the most accurate style recommendations, we'd like to know which clothing styles you prefer.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          className={cn(
            "border rounded-lg p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:shadow-md",
            data.gender === 'male' 
              ? "border-fashion-neutral-900 bg-fashion-neutral-50" 
              : "border-fashion-neutral-200"
          )}
          onClick={() => handleGenderSelect('male')}
        >
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center",
            data.gender === 'male' 
              ? "bg-fashion-neutral-900 text-white" 
              : "bg-fashion-neutral-100 text-fashion-neutral-500"
          )}>
            <User size={32} />
          </div>
          <h3 className="text-lg font-medium text-fashion-neutral-900">Men's Styles</h3>
          <p className="text-sm text-fashion-neutral-600 text-center">
            Masculine clothing and accessories
          </p>
        </div>
        
        <div 
          className={cn(
            "border rounded-lg p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:shadow-md",
            data.gender === 'female' 
              ? "border-fashion-neutral-900 bg-fashion-neutral-50" 
              : "border-fashion-neutral-200"
          )}
          onClick={() => handleGenderSelect('female')}
        >
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center",
            data.gender === 'female' 
              ? "bg-fashion-neutral-900 text-white" 
              : "bg-fashion-neutral-100 text-fashion-neutral-500"
          )}>
            <User size={32} />
          </div>
          <h3 className="text-lg font-medium text-fashion-neutral-900">Women's Styles</h3>
          <p className="text-sm text-fashion-neutral-600 text-center">
            Feminine clothing and accessories
          </p>
        </div>
        
        <div 
          className={cn(
            "border rounded-lg p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:shadow-md",
            data.gender === 'unisex' 
              ? "border-fashion-neutral-900 bg-fashion-neutral-50" 
              : "border-fashion-neutral-200"
          )}
          onClick={() => handleGenderSelect('unisex')}
        >
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center",
            data.gender === 'unisex' 
              ? "bg-fashion-neutral-900 text-white" 
              : "bg-fashion-neutral-100 text-fashion-neutral-500"
          )}>
            <Users size={32} />
          </div>
          <h3 className="text-lg font-medium text-fashion-neutral-900">Gender-Neutral</h3>
          <p className="text-sm text-fashion-neutral-600 text-center">
            Non-binary and unisex clothing options
          </p>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-fashion-neutral-50 rounded-lg border border-fashion-neutral-200">
        <p className="text-sm text-fashion-neutral-600">
          We use this information to personalize your style recommendations. You can always change this later in your profile settings.
        </p>
      </div>
    </div>
  );
};

export default GenderSelectionStep;
