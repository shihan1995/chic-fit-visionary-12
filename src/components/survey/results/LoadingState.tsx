
import React from 'react';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-16 h-16 border-4 border-fashion-neutral-200 border-t-fashion-neutral-900 rounded-full animate-spin mb-4"></div>
      <h3 className="text-lg font-medium text-fashion-neutral-900 mb-2">Creating Your Style Profile</h3>
      <p className="text-sm text-fashion-neutral-600">
        Our AI is analyzing your preferences to create your personalized fashion profile...
      </p>
    </div>
  );
};

export default LoadingState;
