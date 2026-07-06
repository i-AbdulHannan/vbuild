'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, BarChart3, Globe, Users } from 'lucide-react';

const FloatingDevices = dynamic(() => import('@/components/3d/FloatingDevices'), { ssr: false });

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      container.style.setProperty('--mouse-x', `${x * 20}px`);
      container.style.setProperty('--mouse-y', `${y * 20}px`);
    };
    container.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => container.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F7F7F5]">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E8EBFF] to-transparent opacity-50" />

      <div className="absolute inset-0 opacity-70">
        <FloatingDevices />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8EBFF] rounded-full text-[#0326FC] text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#0326FC] rounded-full" />
              Software Engineering Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#05060A] leading-[1.1] mb-6"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              We engineer{' '}
              <span className="text-[#0326FC] relative">
                uncommon
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5C50 2 150 2 199 5" stroke="#0326FC" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
              <br />software for business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#05060A]/50 text-base sm:text-lg max-w-lg leading-relaxed mb-8"
            >
              Karachi-based agency building SaaS platforms, web applications, and AI products that scale. 100+ projects shipped.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0326FC] text-white font-medium rounded-xl text-sm hover:bg-[#0326FC]/90 transition-all duration-200 shadow-sm"
              >
                Start a Project
                <ArrowRight size="15" className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#05060A]/10 text-[#05060A]/60 font-medium rounded-xl text-sm hover:border-[#05060A]/20 hover:text-[#05060A] transition-all duration-200"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-[#05060A]/5"
            >
              {[
                { icon: BarChart3, label: '100+', sub: 'Projects' },
                { icon: Users, label: '5K+', sub: 'Users' },
                { icon: Globe, label: '6', sub: 'Hackathons' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.icon size={16} className="text-[#0326FC]" />
                  <div>
                    <span className="text-sm font-semibold text-[#05060A]">{item.label}</span>
                    <span className="text-xs text-[#05060A]/40 ml-1">{item.sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#0326FC]/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl border border-[#05060A]/5 shadow-card p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#05060A]/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-[#05060A]/30 font-mono">agency.vbuild.io</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'SaaS Platforms', value: '12 shipped', color: 'bg-[#0326FC]' },
                    { label: 'Web Apps', value: '45+ built', color: 'bg-[#0326FC]/80' },
                    { label: 'AI Products', value: '8 launched', color: 'bg-[#0326FC]/60' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2">
                      <span className="text-sm text-[#05060A]/60">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-[#05060A]">{item.value}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
