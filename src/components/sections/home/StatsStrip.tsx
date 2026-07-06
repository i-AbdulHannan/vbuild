'use client';

import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Projects Shipped', sub: 'Across SaaS, web & AI' },
  { value: 6, suffix: '', label: 'Hackathon Wins', sub: 'National & international' },
  { value: 5000, suffix: '+', label: 'Organic Users', sub: 'On Talent Tree JP alone' },
  { value: 4, suffix: '', label: 'Live Products', sub: 'Currently in market' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

export default function StatsStrip() {
  return (
    <section className="bg-[#111318] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 font-clash" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 text-sm font-medium mb-0.5">{stat.label}</div>
              <div className="text-white/30 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
