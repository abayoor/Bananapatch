import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import Media from '../ui/Media';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), { stiffness: 90, damping: 18 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), { stiffness: 90, damping: 18 });

  const move = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="top" className="hero" onPointerMove={move}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="hero__badge">Патент подан · Kazpatent №490282</p>
          <h1>Технология, которая<br /><em>останавливает</em> кровотечение<br />за секунды.</h1>
          <p className="hero__lead">BananaPatch — гемостатический порошок из банановой кожуры. В 50 раз дешевле импортных аналогов и производится из органических отходов пищевой промышленности.</p>
          <div className="hero__actions">
            <Button href="#solution">Узнать больше <ArrowDown size={17} aria-hidden="true" /></Button>
            <Button href="#contacts" variant="secondary">Связаться с нами <ArrowUpRight size={17} aria-hidden="true" /></Button>
          </div>
        </motion.div>
        <motion.div
          className="hero__product"
          style={{ rotateX: reduceMotion ? 0 : rotateX, rotateY: reduceMotion ? 0 : rotateY }}
          animate={reduceMotion ? undefined : { y: [0, -13, 0], rotate: [-1.4, 1.4, -1.4] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Replace /public/images/hero-banana.png with the approved studio photo from the deck. */}
          <Media src="/images/hero-banana.png" alt="Целый жёлтый банан — сырьё BananaPatch" className="hero__banana" eager label="Студийное фото банана" />
          <span className="hero__halo" aria-hidden="true" />
        </motion.div>
      </div>
      <a className="scroll-cue" href="#problem"><span>Листайте, чтобы узнать больше</span><i><ArrowDown size={16} aria-hidden="true" /></i></a>
    </section>
  );
}
