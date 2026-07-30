import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.28 });

  if (reducedMotion) return null;

  return (
    <span className="scroll-progress" aria-hidden="true">
      <motion.span style={{ scaleX }} />
    </span>
  );
}
