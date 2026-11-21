import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB_USERNAME', icon: Github },
  { label: 'Gmail', url: 'mailto:YOUR_GMAIL@gmail.com', icon: Mail },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME', icon: Linkedin },
];

export default function Hero() {
  return (
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium border border-primary-200 dark:border-primary-800"
            >
              <span className="relative -top-[1px] w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-balance"
            >
              Hi, I&apos;m <span className="text-primary-600 dark:text-primary-400">Your Name.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              I build digital experiences that are responsive, accessible, and a joy to use. Explore my work
              below and get in touch if you&apos;d like to collaborate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex items-center gap-4"
            >
              {SOCIALS.map(({ label, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25"></div>
              <div className="relative glass-card p-1">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                  <div className="p-4 font-mono text-sm">
                    <div className="text-gray-400 mb-2">{'const portfolio = {'}</div>
                    <div className="pl-4 text-gray-300 mb-1">name: <span className="text-primary-400">'Your Name'</span>,</div>
                    <div className="pl-4 text-gray-300 mb-1">role: <span className="text-green-400">'Frontend Developer'</span>,</div>
                    <div className="pl-4 text-gray-300 mb-1">location: <span className="text-blue-400">'Your City'</span>,</div>
                    <div className="pl-4 text-gray-300 mb-1">skills: [<span className="text-purple-400">'React'</span>, <span className="text-purple-400">'TypeScript'</span>, <span className="text-purple-400">'Tailwind'</span>],</div>
                    <div className="pl-4 text-gray-300 mb-1">contact: <span className="text-blue-400">'YOUR_GMAIL@gmail.com'</span>,</div>
                    <div className="pl-4 text-gray-300 mb-1">github: <span className="text-blue-400">'github.com/YOUR_GITHUB_USERNAME'</span>,</div>
                    <div className="text-gray-400">{'};'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}