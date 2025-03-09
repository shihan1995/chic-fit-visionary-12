
import React from 'react';
import { Ruler } from 'lucide-react';

interface SizeProfileProps {
  recommendedSizes: Record<string, string>;
}

const SizeProfile = ({ recommendedSizes }: SizeProfileProps) => {
  return (
    <div className="bg-fashion-neutral-50 p-6 rounded-lg border border-fashion-neutral-200">
      <div className="flex items-center mb-4">
        <Ruler size={20} className="text-fashion-neutral-900 mr-2" />
        <h3 className="text-lg font-medium text-fashion-neutral-900">Size Profile</h3>
      </div>
      
      <div className="space-y-2">
        {Object.entries(recommendedSizes).slice(0, 4).map(([category, size]) => (
          <div key={category} className="flex justify-between border-b border-fashion-neutral-200 pb-2">
            <span className="text-sm text-fashion-neutral-600">{category}</span>
            <span className="font-medium text-fashion-neutral-900">{size}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeProfile;
