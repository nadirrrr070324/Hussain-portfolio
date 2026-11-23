import { ArrowRight, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/nadirrrr070324', icon: Github },
  { label: 'Gmail', url: 'mailto:nh070435@gmail.com', icon: Mail },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nadir-hussain-0520b4325', icon: Linkedin },
  { label: 'Phone', url: 'tel:+919122492771', icon: Phone },
];

const STATS = [
  { label: 'PROD DEPLOYMENTS', value: '12+' },
  { label: 'INFERENCE VECTOR', value: '99.98%' },
];

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-12 lg:pt-36 lg:pb-24 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 60, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/4 w-72 h-72 bg-[#f43f5e]/10 rounded-full will-change-transform"
        style={{ filter: 'blur(60px)', transform: 'translateZ(0)' }}
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#4ade80]/10 rounded-full will-change-transform"
        style={{ filter: 'blur(60px)', transform: 'translateZ(0)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#f43f5e]/40 bg-[#f43f5e]/10 text-[10px] font-bold text-[#f43f5e] tracking-wider uppercase"
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]"
                />
                LIVE FEED
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none"
            >
              NADIR <span className="amp text-[#f43f5e] text-glow">&amp;</span> HUSSAIN
            </motion.h1>

            <motion.p variants={itemVariants} className="text-sm font-mono text-[#f43f5e] tracking-widest uppercase mb-4">
              AI Systems Architect &amp; Creative Technologist
            </motion.p>

            <motion.p variants={itemVariants} className="text-[#b3b3b3] text-sm md:text-base leading-relaxed max-w-lg mb-8 font-mono">
              Engineering high-frequency neural interfaces, multi-agent frameworks, and visceral spatial
              compute environments. Operating at the stark threshold between optical restraint and
              computational velocity.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#f43f5e' }}
                  className="panel p-4 border border-[#1a1a1a] flex flex-col cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-mono text-[#666] uppercase tracking-wider mb-1">{stat.label}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="text-xl font-mono text-[#4ade80] font-bold"
                  >
                    {stat.value}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                EXPLORE PROJECTS <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                INITIATE UPLINK
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ label, url, icon: Icon }, i) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3, rotate: 5 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative max-w-md mx-auto"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-1 bg-gradient-to-r from-[#f43f5e] to-[#4ade80] rounded-2xl opacity-20"
                style={{ filter: 'blur(8px)' }}
              />
              <div className="relative panel p-1 z-10 border border-[#1a1a1a]">
                <div className="flex gap-2 mb-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="w-3 h-3 rounded-full bg-[#f43f5e]"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-3 h-3 rounded-full bg-[#f43f5e]/60"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-3 h-3 rounded-full bg-[#f43f5e]/30"
                  />
                </div>
                <div className="bg-[#050505] rounded-xl overflow-hidden border border-[#1a1a1a] shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Nadir Hussain"
                    width={800}
                    height={1000}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-mono text-[#666]">FOCUS FIELD</span>
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-1 text-[10px] text-[#4ade80]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                        SYS_CALIBRATED
                      </motion.span>
                    </div>
                    <span className="text-[10px] font-mono text-[#f43f5e] uppercase tracking-wider">multi-modal neural synthesis</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}