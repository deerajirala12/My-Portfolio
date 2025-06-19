import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../assets/developer-animation.json.json';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      {/* Large Techie Animation positioned before About content */}
      <div className="absolute top-8 right-8 w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] z-10 pointer-events-none opacity-80">
        <Lottie
          animationData={animationData}
          loop={true}
          autoPlay={true}
          style={{ width: '100%', height: '100%' }}
      /*  />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Myself
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through clean code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm an enthusiastic full-stack developer at the start of my journey, with a strong interest in building clean, responsive, and functional web applications.
              </p>
              <p>
                As a fresher, I'm focused on sharpening my skills in modern JavaScript frameworks, front-end design, and back-end logic.
              </p>
              <p>
                I believe every challenge is a chance to learn something new. Whether it's contributing to open-source, building personal projects, or collaborating with others, I'm always looking to improve.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="dark-card p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-900 rounded-lg mr-4">
                  <Code className="text-blue-300" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Clean Code
                </h4>
              </div>
              <p className="text-slate-300">
                Writing maintainable, scalable code that stands the test of time and makes collaboration seamless.
              </p>
            </div>

            <div className="dark-card p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-900 rounded-lg mr-4">
                  <Palette className="text-purple-300" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Design Focus
                </h4>
              </div>
              <p className="text-slate-300">
                Bridging the gap between design and development to create beautiful, intuitive user interfaces.
              </p>
            </div>

            <div className="dark-card p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-900 rounded-lg mr-4">
                  <Zap className="text-green-300" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Performance
                </h4>
              </div>
              <p className="text-slate-300">
                Optimizing applications for speed, accessibility, and seamless user experiences across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;