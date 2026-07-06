'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Cloud, Monitor, Globe, Check } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'SaaS / PaaS / IaaS',
    description: 'We architect and build full platforms — multi-tenant, subscription-ready, with RBAC, billing, and infrastructure that scales from day one.',
    gradient: 'from-[#0326FC] to-[#2563EB]',
    highlights: ['Multi-tenant architecture', 'Subscription billing', 'Cloud infrastructure'],
  },
  {
    icon: Monitor,
    title: 'Web Applications',
    description: 'Custom dashboards, client portals, internal tools, and operational platforms that eliminate manual workflows and drive efficiency.',
    gradient: 'from-[#2563EB] to-[#3B82F6]',
    highlights: ['Custom dashboards', 'Real-time processing', 'API integrations'],
  },
  {
    icon: Globe,
    title: 'Websites & Marketing',
    description: 'High-conversion marketing sites, agency portfolios, and landing experiences with 3D, motion design, and strict performance budgets.',
    gradient: 'from-[#3B82F6] to-[#60A5FA]',
    highlights: ['3D & interactive', 'SEO optimized', 'Motion design'],
  },
];

export default function ServicesOverview() {
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
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05060A] leading-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Full-spectrum software{' '}
            <span className="text-[#0326FC]">engineering</span>
          </h2>
          <p className="text-[#05060A]/50 text-base sm:text-lg mt-4 leading-relaxed">
            From infrastructure to interface — we ship production-grade software that businesses rely on daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#F7F7F5] rounded-2xl p-6 sm:p-8 border border-[#05060A]/5 hover:border-[#0326FC]/20 hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#05060A] mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-[#05060A]/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[#05060A]/40">
                      <Check size={12} className="text-[#0326FC]" />
                      {h}
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#05060A]/40 group-hover:text-[#0326FC] transition-colors duration-200"
                >
                  Explore service <ArrowUpRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
