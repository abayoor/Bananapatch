import { useMemo } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const COUNT = 18;

type Particle = { id: number; angle: number; distance: number; delay: number; size: number; spin: number };

function makeParticles(): Particle[] {
  return Array.from({ length: COUNT }, (_, i) => ({
    id: i,
    angle: (i / COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.5,
    distance: 90 + Math.random() * 110,
    delay: Math.random() * 0.12,
    size: 20 + Math.random() * 22,
    spin: Math.random() > 0.5 ? 1 : -1,
  }));
}

// Asset-free "banana surprise": a burst of 🍌 emoji that pop out from the
// centre, wiggle a little, and fade — triggered by double-clicking/tapping
// the hero logo. Self-contained so PitchHero only has to mount/unmount it.
export default function BananaBurst({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion();
  const particles = useMemo(() => (active ? makeParticles() : []), [active]);

  return (
    <div className="bp-banana-burst" aria-hidden="true">
      <AnimatePresence>
        {active && particles.map((p) => {
          const x = Math.cos(p.angle) * p.distance;
          const y = Math.sin(p.angle) * p.distance;
          return (
            <motion.span
              key={p.id}
              className="bp-banana-burst__emoji"
              style={{ fontSize: p.size }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0, rotate: 0 }}
              animate={reduceMotion
                ? { opacity: [0, 1, 1, 0], x, y, scale: 1 }
                : {
                  opacity: [0, 1, 1, 0],
                  x: [0, x * 0.55, x],
                  y: [0, y * 0.55, y],
                  scale: [0, 1.3, 1, 0.85],
                  rotate: [0, 18 * p.spin, -14 * p.spin, 10 * p.spin, 0],
                }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.6 : 1.3, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              🍌
            </motion.span>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
