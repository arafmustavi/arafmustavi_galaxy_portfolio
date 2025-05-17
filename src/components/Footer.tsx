import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-slate-400">
            © {currentYear} Araf Mustavi. All rights reserved.
          </p>
        </div>
        
        <div>
          <a href="#home" className="text-slate-400 hover:text-indigo-400 transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;