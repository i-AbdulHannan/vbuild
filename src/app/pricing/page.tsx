'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Send, Upload, X } from 'lucide-react';

const products = [
  { id: 'workstation-starter', name: 'WorkStation - Starter', price: 'PKR 5,000/mo', features: ['Up to 10 team members', 'Basic project management', 'Task tracking', 'Team chat', 'File sharing (5GB)'], popular: false },
  { id: 'workstation-pro', name: 'WorkStation - Pro', price: 'PKR 15,000/mo', features: ['Unlimited team members', 'Advanced project management', 'Gantt charts & timelines', 'Custom workflows', 'File sharing (50GB)', 'API access', 'Priority support'], popular: true },
  { id: 'workstation-enterprise', name: 'WorkStation - Enterprise', price: 'Custom', features: ['Everything in Pro', 'Dedicated server', 'SSO & SAML', 'Custom integrations', 'Unlimited storage', '24/7 support', 'SLA guarantee'], popular: false },
];

function OrderForm({ productId, onClose }: { productId: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', product: productId });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 sm:py-12">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E8EBFF] flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Check size={28} className="text-[#0326FC]" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#05060A] mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>Order received</h3>
        <p className="text-[#05060A]/50 text-sm max-w-md mx-auto mb-6">
          We will verify your payment and activate access within 24 hours. A confirmation will be sent to {form.email}.
        </p>
        <p className="text-[#05060A]/30 text-xs sm:text-sm">
          Questions?{' '}
          <a href="https://wa.me/923171243725" target="_blank" rel="noopener noreferrer" className="text-[#0326FC] hover:underline">Abdul</a>
          {' / '}
          <a href="https://wa.me/923703148937" target="_blank" rel="noopener noreferrer" className="text-[#0326FC] hover:underline">Saad</a>
        </p>
        <button onClick={onClose} className="mt-6 sm:mt-8 px-6 py-3 bg-[#0326FC] text-white rounded-xl text-sm font-medium hover:bg-[#0326FC]/90 transition-all">Close</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div className="mb-4 sm:mb-6 p-4 sm:p-5 rounded-xl bg-[#F7F7F5] border border-[#05060A]/5">
        <p className="text-xs text-[#05060A]/40 uppercase tracking-widest mb-2 font-medium">Payment Instructions</p>
        <p className="text-xs sm:text-sm text-[#05060A]/50 mb-3">Send payment to the account below and upload the screenshot:</p>
        <div className="p-3 rounded-lg bg-white border border-[#05060A]/5">
          <p className="text-xs text-[#05060A]/40 font-mono">
            Bank: [Bank Name]<br />
            Account: [Account Number]<br />
            EasyPaisa/JazzCash: [Number]<br />
            Confirm on WhatsApp after payment
          </p>
        </div>
        <div className="mt-3 flex gap-2 text-xs">
          <a href="https://wa.me/923171243725" target="_blank" rel="noopener noreferrer" className="text-[#0326FC] font-medium hover:underline">Abdul: +92 317 1243725</a>
          <span className="text-[#05060A]/20">|</span>
          <a href="https://wa.me/923703148937" target="_blank" rel="noopener noreferrer" className="text-[#0326FC] font-medium hover:underline">Saad: +92 370 3148937</a>
        </div>
      </div>
      <input type="text" placeholder="Full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card" />
      <input type="email" placeholder="Email address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card" />
      <input type="tel" placeholder="WhatsApp number" required value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
        className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card" />
      <label className="flex items-center justify-center gap-2.5 px-4 py-7 border-2 border-dashed border-[#05060A]/10 rounded-xl cursor-pointer hover:border-[#0326FC]/30 transition-all">
        <Upload size={18} className="text-[#05060A]/30" />
        <span className="text-sm text-[#05060A]/30">Upload payment screenshot</span>
        <input type="file" accept="image/*" className="hidden" />
      </label>
      <button type="submit" className="w-full py-3 bg-[#0326FC] text-white font-medium rounded-xl hover:bg-[#0326FC]/90 transition-all flex items-center justify-center gap-2 text-sm shadow-sm">
        Submit order <Send size={14} />
      </button>
    </form>
  );
}

