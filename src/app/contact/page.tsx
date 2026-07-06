'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Mail, MessageCircle, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <main className="bg-[#F7F7F5]">
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#05060A] leading-tight mb-6 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Let&apos;s <span className="text-[#0326FC]">talk</span>
            </h1>
            <p className="text-[#05060A]/50 text-base sm:text-lg max-w-xl leading-relaxed">
              Tell us about your project. We&apos;ll respond within 24 hours with a plan and estimate.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 focus:ring-1 focus:ring-[#0326FC]/20 transition-all shadow-card" />
                  <input type="email" placeholder="Your email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 focus:ring-1 focus:ring-[#0326FC]/20 transition-all shadow-card" />
                  <textarea placeholder="Tell us about your project — what are you building, who is it for, what problem does it solve?" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                    className="w-full px-4 sm:px-5 py-3.5 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 focus:ring-1 focus:ring-[#0326FC]/20 transition-all shadow-card resize-none" />
                  <button type="submit"
                    className="w-full py-3.5 bg-[#0326FC] text-white font-medium rounded-xl hover:bg-[#0326FC]/90 transition-all flex items-center justify-center gap-2.5 text-sm shadow-sm">
                    Send message <Send size={15} />
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E8EBFF] flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-[#0326FC]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#05060A] mb-2 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>Message sent</h3>
                  <p className="text-[#05060A]/50 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-10">
              <div>
                <h3 className="text-[#05060A]/40 text-xs uppercase tracking-widest mb-4 font-semibold">Contact Details</h3>
                <div className="space-y-3.5">
                  {[
                    { icon: Mail, label: 'projects.abdulhannan@gmail.com', href: 'mailto:projects.abdulhannan@gmail.com' },
                    { icon: MessageCircle, label: 'Abdul Hannan', href: 'https://wa.me/923171243725' },
                  { icon: MessageCircle, label: 'Saad Kamal', href: 'https://wa.me/923703148937' },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3.5 text-[#05060A]/50 hover:text-[#0326FC] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#05060A]/5 flex items-center justify-center group-hover:bg-[#E8EBFF] group-hover:border-[#0326FC]/20 transition-all shadow-card">
                        <item.icon size={16} />
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[#05060A]/40 text-xs uppercase tracking-widest mb-4 font-semibold">Follow Us</h3>
                <div className="space-y-3.5">
                  {[
                    { icon: ExternalLink, label: 'Instagram @_visionbuild', href: 'https://www.instagram.com/_visionbuild/' },
                    { icon: ExternalLink, label: 'LinkedIn /v-isionbuild', href: 'https://www.linkedin.com/company/v-isionbuild/' },
                    { icon: ExternalLink, label: 'GitHub /hannanbuilds', href: 'https://github.com/hannanbuilds' },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3.5 text-[#05060A]/50 hover:text-[#0326FC] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#05060A]/5 flex items-center justify-center group-hover:bg-[#E8EBFF] group-hover:border-[#0326FC]/20 transition-all shadow-card">
                        <item.icon size={16} />
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#05060A]/5">
                <p className="text-[#05060A]/30 text-sm leading-relaxed">
                  Based in <span className="text-[#05060A]/50 font-medium">Karachi, Pakistan</span>. Available for remote collaboration worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
