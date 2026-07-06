'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { title: 'ClinicFlow Pro', category: 'Healthcare SaaS', description: 'Multi-clinic management platform with EHR, scheduling, billing, and patient portal.', result: '50+ clinics, 10K patients/mo', tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'], link: 'https://clinicflowpro.com' },
  { title: 'HarborLoop', category: 'Logistics Platform', description: 'Real-time logistics tracking, route optimization, and supply chain analytics.', result: '30% efficiency gain', tags: ['Next.js', 'Python', 'MongoDB', 'Docker'], link: 'https://harborloop.com' },
  { title: 'WorkStation', category: 'Productivity Suite', description: 'All-in-one project management, team chat, and workflow automation platform.', result: '15K+ active users, 4.8★', tags: ['React', 'TypeScript', 'GraphQL', 'GCP'], link: '#' },
  { title: 'Talent Tree JP', category: 'AI Recruitment', description: 'AI-powered job matching platform for the Japanese market with smart candidate scoring.', result: '5K+ organic users', tags: ['Next.js', 'AI/ML', 'PostgreSQL', 'Vercel'], link: 'https://talenttree.jp' },
  { title: 'Client Portal System', category: 'Web Application', description: 'Custom client portal with real-time document sharing, messaging, and project tracking.', result: '200+ clients, 99.9% uptime', tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'], link: '#' },
  { title: 'E-Commerce Platform', category: 'Web Application', description: 'Multi-vendor e-commerce platform with payment integration, inventory, and analytics.', result: '$2M+ GMV in year one', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], link: '#' },
];

export default function WorkPage() {
  return (
    <main className="bg-[#F7F7F5]">
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#05060A] leading-tight mb-6 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Shipped <span className="text-[#0326FC]">work</span>
            </h1>
            <p className="text-[#05060A]/50 text-base sm:text-lg max-w-2xl leading-relaxed">
              Every project is a proof point. Here&apos;s what we&apos;ve built — real products, real results for real businesses.
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {projects.map((project, i) => (
              <motion.a key={project.title} href={project.link} target={project.link !== '#' ? '_blank' : undefined} rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group block bg-white rounded-2xl border border-[#05060A]/5 p-5 sm:p-6 lg:p-8 hover:border-[#0326FC]/15 hover:shadow-card-hover transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[10px] font-mono font-medium tracking-wider text-[#0326FC] uppercase">{project.category}</span>
                      <span className="text-[#05060A]/10">/</span>
                      <span className="text-[10px] font-mono text-[#05060A]/20">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#05060A] group-hover:text-[#0326FC] transition-colors font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                      {project.title}
                    </h2>
                    <p className="text-[#05060A]/50 text-xs sm:text-sm mt-1.5 max-w-xl">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs text-[#05060A]/40 bg-[#F7F7F5] rounded-lg">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-2 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-medium text-[#05060A]/60 text-right">{project.result}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#05060A]/20 group-hover:text-[#0326FC] transition-colors">
                      View <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
