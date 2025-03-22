
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const appScreenshots = [
  {
    id: 1,
    src: '/public/app-project.png',
    alt: 'Project details screen'
  },
  {
    id: 2,
    src: '/public/app-feed.png',
    alt: 'Projects screen with construction photos'
  },
  {
    id: 3,
    src: '/public/app-calendar.png',
    alt: 'Calendar with project timeline'
  },
  {
    id: 4,
    src: '/public/app-files.png',
    alt: 'Files management screen'
  },
  {
    id: 5,
    src: '/public/app-tasks.png',
    alt: 'Task management screen'
  }
];

const AppShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === appScreenshots.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? appScreenshots.length - 1 : current - 1));
  };

  return (
    <section id="app" className="py-24 overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Powerful Mobile Experience
          </h2>
          <p className="text-white/70 text-lg">
            ONEBUILD brings professional construction project management to your fingertips with an 
            intuitive interface designed specifically for builders.
          </p>
        </div>
        
        <div className="relative">
          {/* Phone Frame */}
          <div className="max-w-xs mx-auto relative">
            {/* Phone Bezel */}
            <div className="absolute inset-0 border-[12px] border-black rounded-[40px] z-20 pointer-events-none"></div>
            
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black z-10 rounded-t-[32px]"></div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-black z-10 rounded-b-[32px] flex justify-center items-center">
              <div className="w-24 h-1 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* App Screenshots Carousel */}
            <div className="w-full h-[600px] overflow-hidden rounded-[32px] shadow-2xl app-shadow">
              {appScreenshots.map((screenshot, index) => (
                <div 
                  key={screenshot.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="text-white/80" size={20} />
            </button>
            
            <div className="flex space-x-2">
              {appScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Next screenshot"
            >
              <ChevronRight className="text-white/80" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
