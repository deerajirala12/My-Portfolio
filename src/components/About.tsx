import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../assets/developer-animation.json.json';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Large Techie Animation - responsive positioning */}
      <div className="absolute top-8 right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:right-8 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] z-10 pointer-events-none opacity-60 md:opacity-80">
        <Lottie
          animationData={animationData}
          loop={true}
          autoPlay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Myself
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Passionate about creating meaningful digital experiences through clean code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              My Story
            </h3>
            <div className="space-y-3 sm:space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
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

          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <div className="dark-card p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 bg-blue-900 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Code className="text-blue-300" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Clean Code
                </h4>
              </div>
              <p className="text-slate-300 text-sm sm:text-base">
                Writing maintainable, scalable code that stands the test of time and makes collaboration seamless.
              </p>
            </div>

            <div className="dark-card p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 bg-purple-900 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Palette className="text-purple-300" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Design Focus
                </h4>
              </div>
              <p className="text-slate-300 text-sm sm:text-base">
                Bridging the gap between design and development to create beautiful, intuitive user interfaces.
              </p>
            </div>

            <div className="dark-card p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 bg-green-900 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Zap className="text-green-300" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Performance
                </h4>
              </div>
              <p className="text-slate-300 text-sm sm:text-base">
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