function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ type: '', budget: '', timeline: '', description: '', name: '', email: '' });
  const handleNext = () => setStep(step + 1);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const projectTypes = ['Web Application', 'Website', 'SaaS Platform', 'Mobile App', 'AI Integration', 'Other'];

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E8EBFF] flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Check size={28} className="text-[#0326FC]" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#05060A] mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>Quote request sent</h3>
        <p className="text-[#05060A]/50 text-sm max-w-md mx-auto">We will review your project and get back within 24 hours with a custom proposal.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p className="text-sm text-[#05060A]/60 mb-4 font-medium">What type of project?</p>
          <div className="grid grid-cols-2 gap-2.5">
            {projectTypes.map((type) => (
              <button key={type} type="button" onClick={() => { setForm({ ...form, type }); handleNext(); }}
                className="p-3.5 sm:p-4 rounded-xl border border-[#05060A]/5 bg-white text-[#05060A]/50 text-xs sm:text-sm hover:border-[#0326FC]/30 hover:text-[#05060A] transition-all text-left shadow-card hover:shadow-card-hover">{type}</button>
            ))}
          </div>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <p className="text-sm text-[#05060A]/60 mb-2 font-medium">Budget range?</p>
          <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card" required>
            <option value="">Select range</option>
            <option value="Under PKR 500K">Under PKR 500,000</option>
            <option value="PKR 500K-1.5M">PKR 500,000 - 1,500,000</option>
            <option value="PKR 1.5M-5M">PKR 1,500,000 - 5,000,000</option>
            <option value="PKR 5M+">PKR 5,000,000+</option>
          </select>
          <p className="text-sm text-[#05060A]/60 mb-2 mt-4 font-medium">Timeline?</p>
          <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card" required>
            <option value="">Select timeline</option>
            <option value="1-2 months">1-2 months</option>
            <option value="2-4 months">2-4 months</option>
            <option value="4-6 months">4-6 months</option>
            <option value="6+ months">6+ months</option>
          </select>
          <div className="flex gap-3 mt-6">
            <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-[#05060A]/10 text-[#05060A]/40 rounded-xl text-sm hover:border-[#05060A]/20 transition-all">Back</button>
            <button type="button" onClick={handleNext} className="flex-1 py-3 bg-[#0326FC] text-white rounded-xl text-sm font-medium hover:bg-[#0326FC]/90 transition-all shadow-sm">Next</button>
          </div>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-3.5">
          <textarea placeholder="Describe your project" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} required
            className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card resize-none" />
          <input type="text" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card" required />
          <input type="email" placeholder="Your email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-[#05060A]/5 rounded-xl text-[#05060A] text-sm placeholder:text-[#05060A]/30 focus:outline-none focus:border-[#0326FC]/40 transition-all shadow-card" required />
          <div className="flex gap-3 mt-6">
            <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-[#05060A]/10 text-[#05060A]/40 rounded-xl text-sm hover:border-[#05060A]/20 transition-all">Back</button>
            <button type="submit" className="flex-1 py-3 bg-[#0326FC] text-white rounded-xl text-sm font-medium hover:bg-[#0326FC]/90 transition-all flex items-center justify-center gap-2 shadow-sm">
              Submit <Send size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </form>
  );
}

export default function PricingPage() {
  const [showOrderForm, setShowOrderForm] = useState<string | null>(null);

  return (
    <main className="bg-[#F7F7F5]">
      <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-14 sm:mb-20">
            <span className="inline-block text-[#0326FC] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono">Pricing & Products</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#05060A] leading-tight mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Buy a product or <span className="text-[#0326FC]">commission a build</span>
            </h1>
          </motion.div>

          <section className="mb-20 sm:mb-32">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#05060A] mb-8 sm:mb-12" style={{ fontFamily: "'Clash Display', sans-serif" }}>SaaS Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {products.map((product) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className={`relative bg-white rounded-2xl border p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-shadow ${product.popular ? 'border-[#0326FC]/30 ring-1 ring-[#0326FC]/10' : 'border-[#05060A]/5'}`}>
                  {product.popular && (
                    <span className="absolute -top-3 left-5 sm:left-6 px-3 py-1 bg-[#0326FC] text-white text-[10px] sm:text-xs rounded-full font-medium shadow-sm">Most popular</span>
                  )}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#05060A] mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>{product.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-[#05060A] mb-5 sm:mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>{product.price}</div>
                  <ul className="space-y-2.5 mb-6 sm:mb-8">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#05060A]/50">
                        <Check size={13} className="text-[#0326FC] mt-0.5 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setShowOrderForm(product.id)}
                    className="w-full py-3 rounded-xl bg-[#0326FC] text-white text-sm font-medium hover:bg-[#0326FC]/90 transition-all flex items-center justify-center gap-2 shadow-sm">
                    Buy Now <ArrowRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#05060A] mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>Custom Project Quote</h2>
            <p className="text-[#05060A]/50 text-sm mb-8 sm:mb-12 max-w-xl">For custom web apps, websites, or SaaS builds. Tell us what you need and we will send a proposal.</p>
            <div className="max-w-xl">
              <div className="bg-white rounded-2xl border border-[#05060A]/5 p-6 sm:p-8 shadow-card">
                <QuoteForm />
              </div>
            </div>
          </section>
        </div>
      </section>

      {showOrderForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-white rounded-2xl border border-[#05060A]/5 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#05060A]" style={{ fontFamily: "'Clash Display', sans-serif" }}>Complete Order</h3>
              <button onClick={() => setShowOrderForm(null)} className="text-[#05060A]/20 hover:text-[#05060A] transition-colors"><X size={18} /></button>
            </div>
            <OrderForm productId={showOrderForm} onClose={() => setShowOrderForm(null)} />
          </motion.div>
        </div>
      )}
    </main>
  );
}
