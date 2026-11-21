import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const CONTACTS = [
  {
    label: 'PRIMARY DIRECT TRANSMISSION',
    icon: Mail,
    value: 'nh070435@gmail.com',
    href: 'mailto:nh070435@gmail.com',
    note: 'PGP key fingerprint verified // 24hr response SLA',
  },
  {
    label: 'PHONE SIGNAL',
    icon: Phone,
    value: '+91 9122492771',
    href: 'tel:+919122492771',
  },
  {
    label: 'GITHUB',
    icon: Github,
    value: '@nadirrrr070324',
    href: 'https://github.com/nadirrrr070324',
  },
  {
    label: 'LINKEDIN',
    icon: Linkedin,
    value: '/in/nadir-hussain-0520b4325',
    href: 'https://www.linkedin.com/in/nadir-hussain-0520b4325',
  },
  {
    label: 'LOCATION VECTOR',
    icon: MapPin,
    value: '12.0716°N, 77.5946°E [BLR]',
    href: '#',
  },
];

const contactVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 80,
    },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f43f5e]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label">TRANSMISSION // SECTION 04</div>
          <h2 className="section-title">GET <span className="amp text-[#f43f5e]">IN TOUCH</span>.</h2>
          <div className="divider" />
          <p className="section-caption">Currently vetting high-impact AI architecture engagements, advisory mandates, and visionary frontier research collaborations.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {CONTACTS.map(({ label, icon: Icon, value, href, note }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={contactVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ x: 5, borderColor: '#f43f5e' }}
                className="panel p-5 border border-[#1a1a1a] flex flex-col gap-2 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded border border-[#1a1a1a] bg-[#0f0f0f] flex items-center justify-center text-[#f43f5e]"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <span className="text-[10px] font-mono text-[#b3b3b3] uppercase tracking-wider">{label}</span>
                </div>
                <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-sm font-mono text-white hover:text-[#f43f5e] transition-colors truncate">
                  {value}
                </a>
                {note && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="text-[10px] font-mono text-[#666]"
                  >
                    {note}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="panel p-8 md:p-12"
          >
            <form className="space-y-5" noValidate>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid md:grid-cols-2 gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-[#666] uppercase tracking-wider">IDENTITY / NAME *</label>
                  <input type="text" name="name" placeholder="Your full identity" required className="px-4 py-3 rounded border border-[#2a2a2a] bg-[#0f0f0f] text-white focus:outline-none focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-[#666] uppercase tracking-wider">RETURN SIGNAL / EMAIL *</label>
                  <input type="email" name="email" placeholder="you@domain.co" required className="px-4 py-3 rounded border border-[#2a2a2a] bg-[#0f0f0f] text-white focus:outline-none focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] transition-all text-sm" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-2"
              >
                <label className="text-[10px] font-mono text-[#666] uppercase tracking-wider">TRANSMISSION CLASSIFICATION</label>
                <select name="classification" className="px-4 py-3 rounded border border-[#2a2a2a] bg-[#0f0f0f] text-white focus:outline-none focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] transition-all text-sm appearance-none">
                  <option>AI Systems Architecture & R&amp;D Mandate</option>
                  <option>Advisory & Consultation</option>
                  <option>Research Collaboration</option>
                  <option>Speaking & Engagement</option>
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <label className="text-[10px] font-mono text-[#666] uppercase tracking-wider">TRANSMISSION PAYLOAD / BRIEF *</label>
                <textarea name="message" rows={4} placeholder="Enter project scope, hardware parameters, or exploratory directive..." required className="px-4 py-3 rounded border border-[#2a2a2a] bg-[#0f0f0f] text-white focus:outline-none focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] transition-all text-sm resize-none" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-2 text-[10px] font-mono text-[#666]"
              >
                All inputs authenticated via client-side hash handshake.
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full"
              >
                DISPATCH TRANSMISSION <span className="text-[10px]">⚠</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
