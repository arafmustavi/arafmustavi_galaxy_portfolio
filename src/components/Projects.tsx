import React from 'react';
import projectsData from '../data/projectsData';
import SectionHeading from './common/SectionHeading';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Exploring innovative solutions through code" 
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;