'use client';

import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Discovery', description: 'We learn your business, users, and goals through structured workshops.', color: '#0326FC' },
  { step: '02', title: 'Architecture', description: 'System design, tech stack, and roadmap — approved before a line of code is written.', color: '#1D4ED8' },
  { step: '03', title: 'Build', description: 'Agile development with weekly demos, CI/CD, and full transparency.', color: '#2563EB' },
  { step: '04', title: 'Launch', description: 'Production deployment, load testing, monitoring, and handover documentation.', color: '#3B82F6' },
  { step: '05', title: 'Scale', description: 'Post-launch support, performance optimization, and continuous improvement.', color: '#60A5FA' },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 sm:mb-20"
        >
          <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05060A] leading-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            From concept to{' '}
            <span className="text-[#0326FC]">production</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-[#0326FC]/40 via-[#3B82F6]/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 mx-auto mb-6" style={{ borderColor: step.color }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                </div>
                <div className="bg-[#F7F7F5] rounded-2xl p-6 sm:p-8 border border-[#05060A]/5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl sm:text-3xl font-bold font-clash" style={{ fontFamily: "'Clash Display', sans-serif", color: step.color }}>
                      {step.step}
                    </span>
                    <div className="flex-1 h-px bg-[#05060A]/5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#05060A] mb-2 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-[#05060A]/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
