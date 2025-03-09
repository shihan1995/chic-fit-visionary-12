
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FashionSurvey from '@/components/survey/FashionSurvey';
import ChatBot from '@/components/chat/ChatBot';

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
      
      <ChatBot />
      
      <Footer />
    </div>
  );
};

export default Index;
