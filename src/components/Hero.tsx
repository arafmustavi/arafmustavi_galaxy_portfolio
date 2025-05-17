import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative">
      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="block">Hello, I'm</span>
          <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Araf Mustavi
          </span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8">
          <span className="inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-indigo-500 after:bottom-0 after:left-0">
            Data Scientist
          </span> • 
          <span className="inline-block ml-2 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-purple-500 after:bottom-0 after:left-0">
            Machine Learning Engineer
          </span> • 
          <span className="inline-block ml-2 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0">
            Tech Product Manager
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate about leveraging data science and machine learning to solve complex business problems.
          With expertise in automation, business intelligence, and emerging technologies,
          I create innovative solutions that drive efficiency and performance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all hover:shadow-lg hover:shadow-indigo-600/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            View My Projects
          </a>
          
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-indigo-400 text-indigo-300 font-medium hover:bg-indigo-900/30 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#experience" 
          aria-label="Scroll to experience section"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-500 text-slate-400 hover:text-white hover:border-white transition-colors"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;