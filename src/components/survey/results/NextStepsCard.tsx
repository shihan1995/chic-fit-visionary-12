
import React from 'react';
import { Sparkles } from 'lucide-react';

const NextStepsCard = () => {
  return (
    <div className="bg-fashion-primary-light p-6 rounded-lg">
      <div className="flex items-start">
        <Sparkles size={24} className="text-fashion-neutral-900 mr-3 mt-1" />
        <div>
          <h3 className="text-lg font-medium text-fashion-neutral-900 mb-2">What's Next?</h3>
          <p className="text-sm text-fashion-neutral-700">
            Your style profile is now complete! We'll use this information to provide you with personalized fashion recommendations, styling tips, and outfit ideas that match your unique preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextStepsCard;
