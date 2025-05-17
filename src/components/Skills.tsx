import React from 'react';
import skillsData from '../data/skillsData';
import SectionHeading from './common/SectionHeading';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with" 
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="text-xl font-bold mb-6 text-indigo-300">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;