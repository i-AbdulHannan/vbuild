import Link from 'next/link';
import Image from 'next/image';

const navItems = ['Home', 'About', 'Services', 'Work', 'Pricing', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-[#111318] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Image src="/logo.png" alt="VBuild" width={120} height={36} className="h-8 sm:h-9 w-auto brightness-0 invert mb-4" />
            <p className="text-white/40 text-sm max-w-md leading-relaxed">
              Uncommon software engineering. We build SaaS platforms, web applications, and AI products that run businesses — not just apps.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/_visionbuild/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/v-isionbuild/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/hannanbuilds" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            </div>
            <p className="mt-6 text-white/20 text-xs">
              Karachi, Pakistan
            </p>
          </div>

          <div>
            <h4 className="text-white/50 text-xs uppercase tracking-widest mb-5 font-semibold">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white/35 hover:text-white text-sm transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/50 text-xs uppercase tracking-widest mb-5 font-semibold">Contact</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:projects.abdulhannan@gmail.com" className="text-white/35 hover:text-white text-sm transition-colors duration-200">
                projects.abdulhannan@gmail.com
              </a>
              <a href="https://wa.me/923171243725" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white text-sm transition-colors duration-200">
                Abdul: +92 317 1243725
              </a>
              <a href="https://wa.me/923703148937" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white text-sm transition-colors duration-200">
                Saad: +92 370 3148937
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} VBuild. All rights reserved.
          </p>
          <p className="text-white/10 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Built with uncommon intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
