import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            <span>View Code</span>
          </a>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;