'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Check, Cloud, Monitor, Globe } from 'lucide-react';

const services = [
  {
    icon: Cloud, id: 'saas',
    title: 'SaaS / PaaS / IaaS Development',
    description: 'We build platforms businesses run on — not just apps. Multi-tenant architectures, subscription billing, RBAC, and infrastructure that scales from day one.',
    items: ['Multi-tenant architecture', 'Subscription & billing', 'Role-based access control', 'API-first development', 'Cloud infrastructure', 'CI/CD pipeline setup', 'Performance optimization', 'Security & compliance'],
    timeline: '8-16 weeks', stack: ['React/Next.js', 'Node.js/Python', 'PostgreSQL', 'Docker/K8s', 'AWS/GCP'],
  },
  {
    icon: Monitor, id: 'webapps',
    title: 'Web Applications',
    description: 'Custom internal tools, client portals, dashboards, and operational platforms that eliminate manual workflows.',
    items: ['Custom dashboard dev', 'Client portal & CRM', 'Real-time data', 'File management', 'Auth & SSO', 'API integration', 'Admin panels', 'Analytics'],
    timeline: '4-12 weeks', stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
  },
  {
    icon: Globe, id: 'websites',
    title: 'Websites',
    description: 'Marketing sites, agency portfolios, landing pages — with 3D, motion design, and strict performance budgets.',
    items: ['High-conversion landing pages', 'Agency & portfolio sites', '3D & interactive', 'SEO optimization', 'Animation & micro-interactions', 'CMS integration', 'Performance optimization', 'Analytics setup'],
    timeline: '2-6 weeks', stack: ['Next.js', 'Three.js', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F7F5]">
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16 sm:mb-20">
            <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono">Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#05060A] leading-tight mb-6 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Elite digital{' '}<span className="text-[#0326FC]">engineering</span>
            </h1>
            <p className="text-[#05060A]/50 text-base sm:text-lg max-w-2xl leading-relaxed">
              We don&apos;t just write code — we build systems that operate businesses. From infrastructure to interface, every line is intentional.
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-[#05060A]/5 p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0326FC] to-[#2563EB] flex items-center justify-center mb-5 shadow-sm">
                        <Icon size={22} className="text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#05060A] mb-4 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>{service.title}</h2>
                      <p className="text-[#05060A]/50 text-sm sm:text-base leading-relaxed mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs text-[#05060A]/40 uppercase tracking-wider font-medium">Timeline:</span>
                        <span className="px-3 py-1 text-xs font-medium text-[#0326FC] bg-[#E8EBFF] rounded-full">{service.timeline}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.stack.map((tech) => (
                          <span key={tech} className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-[#05060A]/50 bg-[#F7F7F5] border border-[#05060A]/5 rounded-lg">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#05060A]/50 text-xs uppercase tracking-widest mb-5 font-semibold">What&apos;s included</h3>
                      <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {service.items.map((item) => (
                          <div key={item} className="flex items-start gap-2.5 text-sm text-[#05060A]/50">
                            <Check size={13} className="text-[#0326FC] mt-0.5 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <Link href="/contact"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#0326FC] text-white text-sm font-medium rounded-xl hover:bg-[#0326FC]/90 transition-all shadow-sm">
                        Start a project <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
