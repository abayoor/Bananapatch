import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type StatCounterProps = {
  end: number;
  display: (value: number) => string;
  label: string;
  delay?: number;
};

export default function StatCounter({ end, display, label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.65 });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(reducedMotion ? end : 0);

  useEffect(() => {
    if (!visible) return;
    if (reducedMotion) {
      setValue(end);
      return;
    }
    const startAt = performance.now();
    const duration = 1150;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(end * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, reducedMotion, visible]);

  return (
    <motion.div
      className="stat-card"
      ref={ref}
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={reducedMotion ? undefined : { y: -7 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <strong>{display(value)}</strong>
      <span>{label}</span>
    </motion.div>
  );
}
