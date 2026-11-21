import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB_USERNAME', icon: Github },
  { label: 'Gmail', url: 'mailto:YOUR_GMAIL@gmail.com', icon: Mail },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME', icon: Linkedin },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('idle');

    await new Promise((r) => setTimeout(r, 1500));

    setIsSending(false);
    setStatus('success');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get <span>In Touch</span></h2>
          <div className="divider mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let&apos;s Work Together</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Have a project in mind or just want to say hello? Reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {SOCIALS.map(({ label, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target={label === 'Gmail' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:border-primary-400 dark:hover:border-primary-500/50 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-white">{label}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs">
                      {url}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What&apos;s this about?"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`btn-primary w-full disabled:opacity-70 disabled:scale-100 ${isSending ? 'pointer-events-none' : ''}`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm flex items-center gap-2">
                  <span>✓</span> Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
                  <span>✕</span> Something went wrong. Please email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}