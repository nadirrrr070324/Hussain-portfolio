import { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB_USERNAME', icon: Github },
  { label: 'Gmail', url: 'mailto:YOUR_GMAIL@gmail.com', icon: Mail },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME', icon: Linkedin },
];

const LINKS = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
      } dark:${scrolled ? 'bg-gray-900/80 border-gray-800' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">YN</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              Your<span className="text-primary-600 dark:text-primary-400">Name</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                className="text-sm font-medium transition-colors text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                {SOCIALS.map(({ label, url, icon: Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}