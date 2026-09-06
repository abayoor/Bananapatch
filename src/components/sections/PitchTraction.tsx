import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Section from '../ui/Section';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

type Item = { date: string; title: string; body?: string };

function TimelineColumn({ title, items, statusFor }: { title: string; items: Item[]; statusFor: (i: number) => 'done' | 'active' | 'upcoming' }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] });

  return (
    <div className="bp-traction__col">
      <p className="bp-eyebrow" style={{ marginBottom: '1.25rem' }}>{title}</p>
      <div className="bp-traction__timeline" ref={ref}>
        <div className="bp-traction__line" aria-hidden="true">
          <motion.div className="bp-traction__line-fill" style={{ scaleY: scrollYProgress }} />
        </div>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <span className={`bp-traction__dot bp-traction__dot--${statusFor(i)}`} aria-hidden="true" />
              <span className="bp-traction__date">{item.date}</span>
              <strong>{item.title}</strong>
              {item.body && <span className="bp-traction__body">{item.body}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PitchTraction() {
  const t = usePitchContent().traction;

  return (
    <Section id="traction" className="bp-root bp-traction">
      <p className="bp-eyebrow">{t.eyebrow}</p>
      <h2 className="bp-h2" style={{ marginTop: '0.5em' }}>{t.title}</h2>

      <div className="bp-traction__grid">
        <TimelineColumn title={t.doneLabel} items={t.done} statusFor={() => 'done'} />
        <TimelineColumn title={t.nextLabel} items={t.next} statusFor={(i) => (i === 0 ? 'active' : 'upcoming')} />
      </div>

      <p className="bp-micro" style={{ marginTop: '2rem' }}>
        {t.note}
      </p>
    </Section>
  );
}
