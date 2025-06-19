import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new opportunities and connecting with fellow developers.
          </p>
          <a
            href="mailto:deeraj.irala04@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-lg"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="https://github.com/deerajirala12"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon p-3 rounded-full hover:bg-slate-700 transition-colors duration-200 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/deeraj-irala-192b5526b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon p-3 rounded-full hover:bg-slate-700 transition-colors duration-200 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:deeraj.irala04@gmail.com"
            className="social-icon p-3 rounded-full hover:bg-slate-700 transition-colors duration-200 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Deeraj Irala. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;