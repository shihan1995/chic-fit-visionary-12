
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  title: string;
  description: string;
}

interface SurveyHeaderProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const SurveyHeader = ({ steps, currentStep, onStepClick }: SurveyHeaderProps) => {
  return (
    <div className="bg-fashion-neutral-50 border-b border-fashion-neutral-200 px-6 py-4">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step indicator */}
            <button
              onClick={() => index <= currentStep && onStepClick(index)}
              className={cn(
                "flex flex-col items-center relative",
                index > currentStep ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              )}
              disabled={index > currentStep}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1",
                index < currentStep 
                  ? "bg-fashion-neutral-900 text-white" 
                  : index === currentStep 
                    ? "bg-fashion-primary-light border border-fashion-neutral-300 text-fashion-neutral-900" 
                    : "bg-fashion-neutral-200 text-fashion-neutral-500"
              )}>
                {index < currentStep ? <Check size={16} /> : index + 1}
              </div>
              <span className={cn(
                "text-xs font-medium hidden md:block",
                index <= currentStep ? "text-fashion-neutral-900" : "text-fashion-neutral-500"
              )}>
                {step.title}
              </span>
            </button>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2 h-[2px] mt-4">
                <div className={cn(
                  "h-full",
                  index < currentStep 
                    ? "bg-fashion-neutral-900" 
                    : "bg-fashion-neutral-200"
                )}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SurveyHeader;
