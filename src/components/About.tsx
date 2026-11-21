import { Code } from 'lucide-react';

const SKILLS = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Node.js', level: 70 },
  { name: 'Git & GitHub', level: 80 },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="divider mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 text-xl font-mono">
                <Code className="w-12 h-12" /> <span>Your Photo</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Developer &amp; Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a developer based in <span className="text-primary-600 dark:text-primary-400 font-medium">Your City</span> with a
                passion for building clean, efficient, and accessible web experiences. I enjoy turning complex problems
                into simple, beautiful, and intuitive designs.
              </p>
            </div>

            <div className="space-y-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="space-x-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              {[3, 10, 5].map((num, i) => (
                <div key={i} className="p-4 glass-card text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{num}+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {i === 0 ? 'Years Experience' : i === 1 ? 'Projects Built' : 'Technologies'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}