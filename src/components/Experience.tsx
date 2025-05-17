import React from 'react';
import experienceData from '../data/experienceData';
import SectionHeading from './common/SectionHeading';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Professional Experience" subtitle="My journey in the tech industry" />
        
        <div className="mt-16 space-y-16">
          {experienceData.map((experience, index) => (
            <div 
              key={experience.id}
              className="relative pl-8 md:pl-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                {/* Timeline line */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                
                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                
                {/* Left column - Date & Company */}
                <div className="md:w-1/3 md:text-right md:pr-10 mb-4 md:mb-0">
                  <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-500 transform -translate-x-1/2"></div>
                  <span className="block text-indigo-400 font-medium mb-1">{experience.period}</span>
                  <span className="block text-lg font-bold mb-1">{experience.company}</span>
                  <span className="block text-sm text-slate-400">{experience.location}</span>
                </div>
                
                {/* Right column - Title & Description */}
                <div className="md:w-2/3 md:pl-10">
                  <h3 className="text-xl font-bold mb-4">{experience.title}</h3>
                  <ul className="space-y-3">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2"></span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;