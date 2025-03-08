
import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import StylePreferencesStep from './StylePreferencesStep';
import ColorAnalysisStep from './ColorAnalysisStep';
import SizeAnalysisStep from './SizeAnalysisStep';
import SurveyResults from './SurveyResults';
import { useToast } from '@/hooks/use-toast';
import SurveyHeader from './SurveyHeader';
import { motion } from 'framer-motion';

interface FashionSurveyProps {
  onComplete: () => void;
  onDismiss: () => void;
}

const GenderStep = ({ onSelect, selectedGender }: { onSelect: (gender: string) => void, selectedGender: string }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-fashion-neutral-900 text-center">What's your gender?</h3>
      <p className="text-center text-fashion-neutral-600">
        This helps us personalize your style recommendations.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
        <div 
          className={`border-2 rounded-lg p-6 text-center cursor-pointer transition-all ${
            selectedGender === 'male' ? 'border-fashion-neutral-900 bg-fashion-neutral-50' : 'border-fashion-neutral-200 hover:border-fashion-neutral-300'
          }`}
          onClick={() => onSelect('male')}
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-fashion-neutral-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="3"/>
              <line x1="12" y1="8" x2="12" y2="21"/>
              <line x1="8" y1="16" x2="16" y2="16"/>
            </svg>
          </div>
          <h4 className="font-medium text-fashion-neutral-900">Male</h4>
        </div>
        
        <div 
          className={`border-2 rounded-lg p-6 text-center cursor-pointer transition-all ${
            selectedGender === 'female' ? 'border-fashion-neutral-900 bg-fashion-neutral-50' : 'border-fashion-neutral-200 hover:border-fashion-neutral-300'
          }`}
          onClick={() => onSelect('female')}
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-fashion-neutral-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="5"/>
              <path d="M12 13v8"/>
              <path d="M9 18h6"/>
            </svg>
          </div>
          <h4 className="font-medium text-fashion-neutral-900">Female</h4>
        </div>
        
        <div 
          className={`border-2 rounded-lg p-6 text-center cursor-pointer transition-all ${
            selectedGender === 'non-binary' ? 'border-fashion-neutral-900 bg-fashion-neutral-50' : 'border-fashion-neutral-200 hover:border-fashion-neutral-300'
          }`}
          onClick={() => onSelect('non-binary')}
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-fashion-neutral-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-6"/>
              <path d="M9 7V4h6v3"/>
              <path d="M9 18h6"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <h4 className="font-medium text-fashion-neutral-900">Non-binary</h4>
        </div>
      </div>
    </div>
  );
};

const FashionSurvey = ({ onComplete, onDismiss }: FashionSurveyProps) => {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const [styleData, setStyleData] = useState({
    primaryStyle: '',
    secondaryStyles: [],
    favoriteColors: [],
    favoritePatterns: [],
    favoriteAccessories: [],
    brandsLiked: []
  });
  const [colorData, setColorData] = useState({
    skinTone: '',
    undertone: '',
    recommendedColors: []
  });
  const [sizeData, setSizeData] = useState({
    recommendedSizes: {}
  });
  
  const { toast } = useToast();
  
  useEffect(() => {
    // Load saved survey data if it exists
    const savedData = localStorage.getItem('fashionSurveyData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (parsedData.gender) setGender(parsedData.gender);
        if (parsedData.stylePreferences) setStyleData(parsedData.stylePreferences);
        if (parsedData.colorAnalysis) setColorData(parsedData.colorAnalysis);
        if (parsedData.sizeAnalysis) setSizeData(parsedData.sizeAnalysis);
      } catch (error) {
        console.error('Error parsing saved survey data:', error);
      }
    }
  }, []);
  
  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
    goToNextStep();
  };
  
  const handleStyleSubmit = (data: typeof styleData) => {
    setStyleData(data);
    goToNextStep();
  };
  
  const handleColorSubmit = (data: typeof colorData) => {
    setColorData(data);
    goToNextStep();
  };
  
  const handleSizeSubmit = (data: typeof sizeData) => {
    setSizeData(data);
    goToNextStep();
    
    // Save all survey data to localStorage
    const surveyData = {
      gender,
      stylePreferences: styleData,
      colorAnalysis: colorData,
      sizeAnalysis: data
    };
    
    localStorage.setItem('fashionSurveyData', JSON.stringify(surveyData));
    
    toast({
      title: "Style Profile Updated!",
      description: "Your fashion preferences have been saved.",
    });
  };
  
  const goToNextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const goToPrevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const getStepContent = () => {
    switch(step) {
      case 0:
        return <GenderStep onSelect={handleGenderSelect} selectedGender={gender} />;
      case 1:
        return <StylePreferencesStep onSubmit={handleStyleSubmit} initialData={styleData} userGender={gender} />;
      case 2:
        return <ColorAnalysisStep onSubmit={handleColorSubmit} initialData={colorData} />;
      case 3:
        return <SizeAnalysisStep onSubmit={handleSizeSubmit} initialData={sizeData} userGender={gender} />;
      case 4:
        return (
          <SurveyResults 
            data={{
              gender,
              stylePreferences: styleData,
              colorAnalysis: colorData,
              sizeAnalysis: sizeData
            }}
          />
        );
      default:
        return null;
    }
  };
  
  const totalSteps = 5;
  
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-xl max-w-4xl mx-auto overflow-hidden">
      <div className="relative">
        <button 
          onClick={onDismiss}
          className="absolute top-4 right-4 p-2 rounded-full bg-fashion-neutral-100 hover:bg-fashion-neutral-200 transition-colors z-10"
        >
          <X size={20} className="text-fashion-neutral-700" />
        </button>
        
        <SurveyHeader 
          currentStep={step} 
          totalSteps={totalSteps}
          titles={['Gender', 'Style', 'Colors', 'Size', 'Results']}
        />
        
        <div className="p-6 md:p-8">
          <motion.div
            key={step}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {getStepContent()}
          </motion.div>
          
          <div className="flex justify-between mt-8">
            {step > 0 && step < 4 && (
              <AnimatedButton
                variant="secondary"
                onClick={goToPrevStep}
              >
                Back
              </AnimatedButton>
            )}
            
            {step === 4 && (
              <AnimatedButton
                variant="primary"
                icon={<CheckCircle2 size={18} />}
                onClick={onComplete}
              >
                Complete
              </AnimatedButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionSurvey;
