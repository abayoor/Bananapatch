import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
};

function formatNumber(n: number, decimals: number) {
  return n.toLocaleString('ru-RU', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export default function AnimatedNumber({ value, decimals = 0, duration = 1.2, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(formatNumber(0, decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(formatNumber(v, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, duration, decimals, motionValue]);

  return <span ref={ref} className={className}>{display}</span>;
}
