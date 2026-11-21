import { motion } from 'framer-motion';

const SYSTEMS = [
  {
    num: '01',
    cat: 'ACCELERATION',
    title: 'Neural Engines & CUDA',
    desc: 'Custom GEMM implementations, fp8 quantizations, flash-attention fusion, and memory bandwidth optimization for NVIDIA architectures.',
    meta: 'EFFICIENCY: 94.2 TFLOPS PEAK',
    metaColor: '#4ade80',
  },
  {
    num: '02',
    cat: 'INTERFACE',
    title: 'Visual Synthesis & Spatial',
    desc: 'Direct shader pipelines, custom WebGPU passes, physical simulation constraints, and 6-DoF ergonomic input abstraction.',
    meta: 'LATENCY: < 4.0ms PHOTON-TO-MOTION',
    metaColor: '#22d3ee',
  },
  {
    num: '03',
    cat: 'DISTRIBUTED',
    title: 'High-Concurrency Core',
    desc: 'Actor-model runtimes, event-sourced states, zero-copy buffer serialization, and fault-tolerant gossip consensus topologies.',
    meta: 'UPTIME: 99.995% SLA RATED',
    metaColor: '#4ade80',
  },
  {
    num: '04',
    cat: 'INTEGRITY',
    title: 'Verifiable Cryptography',
    desc: 'Non-interactive zero knowledge circuits, verifiable credentials, encrypted state channels, and threshold MPC key generation.',
    meta: 'SECURITY: POST-QUANTUM HARDENED',
    metaColor: '#f43f5e',
  },
];

const TELEMETRY = [
  { label: 'H100 SXM5 MEMORY', value: '3.35 / 80GB', pct: 92, color: '#f43f5e' },
  { label: 'TTFT (TIME TO FIRST)', value: '11.4 ms', pct: 78, color: '#4ade80' },
  { label: 'INFINIBAND NDR', value: '396 Gbps', pct: 88, color: '#22d3ee' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 14,
    },
  },
};

const barVariants = {
  hidden: { width: 0 },
  visible: (pct: number) => ({
    width: `${pct}%`,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Systems() {
  return (
    <section id="systems" className="relative py-24 overflow-hidden">
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
          <div className="section-label">INFRASTRUCTURE // SECTION 03</div>
          <h2 className="section-title">SYSTEMS &amp; <span className="amp text-[#f43f5e]">RUNTIME</span></h2>
          <div className="divider" />
          <p className="section-caption">Archected execution stacks configured for deterministic inference, spatial compilation, and resilient micro-services.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {SYSTEMS.map((sys, i) => (
            <motion.div
              key={sys.num}
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="panel-border panel p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono text-[#f43f5e] font-bold tracking-wider uppercase">{sys.cat}</span>
                <span className="text-xs font-mono text-[#666]">{sys.num}</span>
              </div>
              <h3 className="text-lg font-black text-white mb-2 tracking-tight">{sys.title}</h3>
              <p className="text-[#b3b3b3] text-xs font-mono leading-relaxed mb-4">{sys.desc}</p>
              <span className={`text-[10px] font-mono uppercase tracking-wider ${sys.metaColor === '#4ade80' ? 'text-[#4ade80]' : sys.metaColor === '#22d3ee' ? 'text-[#22d3ee]' : 'text-[#f43f5e]'}`}>
                {sys.meta}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="panel-border panel"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a]">
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#4ade80]"
              />
              <span className="text-[10px] font-mono text-[#b3b3b3] uppercase tracking-wider">CLUSTER HARDWARE BENCHMARK // LIVE TELEMETRY</span>
            </div>
            <span className="text-[10px] font-mono text-[#666]">REFRESH_CYCLE: 100ms</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {TELEMETRY.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-mono text-[#666] uppercase tracking-wider">{t.label}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className="text-xs font-mono text-[#4ade80] font-bold"
                  >
                    {t.value}
                  </motion.span>
                </div>
                <div className="h-1.5 w-full bg-[#151515] rounded-full overflow-hidden">
                  <motion.div
                    variants={barVariants}
                    custom={t.pct}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-[#f43f5e] to-[#4ade80]"
                  />
                </div>
                <div className="flex justify-between mt-1 text-[10px] font-mono">
                  <span className="text-[#666]">STABLE</span>
                  <span className="text-[#666]">ZERO PACKET LOSS</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
