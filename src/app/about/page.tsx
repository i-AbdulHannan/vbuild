'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Code, Users, Award, MapPin, ExternalLink } from 'lucide-react';

const team = [
  {
    initials: 'AH',
    name: 'Abdul Hannan',
    role: 'Founder & Lead Engineer',
    description: 'Visionary behind VBuild. Abdul architects systems that scale — from early-stage MVPs to production platforms serving thousands. He brings deep full-stack expertise across React, Node.js, and cloud infrastructure.',
    instagram: 'https://www.instagram.com/_visionbuild/',
    linkedin: 'https://www.linkedin.com/company/v-isionbuild/',
    gradient: 'from-[#0326FC] to-[#2563EB]',
  },
  {
    initials: 'SK',
    name: 'Saad Kamal',
    role: 'CTO & Full-Stack Engineer',
    description: 'Saad bridges product thinking with technical execution. With a portfolio spanning SaaS, e-commerce, and AI tools, he ensures every project is engineered for performance, maintainability, and real user impact.',
    instagram: 'https://www.instagram.com/dev_saadkamal/',
    linkedin: 'https://www.linkedin.com/in/dev-saadkamal/',
    portfolio: 'https://dev-saadkamal-portfolio2.vercel.app/',
    gradient: 'from-[#2563EB] to-[#3B82F6]',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F7F7F5]">
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 sm:mb-20"
          >
            <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono">
              About VBuild
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#05060A] leading-tight mb-6 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Karachi-based software{' '}
              <span className="text-[#0326FC]">engineering agency</span>
            </h1>
            <p className="text-[#05060A]/50 text-base sm:text-lg max-w-2xl leading-relaxed">
              We build SaaS platforms, web applications, and AI products — engineered with intent, shipped with speed. Founded by Abdul Hannan, built by a team that ships.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-20">
            {[
              { icon: Code, value: '100+', label: 'Projects' },
              { icon: Users, value: '5K+', label: 'Users' },
              { icon: Award, value: '6', label: 'Hackathons' },
              { icon: MapPin, value: 'Karachi', label: 'HQ' },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl border border-[#05060A]/5 p-5 sm:p-6 text-center shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E8EBFF] flex items-center justify-center mx-auto mb-3">
                    <Icon size={17} className="text-[#0326FC]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#05060A] font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>{v.value}</div>
                  <div className="text-xs text-[#05060A]/40 mt-0.5">{v.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-[#05060A]/5 p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className="text-xl sm:text-2xl font-bold text-white font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                      {member.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#05060A] font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                      {member.name}
                    </h2>
                    <p className="text-[#0326FC] text-sm font-medium mt-0.5 mb-3">{member.role}</p>
                    <p className="text-[#05060A]/50 text-sm sm:text-base leading-relaxed mb-5">{member.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#05060A]/40 hover:text-[#0326FC] transition-colors">
                        Instagram <ExternalLink size={11} />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#05060A]/40 hover:text-[#0326FC] transition-colors">
                        LinkedIn <ExternalLink size={11} />
                      </a>
                      {member.portfolio && (
                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#05060A]/40 hover:text-[#0326FC] transition-colors">
                          Portfolio <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0326FC] text-white font-medium rounded-xl text-sm hover:bg-[#0326FC]/90 transition-all shadow-sm">
              Work with us <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
