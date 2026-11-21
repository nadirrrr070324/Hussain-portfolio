import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { label: '01 IDENTITY', hash: '#home' },
  { label: '02 PROJECT', hash: '#projects' },
  { label: '03 SYSTEM', hash: '#systems' },
  { label: '04 INQUIRY', hash: '#contact' },
];

const SYS_STATS = [
  { label: 'SYS:VER', value: '4.8.2' },
  { label: 'LATENCY', value: '2.4ms' },
  { label: 'INFERENCE', value: '99.98%' },
  { label: 'SECURITY', value: '256-SHAK / AES-256' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="flex -space-x-1">
              <motion.span
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-7 h-7 rounded bg-[#f43f5e] flex items-center justify-center text-[10px] font-black text-black leading-none"
              >
                N
              </motion.span>
              <motion.span
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.5 }}
                className="w-7 h-7 rounded border border-[#f43f5e]/50 flex items-center justify-center text-[10px] font-black text-[#f43f5e] leading-none"
              >
                H
              </motion.span>
            </div>
            <span className="text-[10px] font-bold tracking-widest text-[#f43f5e] uppercase opacity-70">portfolio core</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-[#666] uppercase tracking-wider">
            {SECTIONS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.hash}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2, color: '#f43f5e' }}
                className="px-2 py-1 rounded border border-transparent hover:border-[#f43f5e]/40 transition-colors cursor-pointer"
              >
                {s.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 text-[10px] font-mono">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1 text-[#4ade80]"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
              />
              <span className="text-[#4ade80]">ONLINE / OFFIC</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-end gap-0.5"
            >
              <span className="text-white font-bold">SYS:VER 4.8.2</span>
              <span className="text-[#666]">ACTIVE VECTOR // UK &amp; AI</span>
            </motion.div>
            {SYS_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: '#f43f5e' }}
                className="px-2 py-0.5 rounded border border-[#1a1a1a] bg-[#0f0f0f] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span className="text-[#f43f5e]">{s.label}:</span>
                <span className={`text-white ${s.label === 'INFERENCE' ? 'text-[#4ade80]' : ''}`}>{s.value}</span>
              </motion.div>
            ))}
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/profile.jpg"
              alt="Nadir Hussain"
              className="w-9 h-9 rounded-full border border-[#f43f5e]/40 cursor-pointer object-cover"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-1.5 text-[#888] hover:text-[#f43f5e]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
