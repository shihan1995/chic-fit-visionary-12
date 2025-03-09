
import React from 'react';
import { Palette } from 'lucide-react';

interface ColorProfileProps {
  skinTone: string;
  undertone: string;
  recommendedColors: string[];
}

const ColorProfile = ({ skinTone, undertone, recommendedColors }: ColorProfileProps) => {
  return (
    <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
      <div className="flex items-center mb-4">
        <Palette size={20} className="text-fashion-neutral-900 mr-2" />
        <h3 className="text-lg font-medium text-fashion-neutral-900">Color Profile</h3>
      </div>
      
      <div className="mb-4">
        <div className="text-sm text-fashion-neutral-600 mb-1">Skin Tone:</div>
        <div className="font-medium text-fashion-neutral-900">
          {skinTone.charAt(0).toUpperCase() + skinTone.slice(1)} with {undertone} undertones
        </div>
      </div>
      
      <div>
        <div className="text-sm text-fashion-neutral-600 mb-2">Your Best Colors:</div>
        <div className="grid grid-cols-4 gap-2">
          {recommendedColors.slice(0, 8).map((color, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-md border border-fashion-neutral-200"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorProfile;
