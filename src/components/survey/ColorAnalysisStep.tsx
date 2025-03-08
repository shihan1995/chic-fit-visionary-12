
import React, { useState, useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

interface ColorAnalysisData {
  imageUrl: string;
  skinTone: string;
  undertone: string;
  recommendedColors: string[];
  completed: boolean;
}

interface ColorAnalysisStepProps {
  data: ColorAnalysisData;
  onUpdate: (data: Partial<ColorAnalysisData>) => void;
}

const skinToneOptions = [
  { value: 'fair', label: 'Fair', color: '#FFDBAC' },
  { value: 'light', label: 'Light', color: '#F1C27D' },
  { value: 'medium', label: 'Medium', color: '#E0AC69' },
  { value: 'olive', label: 'Olive', color: '#C68642' },
  { value: 'tan', label: 'Tan', color: '#8D5524' },
  { value: 'deep', label: 'Deep', color: '#6A4C3B' },
];

const undertoneOptions = [
  { value: 'cool', label: 'Cool (pink/red undertones)', color: '#FFDBDB' },
  { value: 'warm', label: 'Warm (yellow/golden undertones)', color: '#FFF0DB' },
  { value: 'neutral', label: 'Neutral (mix of warm and cool)', color: '#F1F1F1' },
];

const ColorAnalysisStep = ({ data, onUpdate }: ColorAnalysisStepProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [selectedSkinTone, setSelectedSkinTone] = useState(data.skinTone || '');
  const [selectedUndertone, setSelectedUndertone] = useState(data.undertone || '');
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      
      // Simulate file upload
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(e.target.files![0]);
        onUpdate({ imageUrl });
        setIsUploading(false);
        
        // Simulate AI analysis
        setIsAnalyzing(true);
        setTimeout(() => {
          setIsAnalyzing(false);
          setSelectedSkinTone('medium');
          setSelectedUndertone('warm');
          
          // Sample recommended colors - in a real app, these would come from AI analysis
          const recommendedColors = [
            '#F9F1E7', '#FFF9E6', '#F5E6C8', 
            '#E5C8A6', '#D4AF91', '#8C7356',
            '#536D8B', '#5E788F', '#9DB1CC'
          ];
          
          onUpdate({ 
            skinTone: 'medium',
            undertone: 'warm',
            recommendedColors,
            completed: true
          });
        }, 2000);
      }, 1000);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  const clearImage = () => {
    onUpdate({ 
      imageUrl: '',
      skinTone: '',
      undertone: '',
      recommendedColors: [],
      completed: false
    });
    setSelectedSkinTone('');
    setSelectedUndertone('');
  };
  
  const updateSkinTone = (value: string) => {
    setSelectedSkinTone(value);
    onUpdate({ 
      skinTone: value,
      completed: !!selectedUndertone && !!value
    });
  };
  
  const updateUndertone = (value: string) => {
    setSelectedUndertone(value);
    onUpdate({ 
      undertone: value,
      completed: !!selectedSkinTone && !!value
    });
  };
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">Upload Your Photo</h3>
        <p className="text-sm text-fashion-neutral-600">
          Upload a well-lit photo of your face or wrist to analyze your skin tone and determine your most flattering colors.
        </p>
        
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        
        {!data.imageUrl ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className="border-2 border-dashed border-fashion-neutral-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-fashion-neutral-50 transition-colors cursor-pointer"
              onClick={triggerFileInput}
            >
              <Upload size={32} className="text-fashion-neutral-400 mb-3" />
              <p className="text-fashion-neutral-900 font-medium">Upload Photo</p>
              <p className="text-fashion-neutral-500 text-sm">Click to upload</p>
            </div>
            
            <button
              className="border-2 border-dashed border-fashion-neutral-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-fashion-neutral-50 transition-colors"
              onClick={() => {/* Camera logic would go here */}}
            >
              <Camera size={32} className="text-fashion-neutral-400 mb-3" />
              <p className="text-fashion-neutral-900 font-medium">Use Camera</p>
              <p className="text-fashion-neutral-500 text-sm">Take a photo now</p>
            </button>
          </div>
        ) : (
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-64 bg-fashion-neutral-100 rounded-lg overflow-hidden">
              <img 
                src={data.imageUrl} 
                alt="Uploaded" 
                className="w-full h-full object-cover"
              />
              <button
                onClick={clearImage}
                className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white/100"
              >
                <X size={16} className="text-fashion-neutral-900" />
              </button>
            </div>
            
            {isAnalyzing && (
              <div className="mt-3 bg-fashion-primary-light p-2 rounded text-sm text-fashion-neutral-800 flex items-center justify-center">
                <div className="animate-spin mr-2 w-4 h-4 border-2 border-fashion-neutral-800 border-t-transparent rounded-full"></div>
                Analyzing your photo...
              </div>
            )}
          </div>
        )}
      </div>
      
      {(!!data.skinTone || !data.imageUrl) && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-fashion-neutral-900">Your Skin Tone</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {skinToneOptions.map((option) => (
              <button
                key={option.value}
                className={`
                  flex flex-col items-center p-2 rounded-lg border-2 transition-all
                  ${selectedSkinTone === option.value 
                    ? 'border-fashion-neutral-900 transform scale-105' 
                    : 'border-transparent hover:border-fashion-neutral-300'}
                `}
                onClick={() => updateSkinTone(option.value)}
              >
                <div 
                  className="w-10 h-10 rounded-full mb-2"
                  style={{ backgroundColor: option.color }}
                ></div>
                <span className="text-xs text-fashion-neutral-900">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {(!!data.undertone || !data.imageUrl) && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-fashion-neutral-900">Your Undertone</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {undertoneOptions.map((option) => (
              <button
                key={option.value}
                className={`
                  flex items-center p-3 rounded-lg border-2 transition-all
                  ${selectedUndertone === option.value 
                    ? 'border-fashion-neutral-900 bg-fashion-neutral-50' 
                    : 'border-transparent hover:border-fashion-neutral-300'}
                `}
                onClick={() => updateUndertone(option.value)}
              >
                <div 
                  className="w-6 h-6 rounded-full mr-3"
                  style={{ backgroundColor: option.color }}
                ></div>
                <span className="text-sm text-fashion-neutral-900">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {data.recommendedColors.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-fashion-neutral-900">Your Color Palette</h3>
          <p className="text-sm text-fashion-neutral-600">
            Based on your {data.skinTone} skin tone with {data.undertone} undertones, these colors will complement you best:
          </p>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2 p-4 bg-fashion-neutral-50 rounded-lg">
            {data.recommendedColors.map((color, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-full aspect-square rounded-lg mb-1 border border-fashion-neutral-200"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-xs text-fashion-neutral-700">{color}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorAnalysisStep;
