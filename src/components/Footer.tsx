import { Mail, Github, Linkedin } from 'lucide-react';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB_USERNAME', icon: Github },
  { label: 'Gmail', url: 'mailto:YOUR_GMAIL@gmail.com', icon: Mail },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">YN</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">Your Name</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target={label === 'Gmail' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}