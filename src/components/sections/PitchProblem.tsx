import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Clock, TriangleAlert } from 'lucide-react';
import Section from '../ui/Section';
import StatCard from '../ui/StatCard';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = [<TriangleAlert size={22} key="a" />, <Clock size={22} key="b" />, <Activity size={22} key="c" />];

export default function PitchProblem() {
  const t = usePitchContent().problem;
  const bgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: bgRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="problem" ref={bgRef} className="bp-root bp-problem">
      <div className="bp-problem__bg" aria-hidden="true">
        <motion.img src="/images/problem-bg.png" alt="" style={{ y }} />
      </div>

      <Section containerClassName="bp-problem__content" animate={false}>
        <motion.p
          className="bp-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {t.eyebrow}
        </motion.p>
        <motion.h2
          className="bp-h2"
          style={{ marginTop: '0.4em' }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
        >
          {t.title}
        </motion.h2>
        <motion.p
          className="bp-body"
          style={{ marginTop: '0.75em', maxWidth: '48ch' }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          {t.copy}
        </motion.p>

        <motion.div
          className="bp-grid"
          style={{ marginTop: '2.5rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
        >
          {t.stats.map((s, i) => (
            <motion.div key={s.number} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: EASE }}>
              <StatCard icon={ICONS[i]} number={s.number} label={s.label} />
            </motion.div>
          ))}
        </motion.div>

        <p className="bp-micro" style={{ marginTop: '2rem', maxWidth: '70ch' }}>
          {t.sources}
        </p>
      </Section>
    </section>
  );
}
