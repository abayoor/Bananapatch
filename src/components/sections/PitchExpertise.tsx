import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Chip from '../ui/Chip';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const PHOTOS = ['/images/expert-madyarov.png', undefined];

type Expert = {
  name: string;
  role: string;
  credentials: string[];
  quote: string;
  quoteSmall?: string;
  signature: string;
};

function ExpertBlock({ expert, photo, reversed }: { expert: Expert; photo?: string; reversed?: boolean }) {
  const words = expert.quote.split(' ');

  return (
    <div className={`bp-expertise__layout ${reversed ? 'bp-expertise__layout--reversed' : ''}`}>
      <motion.div
        className="bp-expertise__portrait-col"
        initial={{ opacity: 0, y: 32, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bp-expertise__portrait">
          {photo
            ? <img src={photo} alt={expert.name} />
            : <span className="bp-expertise__portrait-fallback">{expert.name.split(' ').map((p) => p[0]).join('')}</span>}
        </div>
        <h3 className="bp-expertise__name">{expert.name}</h3>
        <p className="bp-body" style={{ color: 'var(--bp-pale)' }}>{expert.role}</p>
        <div className="bp-expertise__chips">
          {expert.credentials.map((c) => <Chip key={c}>{c}</Chip>)}
        </div>
      </motion.div>

      <div className="bp-expertise__quote-col">
        <div className="bp-expertise__quote-card">
          <span className="bp-expertise__quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="bp-expertise__quote">
            {words.map((w, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </p>
          {expert.quoteSmall && (
            <>
              <hr />
              <p className="bp-expertise__quote-small">{expert.quoteSmall}</p>
            </>
          )}
          <p className="bp-micro">{expert.signature}</p>
        </div>
      </div>
    </div>
  );
}

export default function PitchExpertise() {
  const t = usePitchContent().expertise;

  return (
    <Section id="expertise" className="bp-root bp-expertise">
      <p className="bp-eyebrow">{t.eyebrow}</p>
      <h2 className="bp-h2" style={{ marginTop: '0.5em' }}>{t.title}</h2>

      <div className="bp-expertise__list">
        {t.experts.map((expert, i) => (
          <ExpertBlock key={expert.name} expert={expert} photo={PHOTOS[i]} reversed={i % 2 === 1} />
        ))}
      </div>

      <div className="bp-expertise__proof">
        <p className="bp-eyebrow" style={{ color: 'var(--bp-white)' }}>{t.proofTitle}</p>
        <p className="bp-body">{t.proofBody}</p>
      </div>
    </Section>
  );
}
