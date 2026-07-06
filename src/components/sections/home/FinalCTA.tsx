'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[#111318] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0326FC]/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0326FC]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-6 font-mono">
          Let&apos;s Build
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
          Ready to ship something{' '}
          <span className="text-[#0326FC]">uncommon?</span>
        </h2>
        <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us what you&apos;re building. We&apos;ll respond within 24 hours with a roadmap and estimate.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0326FC] text-white font-medium rounded-xl text-sm hover:bg-[#0326FC]/90 transition-all duration-200 shadow-sm"
          >
            Start a Project <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="mailto:projects.abdulhannan@gmail.com"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/10 text-white/50 font-medium rounded-xl text-sm hover:border-white/20 hover:text-white transition-all duration-200"
          >
            <Mail size={15} /> Email Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
