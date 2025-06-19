import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Deeraj Irala
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate front-end developer with a love for crafting clean, responsive UIs using HTML, CSS, and React.js.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href="https://github.com/deerajirala12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/deeraj-irala-192b5526b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:deeraj.irala04@gmail.com"
              className="social-icon p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group"
          >
            <span>Learn more about me</span>
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;