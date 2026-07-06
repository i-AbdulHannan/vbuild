'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ClinicFlow Pro',
    category: 'Healthcare SaaS',
    description: 'Multi-clinic management platform with EHR, scheduling, billing, and patient portal.',
    result: '50+ clinics, 10K patients/mo',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: '#0326FC',
  },
  {
    title: 'HarborLoop',
    category: 'Logistics Platform',
    description: 'Real-time logistics tracking, route optimization, and supply chain analytics.',
    result: '30% efficiency gain',
    tags: ['Next.js', 'Python', 'MongoDB'],
    color: '#2563EB',
  },
  {
    title: 'WorkStation',
    category: 'Productivity Suite',
    description: 'All-in-one project management, team chat, and workflow automation platform.',
    result: '15K+ active users',
    tags: ['React', 'TypeScript', 'GraphQL'],
    color: '#3B82F6',
  },
  {
    title: 'Talent Tree JP',
    category: 'AI Recruitment',
    description: 'AI-powered job matching platform for the Japanese market with smart candidate scoring.',
    result: '5K+ organic users',
    tags: ['Next.js', 'AI/ML', 'Vercel'],
    color: '#0326FC',
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-20 gap-4"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05060A] leading-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Shipped &{' '}
              <span className="text-[#0326FC]">shipping</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#05060A]/40 hover:text-[#0326FC] transition-colors flex-shrink-0"
          >
            View all projects <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-[#05060A]/5 p-6 sm:p-8 hover:border-[#0326FC]/15 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono font-medium tracking-wider text-[#05060A]/30 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#05060A] mt-1 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    {project.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#F7F7F5] flex items-center justify-center group-hover:bg-[#E8EBFF] transition-colors">
                  <ExternalLink size={14} className="text-[#05060A]/30 group-hover:text-[#0326FC] transition-colors" />
                </div>
              </div>
              <p className="text-[#05060A]/50 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-[#05060A]/40 bg-[#F7F7F5] rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-[#0326FC] flex-shrink-0 ml-3">{project.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
