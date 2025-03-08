import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, ArrowRight, ArrowLeft, Check, Upload } from 'lucide-react';
import SurveyHeader from './SurveyHeader';
import ColorAnalysisStep from './ColorAnalysisStep';
import SizeAnalysisStep from './SizeAnalysisStep';
import StylePreferencesStep from './StylePreferencesStep';
import SurveyResults from './SurveyResults';
import AnimatedButton from '../ui/AnimatedButton';
import { cn } from '@/lib/utils';

interface FashionSurveyProps {
  onComplete: () => void;
  onDismiss: () => void;
  className?: string;
}

const steps = [
  { id: 'colorAnalysis', title: 'Color Analysis', description: 'Let\'s analyze your skin tone and find your perfect colors' },
  { id: 'sizeAnalysis', title: 'Size Analysis', description: 'Help us find your perfect fit across different brands' },
  { id: 'stylePreferences', title: 'Style Preferences', description: 'Tell us about your personal style and preferences' },
  { id: 'results', title: 'Your Style Profile', description: 'See your personalized fashion recommendations' },
];

const FashionSurvey = ({ onComplete, onDismiss, className }: FashionSurveyProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyData, setSurveyData] = useState({
    colorAnalysis: {
      imageUrl: '',
      skinTone: '',
      undertone: '',
      recommendedColors: [] as string[],
      completed: false,
    },
    sizeAnalysis: {
      height: '',
      weight: '',
      measurements: {
        bust: '',
        waist: '',
        hips: '',
      },
      recommendedSizes: {} as Record<string, string>,
      completed: false,
    },
    stylePreferences: {
      primaryStyle: '',
      secondaryStyles: [] as string[],
      favoriteColors: [] as string[],
      favoritePatterns: [] as string[],
      favoriteAccessories: [] as string[],
      brandsLiked: [] as string[],
      completed: false,
    }
  });

  const updateSurveyData = (section: keyof typeof surveyData, data: any) => {
    setSurveyData(prev => ({ 
      ...prev, 
      [section]: { 
        ...prev[section], 
        ...data, 
        completed: true 
      } 
    }));
  };

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    // Save survey data to localStorage for persistence
    localStorage.setItem('fashionSurveyData', JSON.stringify(surveyData));
    onComplete();
  };

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  
  // Update how we check if a step is completed
  const isStepCompleted = () => {
    if (currentStep === 3) return true; // Results step is always considered complete
    
    const stepKey = steps[currentStep].id as keyof typeof surveyData;
    return surveyData[stepKey]?.completed || false;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const [slideDirection, setSlideDirection] = useState(1);

  const changeStep = (newStep: number) => {
    setSlideDirection(newStep > currentStep ? 1 : -1);
    setCurrentStep(newStep);
  };

  return (
    <div className={cn("bg-white rounded-xl shadow-lg border border-fashion-neutral-200 overflow-hidden flex flex-col", className)}>
      <SurveyHeader steps={steps} currentStep={currentStep} onStepClick={changeStep} />
      
      <div className="relative flex-grow overflow-y-auto" style={{ maxHeight: '70vh' }}>
        <AnimatePresence initial={false} custom={slideDirection} mode="wait">
          <motion.div
            key={currentStep}
            custom={slideDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full h-full"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-fashion-neutral-900 mb-1">{currentStepData.title}</h2>
              <p className="text-fashion-neutral-600 mb-6">{currentStepData.description}</p>
              
              {currentStep === 0 && (
                <ColorAnalysisStep 
                  data={surveyData.colorAnalysis}
                  onUpdate={(data) => updateSurveyData('colorAnalysis', data)}
                />
              )}
              
              {currentStep === 1 && (
                <SizeAnalysisStep 
                  data={surveyData.sizeAnalysis}
                  onUpdate={(data) => updateSurveyData('sizeAnalysis', data)}
                />
              )}
              
              {currentStep === 2 && (
                <StylePreferencesStep 
                  data={surveyData.stylePreferences}
                  onUpdate={(data) => updateSurveyData('stylePreferences', data)}
                />
              )}
              
              {currentStep === 3 && (
                <SurveyResults 
                  data={surveyData}
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="p-6 border-t border-fashion-neutral-200 bg-fashion-neutral-50 flex justify-between">
        <AnimatedButton
          variant="secondary"
          icon={<ArrowLeft size={16} />}
          iconPosition="left"
          onClick={currentStep === 0 ? onDismiss : goToPrevStep}
        >
          {currentStep === 0 ? 'Cancel' : 'Back'}
        </AnimatedButton>
        
        <AnimatedButton
          variant="primary"
          icon={isLastStep ? <Check size={16} /> : <ArrowRight size={16} />}
          onClick={goToNextStep}
          disabled={!isStepCompleted()}
        >
          {isLastStep ? 'Complete' : 'Continue'}
        </AnimatedButton>
      </div>
    </div>
  );
};

export default FashionSurvey;
