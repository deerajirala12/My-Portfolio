import React from 'react';
import { Folder, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CRUD Application',
      description: 'A simple CRUD (Create, Read, Update, Delete) application built using React and Node.js that allows users to manage their daily tasks.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/deerajirala12/crud-app',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/deerajirala12/task-manager',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current weather conditions and forecasts using external weather APIs.',
      tech: ['React', 'API Integration', 'CSS3'],
      githubUrl: 'https://github.com/deerajirala12/weather-dashboard',
    },
    {
      title: 'E-commerce Frontend',
      description: 'A modern e-commerce frontend with shopping cart functionality, product filtering, and responsive design.',
      tech: ['React', 'Redux', 'Styled Components'],
      githubUrl: 'https://github.com/deerajirala12/ecommerce-frontend',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A collection of my work showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-700 hover:bg-slate-600 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-600 hover:border-slate-500"
            >
              {/* Folder Icon */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Folder 
                    size={48} 
                    className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" 
                  />
                  {/* Folder tab effect */}
                  <div className="absolute -top-1 -right-1 w-4 h-2 bg-yellow-400 group-hover:bg-yellow-300 rounded-t transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white ml-4 group-hover:text-slate-100 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              {/* Project Description */}
              <p className="text-slate-300 group-hover:text-slate-200 mb-6 leading-relaxed transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-800 group-hover:bg-slate-900 text-slate-300 group-hover:text-slate-200 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* GitHub Link */}
              <div className="absolute bottom-6 left-8 right-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg border border-slate-400 hover:border-slate-600"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
              
              {/* Folder corner fold effect */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-slate-600 group-hover:bg-slate-500 transition-colors duration-300" 
                   style={{
                     clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                   }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;