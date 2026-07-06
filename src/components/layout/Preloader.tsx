'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [show, setShow] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('vbuild-loaded');
    if (hasLoaded) {
      setIsComplete(true);
      setShow(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const centerX = W / 2;
    const centerY = H / 2;
    const particleCount = Math.min(120, Math.floor((W * H) / 15000));

    const particles: {
      x: number; y: number;
      targetX: number; targetY: number;
      vx: number; vy: number;
      size: number; alpha: number;
    }[] = [];

    const radius = Math.min(W, H) * 0.12;

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const rOffset = radius * (0.6 + Math.random() * 0.6);
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        targetX: centerX + Math.cos(angle) * rOffset,
        targetY: centerY + Math.sin(angle) * rOffset,
        vx: 0, vy: 0,
        size: 2 + Math.random() * 2.5,
        alpha: 0.3 + Math.random() * 0.4,
      });
    }

    const startTime = Date.now();
    let prog = 0;
    let lastTime = startTime;

    const animate = () => {
      const now = Date.now();
      const dt = Math.min((now - lastTime) / 16, 2);
      lastTime = now;
      const elapsed = now - startTime;
      prog = Math.min(elapsed / 2800, 1);
      setProgress(Math.round(prog * 100));

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#05060A';
      ctx.fillRect(0, 0, W, H);

      const ease = 1 - Math.pow(1 - prog, 3);
      const gatherPhase = Math.min(ease * 1.5, 1);

      particles.forEach((p) => {
        const tx = p.x + (p.targetX - p.x) * gatherPhase;
        const ty = p.y + (p.targetY - p.y) * gatherPhase;
        p.vx += (tx - p.x) * 0.08 * dt;
        p.vy += (ty - p.y) * 0.08 * dt;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (prog > 0.3) {
          const glow = Math.min((prog - 0.3) / 0.3, 1);
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          gradient.addColorStop(0, `rgba(3, 38, 252, ${p.alpha * glow * 0.3})`);
          gradient.addColorStop(1, 'rgba(3, 38, 252, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (0.5 + gatherPhase * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(3, 38, 252, ${p.alpha * (0.3 + gatherPhase * 0.7)})`;
        ctx.fill();
      });

      if (gatherPhase > 0.6) {
        const lineAlpha = (gatherPhase - 0.6) / 0.4;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80 && dist > 0) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(3, 38, 252, ${(1 - dist / 80) * 0.25 * lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      const centerGlow = Math.max(0, (gatherPhase - 0.8) / 0.2);
      if (centerGlow > 0) {
        const grd = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 0.8);
        grd.addColorStop(0, `rgba(3, 38, 252, ${centerGlow * 0.12})`);
        grd.addColorStop(1, 'rgba(3, 38, 252, 0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      if (prog < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem('vbuild-loaded', 'true');
          setTimeout(() => setShow(false), 700);
        }, 400);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[9998] bg-[#05060A]"
        >
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12">
            <span
              className="text-5xl md:text-7xl font-bold text-white/10"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {progress}%
            </span>
          </div>
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full ${isComplete ? 'bg-[#0326FC]' : 'bg-white/20'} animate-pulse`} />
            <span
              className="text-xs text-white/20 tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {isComplete ? 'Ready' : 'Loading'}
            </span>
          </div>
          <div className="absolute top-8 md:top-12 left-8 md:left-12">
            <img src="/logo.png" alt="VBuild" className="h-6 sm:h-8 w-auto brightness-0 invert opacity-30" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
