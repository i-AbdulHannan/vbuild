'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
      dot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        cursor.style.width = '56px';
        cursor.style.height = '56px';
        cursor.style.borderColor = '#0326FC';
        cursor.style.backgroundColor = 'rgba(3, 38, 252, 0.06)';
        cursor.style.backdropFilter = 'blur(4px)';
      }
    };

    const handleMouseOut = () => {
      cursor.style.width = '32px';
      cursor.style.height = '32px';
      cursor.style.borderColor = 'rgba(5, 6, 10, 0.15)';
      cursor.style.backgroundColor = 'transparent';
      cursor.style.backdropFilter = 'none';
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          width: '32px',
          height: '32px',
          border: '1px solid rgba(5, 6, 10, 0.15)',
          borderRadius: '50%',
          top: 0,
          left: 0,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          width: '4px',
          height: '4px',
          backgroundColor: '#0326FC',
          borderRadius: '50%',
          top: 0,
          left: 0,
          willChange: 'transform',
        }}
      />
    </>
  );
}
