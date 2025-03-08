
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Ruler, Palette, Sparkles, Camera, Shirt, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FeatureCard from '@/components/ui/FeatureCard';
import StyleProfile from '@/components/ui/StyleProfile';
import SizeRecommendation from '@/components/ui/SizeRecommendation';
import ColorAnalysis from '@/components/ui/ColorAnalysis';
import FashionSurvey from '@/components/survey/FashionSurvey';

const Index = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  useEffect(() => {
    const storedSurveyData = localStorage.getItem('fashionSurveyData');
    if (storedSurveyData) {
      setSurveyCompleted(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSurveyComplete = () => {
    setShowSurvey(false);
    setSurveyCompleted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-fashion-neutral-900 leading-tight mb-6 animate-fade-in">
              Discover Your Perfect Style With AI
            </h1>
            <p className="text-xl text-fashion-neutral-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Our fashion assistant leverages AI to provide personalized style recommendations tailored to your unique preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <AnimatedButton 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={18} />}
                onClick={() => setShowSurvey(true)}
              >
                {surveyCompleted ? 'Update Style Profile' : 'Start Style Quiz'}
              </AnimatedButton>
              <AnimatedButton 
                variant="secondary" 
                size="lg"
              >
                Learn More
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      
      {showSurvey && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto p-4 flex items-center justify-center">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <FashionSurvey 
              onComplete={handleSurveyComplete} 
              onDismiss={() => setShowSurvey(false)}
            />
          </div>
        </div>
      )}

      <section className="py-12 bg-fashion-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold text-fashion-neutral-900 mb-4">
              AI-Powered Fashion Features
            </h2>
            <p className="text-lg text-fashion-neutral-600">
              Discover how our AI technology revolutionizes your fashion experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link to="/style-profile">
              <FeatureCard
                icon={<Sparkles size={24} />}
                title="Style Profile"
                description="Get a personalized style profile based on your preferences and past purchases."
                animationDelay={100}
              />
            </Link>
            
            <Link to="/size-guide">
              <FeatureCard
                icon={<Ruler size={24} />}
                title="Size Recommendations"
                description="Never worry about sizing again with our smart fit technology."
                animationDelay={200}
              />
            </Link>
            
            <Link to="/color-analysis">
              <FeatureCard
                icon={<Palette size={24} />}
                title="Color Analysis"
                description="Find the perfect colors that complement your skin tone and style."
                animationDelay={300}
              />
            </Link>
            
            <Link to="/visual-try-on">
              <FeatureCard
                icon={<Camera size={24} />}
                title="Visual Try-On"
                description="See how clothes look on you before you buy with our virtual fitting room."
                animationDelay={400}
              />
            </Link>
          </div>
          
          <StyleProfile />
          
          <SizeRecommendation />
          
          <ColorAnalysis />
        </div>
      </section>
      
      <section className="py-24 bg-fashion-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-fashion-neutral-200 text-xs font-medium mb-4">
              <Zap size={14} className="mr-1" />
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Transform Your Wardrobe With AI
            </h2>
            <p className="text-lg text-fashion-neutral-200 mb-8 max-w-2xl mx-auto">
              Join thousands of fashion enthusiasts who have discovered their perfect style with our AI assistant.
            </p>
            <AnimatedButton 
              variant="secondary" 
              size="lg"
              className="bg-white text-fashion-neutral-900 hover:bg-fashion-neutral-100"
              onClick={() => setShowSurvey(true)}
            >
              {surveyCompleted ? 'Update Your Style Profile' : 'Create Your Style Profile'}
            </AnimatedButton>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
