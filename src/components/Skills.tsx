import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Palette,
  Server,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="text-blue-400" size={28} />,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-green-400" size={28} />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'REST APIs', level: 75 },
        { name: 'Authentication', level: 60 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: <Database className="text-purple-400" size={28} />,
      skills: [
        { name: 'PostgreSQL', level: 65 },
        { name: 'MongoDB', level: 60 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="text-pink-400" size={28} />,
      skills: [
        { name: 'Responsive Design', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'User Experience', level: 75 },
        { name: 'Prototyping', level: 65 }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 font-medium">{skill.name}</span>
        <span className="text-slate-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="dark-card p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-700 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Other Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React Router',
              'Axios',
              'Postman',
              'npm/yarn',
              'Webpack',
              'Vite',
              'ESLint',
              'Prettier',
              'Chrome DevTools',
              'Responsive Design',
              'Cross-browser Testing',
              'Performance Optimization'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-slate-700 hover:bg-slate-600 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 hover:scale-105 transform"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Next.js', icon: <Globe className="text-blue-400" size={20} /> },
              { name: 'GraphQL', icon: <Database className="text-pink-400" size={20} /> },
              { name: 'Docker', icon: <Server className="text-cyan-400" size={20} /> },
              { name: 'AWS', icon: <Zap className="text-orange-400" size={20} /> }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-full transition-colors duration-200"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;