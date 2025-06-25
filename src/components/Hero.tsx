import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Lottie from 'lottie-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Playful bot animation data (using a public Lottie animation)
  const botAnimationData = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 90,
    "w": 400,
    "h": 400,
    "nm": "Bot Animation",
    "ddd": 0,
    "assets": [],
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Bot Body",
        "sr": 1,
        "ks": {
          "o": {"a": 0, "k": 100},
          "r": {"a": 1, "k": [
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 45, "s": [10]},
            {"t": 90, "s": [0]}
          ]},
          "p": {"a": 0, "k": [200, 200, 0]},
          "a": {"a": 0, "k": [0, 0, 0]},
          "s": {"a": 1, "k": [
            {"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 0, "s": [100, 100, 100]},
            {"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 30, "s": [110, 110, 100]},
            {"t": 60, "s": [100, 100, 100]}
          ]}
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {"a": 0, "k": [120, 140]},
                "p": {"a": 0, "k": [0, 0]},
                "r": {"a": 0, "k": 20}
              },
              {
                "ty": "fl",
                "c": {"a": 0, "k": [0.4, 0.6, 1, 1]},
                "o": {"a": 0, "k": 100}
              }
            ]
          }
        ],
        "ip": 0,
        "op": 90,
        "st": 0
      }
    ]
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Playful Bot Animation - positioned on the right */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10 pointer-events-none opacity-70">
        <div className="relative w-full h-full">
          {/* Fallback animated bot using CSS */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative animate-bounce">
              {/* Bot Body */}
              <div className="w-24 h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl relative shadow-lg">
                {/* Bot Eyes */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Bot Mouth */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-white rounded-full opacity-80"></div>
                
                {/* Bot Arms */}
                <div className="absolute top-16 -left-4 w-3 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-16 -right-4 w-3 h-8 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                
                {/* Bot Antenna */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-blue-300 rounded-full">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Bot Base/Legs */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-6 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
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