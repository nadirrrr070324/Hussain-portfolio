import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/5 bg-[#050505] py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#666] uppercase tracking-wider">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-5 h-5 rounded border border-[#f43f5e]/40 flex items-center justify-center text-[#f43f5e]"
            >
              <span className="text-[8px] font-black">NH</span>
            </motion.div>
            <span className="text-[#b3b3b3] font-bold">NADIR HUSSAIN</span>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              DESIGNED UNDER THE OBSIDIAN CRIMSON DIRECTIVE
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-1 text-[#4ade80]"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-1 rounded-full bg-[#4ade80]"
              />
              SYS_ACTIVE
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <span>/ INDEX 01 // 02 // 03 // 04</span>
            <span>/ 04</span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
