
import React, { useState, useRef } from 'react';
import { Camera, Upload, X, CloudLightning } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { motion } from 'framer-motion';

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

const ColorAnalysisStep = ({ data, onUpdate }: ColorAnalysisStepProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      
      // Simulate file upload
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(e.target.files![0]);
        setIsUploading(false);
        
        // Simulate AI analysis
        setIsAnalyzing(true);
        setTimeout(() => {
          setIsAnalyzing(false);
          
          // Sample recommended colors - in a real app, these would come from AI analysis
          const recommendedColors = [
            '#F9F1E7', '#FFF9E6', '#F5E6C8', 
            '#E5C8A6', '#D4AF91', '#8C7356',
            '#536D8B', '#5E788F', '#9DB1CC'
          ];
          
          // AI automatically determines skin tone and undertone
          onUpdate({ 
            imageUrl,
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
  };
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-fashion-neutral-900">AI Color Analysis</h3>
        <p className="text-sm text-fashion-neutral-600">
          Upload a photo to let our AI analyze your skin tone and determine your most flattering colors.
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
              className="border-2 border-dashed border-fashion-neutral-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-fashion-neutral-50 transition-colors cursor-pointer hover:scale-105 transform duration-200"
              onClick={triggerFileInput}
            >
              <Upload size={32} className="text-fashion-neutral-400 mb-3" />
              <p className="text-fashion-neutral-900 font-medium">Upload Photo</p>
              <p className="text-fashion-neutral-500 text-sm">Click to upload</p>
            </div>
            
            <button
              className="border-2 border-dashed border-fashion-neutral-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-fashion-neutral-50 transition-colors hover:scale-105 transform duration-200"
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
            
            {isAnalyzing ? (
              <div className="mt-3 bg-fashion-primary-light p-3 rounded text-sm text-fashion-neutral-800 flex items-center justify-center">
                <div className="animate-spin mr-2 w-4 h-4 border-2 border-fashion-neutral-800 border-t-transparent rounded-full"></div>
                <span>AI is analyzing your photo...</span>
              </div>
            ) : data.skinTone && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 bg-fashion-primary-light p-3 rounded text-sm text-fashion-neutral-800 flex items-center"
              >
                <CloudLightning size={18} className="mr-2 text-fashion-neutral-900" />
                <span>AI has detected {data.skinTone} skin tone with {data.undertone} undertones</span>
              </motion.div>
            )}
          </div>
        )}
      </div>
      
      {data.recommendedColors.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-medium text-fashion-neutral-900">Your Perfect Color Palette</h3>
          <p className="text-sm text-fashion-neutral-600">
            Based on our AI analysis, these colors will complement you best:
          </p>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2 p-4 bg-fashion-neutral-50 rounded-lg">
            {data.recommendedColors.map((color, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  className="w-full aspect-square rounded-lg mb-1 border border-fashion-neutral-200 hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-xs text-fashion-neutral-700">{color}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ColorAnalysisStep;
