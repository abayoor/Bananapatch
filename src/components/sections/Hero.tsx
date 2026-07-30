import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Button from '../ui/Button';
import Media from '../ui/Media';

const titleLines = [
  { text: 'Технология, которая' },
  { text: 'останавливает', accent: true },
  { text: 'кровотечение' },
  { text: 'за секунды.' },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), { stiffness: 90, damping: 18 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 90, damping: 18 });
  const glowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-120, 120]), { stiffness: 70, damping: 20 });
  const glowY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-80, 80]), { stiffness: 70, damping: 20 });
  const { scrollYProgress } = useScroll({ target: root, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0.18]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 185]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);

  const move = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="top" className="hero" ref={root} onPointerMove={move} onPointerLeave={resetPointer}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__particles" aria-hidden="true" />
      <motion.div className="hero__spotlight" style={{ x: reduceMotion ? 0 : glowX, y: reduceMotion ? 0 : glowY }} aria-hidden="true" />
      <div className="hero__content">
        <motion.div className="hero__copy" style={{ y: reduceMotion ? 0 : copyY, opacity: reduceMotion ? 1 : copyOpacity }}>
          <motion.p className="hero__badge" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            Патент подан · Kazpatent №490282
          </motion.p>
          <h1 aria-label="Технология, которая останавливает кровотечение за секунды.">
            {titleLines.map(({ text, accent }, index) => (
              <span className="hero__title-line" key={text} aria-hidden="true">
                <motion.span
                  className={accent ? 'hero__title-accent' : undefined}
                  initial={reduceMotion ? false : { y: '110%', rotate: 1.5 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.85, delay: 0.12 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p className="hero__lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.65 }}>
            BananaPatch — гемостатический порошок из банановой кожуры. В 50 раз дешевле импортных аналогов и производится из органических отходов пищевой промышленности.
          </motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72, duration: 0.6 }}>
            <Button href="#solution">Узнать больше <ArrowDown size={17} aria-hidden="true" /></Button>
            <Button href="#contacts" variant="secondary">Связаться с нами <ArrowUpRight size={17} aria-hidden="true" /></Button>
          </motion.div>
        </motion.div>

        <motion.div className="hero__visual" style={{ y: reduceMotion ? 0 : visualY, scale: reduceMotion ? 1 : visualScale }}>
          <motion.div
            className="hero__product"
            style={{ rotateX: reduceMotion ? 0 : rotateX, rotateY: reduceMotion ? 0 : rotateY }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.78, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.15, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__halo" aria-hidden="true"><i /><i /></span>
            <span className="hero__depth-shadow" aria-hidden="true" />
            <motion.div
              className="hero__packshot"
              initial={reduceMotion ? false : { clipPath: 'inset(100% 0 0 round 28px)' }}
              animate={{ clipPath: 'inset(0% 0 0 round 28px)' }}
              transition={{ duration: 1.15, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            >
              <Media src="/images/product-pouch-front.png" alt="BananaPatch: упаковка, порошок и гемостатическая повязка" className="hero__packshot-image" eager label="Готовый продукт BananaPatch" />
              <span className="hero__packshot-label">01 / готовый продукт</span>
              <span className="hero__scanline" aria-hidden="true" />
            </motion.div>
            <Media src="/images/hero-banana.png" alt="Целый жёлтый банан — сырьё BananaPatch" className="hero__banana" eager label="Студийное фото банана" />
          </motion.div>
          <motion.div className="hero__metric hero__metric--plant" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}>
            <strong>70%</strong><span>растительная основа</span>
          </motion.div>
          <motion.div className="hero__metric hero__metric--cost" animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
            <strong>50×</strong><span>доступнее аналогов</span>
          </motion.div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#problem"><span>Листайте, чтобы узнать больше</span><i><ArrowDown size={16} aria-hidden="true" /></i></a>
    </section>
  );
}
