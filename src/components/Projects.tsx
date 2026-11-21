import { PROJECTS } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-[#f43f5e]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label">ARCHIVAL CASSETTES // SECTION 02</div>
          <h2 className="section-title">SELECTED <span className="amp text-[#f43f5e]">WORKS</span>*</h2>
          <div className="divider" />
          <p className="section-caption">Production grade AI runtimes, real-time spatial rendering engines, and zero-knowledge identity pipelines.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="panel-border panel p-6 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-[#f43f5e] font-bold tracking-wider uppercase">CASSETTE</span>
                  <span className="text-xs font-mono text-[#b3b3b3]">#{project.cassette}</span>
                </div>
                <span className="text-[10px] font-mono text-[#4ade80] uppercase tracking-wider">{project.badge}</span>
              </div>

              <h3 className="text-xl font-black text-white mb-1 tracking-tight">{project.title}</h3>
              <p className="text-[#b3b3b3] text-xs font-mono leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(244, 63, 94, 0.2)', borderColor: '#f43f5e' }}
                    className="px-2 py-1 rounded border border-[#1a1a1a] bg-[#0f0f0f] text-[10px] font-mono text-[#666] uppercase tracking-wider transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded border border-[#1a1a1a] bg-[#0f0f0f]/50 text-left text-[10px] font-mono text-[#b3b3b3] uppercase tracking-wider hover:border-[#f43f5e]/50 hover:text-[#f43f5e] transition-colors group"
              >
                INSPECT DOSSIER &amp; {project.inspectLabel} <ExternalLink className="w-3.5 h-3.5 mt-0.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
