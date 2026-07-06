'use client';

import { useRef, useEffect } from 'react';

const items = [
  'SaaS Development', 'PaaS Architecture', 'IaaS Infrastructure',
  'Web Applications', 'Website Development', 'AI Integration',
  'Cloud Engineering', 'Product Design',
];

export default function MarqueeStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationId: number;
    let pos = 0;
    const animate = () => {
      pos -= 0.5;
      if (pos <= -container.scrollWidth / 2) pos = 0;
      container.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="py-4 border-y border-[#05060A]/5 overflow-hidden bg-white">
      <div ref={containerRef} className="flex gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-xs font-medium text-[#05060A]/20 tracking-wider uppercase font-mono">
            <span className="w-1.5 h-1.5 bg-[#0326FC] rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
