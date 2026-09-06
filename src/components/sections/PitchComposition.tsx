import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const SEGMENT_META = [
  { key: 'peel', percent: 35, color: 'var(--bp-yellow)', label: '35%' },
  { key: 'alginate', percent: 42, color: 'var(--bp-white)', label: '42%' },
  { key: 'pectin', percent: 20, color: 'var(--bp-pale)', label: '20%' },
  { key: 'zinc', percent: 3, color: 'var(--bp-pale-2)', label: '' },
];

export default function PitchComposition() {
  const t = usePitchContent().composition;

  return (
    <Section id="composition" className="bp-root bp-composition">
      <p className="bp-eyebrow">{t.eyebrow}</p>
      <h2 className="bp-h2" style={{ marginTop: '0.5em' }}>{t.title}</h2>

      <motion.div
        className="bp-composition__bar"
        role="img"
        aria-label={t.barAria}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {SEGMENT_META.map((seg) => (
          <motion.div
            key={seg.key}
            className="bp-composition__segment"
            style={{ flexBasis: `${seg.percent}%`, background: seg.color, color: 'var(--bp-on-white)' }}
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {seg.label && <span>{seg.label}</span>}
          </motion.div>
        ))}
      </motion.div>
      <p className="bp-micro bp-composition__callout">{t.callout}</p>

      <div className="bp-grid bp-composition__cards">
        {t.cards.map((c, i) => (
          <div key={i} className="bp-composition__card">
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>

      <div className="bp-composition__warning">
        <p>{t.warning}</p>
      </div>
    </Section>
  );
}
