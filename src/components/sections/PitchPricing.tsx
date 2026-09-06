import { motion } from 'framer-motion';
import Section from '../ui/Section';
import AnimatedNumber from '../ui/AnimatedNumber';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const PRICES = [38700, 11500, 10700, 8990, 7300, 958];
const APPROX = [true, false, true, true, false, false];
const MULT = ['40×', '12×', '11×', '9×', '8×', '1×'];
const MAX_PRICE = 38700;

const SCATTER_META = [
  { price: 958, y: 0.10, featured: true },
  { price: 7300, y: 0.16 },
  { price: 8990, y: 0.32 },
  { price: 10700, y: 0.50 },
  { price: 11500, y: 0.84 },
  { price: 38700, y: 0.95 },
];

const X_MIN = 900, X_MAX = 45000;
function xPercent(price: number) {
  return ((Math.log(price) - Math.log(X_MIN)) / (Math.log(X_MAX) - Math.log(X_MIN))) * 100;
}

export default function PitchPricing() {
  const t = usePitchContent().pricing;
  const scatter = SCATTER_META.map((m, i) => ({ ...m, name: t.ladder[[5, 4, 3, 2, 1, 0][i]].name.split(',')[0] }));

  const formatFor = (y: number) => (y < 0.3 ? t.formatHousehold : y < 0.7 ? t.formatMixed : t.formatPro);

  return (
    <Section id="pricing" className="bp-root bp-pricing">
      <p className="bp-eyebrow">{t.eyebrow}</p>
      <h2 className="bp-h2" style={{ marginTop: '0.5em' }}>{t.title}</h2>

      <motion.div
        className="bp-pricing__ladder"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {t.ladder.map((row, i) => (
          <motion.div
            key={i}
            className={`bp-pricing__row ${i === 5 ? 'bp-pricing__row--featured' : ''}`}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bp-pricing__row-head">
              <div>
                <strong>{row.name}</strong>
                <span>{row.desc}</span>
              </div>
              <div className="bp-pricing__row-price">
                <span>{APPROX[i] && '≈'}<AnimatedNumber value={PRICES[i]} /> ₸</span>
                <small>{MULT[i]}</small>
              </div>
            </div>
            <div className="bp-pricing__bar-track">
              <motion.div
                className="bp-pricing__bar"
                style={{ width: `${(PRICES[i] / MAX_PRICE) * 100}%` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="bp-pricing__scatter-wrap">
        <p className="bp-eyebrow" style={{ marginBottom: '1rem' }}>{t.scatterTitle}</p>
        <svg viewBox="0 0 640 320" className="bp-pricing__scatter" role="img" aria-label={t.scatterAria}>
          <rect x="0" y="224" width="180" height="96" className="bp-pricing__niche" />
          <text x="10" y="245" className="bp-pricing__niche-label">{t.nicheLabel}</text>

          <line x1="0" y1="320" x2="640" y2="320" className="bp-pricing__axis" />
          <line x1="0" y1="0" x2="0" y2="320" className="bp-pricing__axis" />
          <text x="4" y="14" className="bp-pricing__axis-label">{t.axisTop}</text>
          <text x="4" y="314" className="bp-pricing__axis-label">{t.axisBottom}</text>

          {scatter.map((p, i) => {
            const cx = (xPercent(p.price) / 100) * 640;
            const cy = 320 - p.y * 320;
            return (
              <g key={i}>
                {p.featured && <circle cx={cx} cy={cy} r="14" className="bp-pricing__pulse" />}
                <circle cx={cx} cy={cy} r={p.featured ? 8 : 5} className={`bp-pricing__dot ${p.featured ? 'bp-pricing__dot--featured' : ''}`} />
                <text x={cx + 12} y={cy + 4} className="bp-pricing__dot-label">{p.name}</text>
              </g>
            );
          })}
        </svg>

        <ul className="bp-pricing__list">
          {scatter.map((p, i) => (
            <li key={i} className={p.featured ? 'bp-pricing__list-item--featured' : ''}>
              <span>{p.name}</span>
              <span>{p.price.toLocaleString('ru-RU')} ₸</span>
              <span className="bp-micro">{formatFor(p.y)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bp-grid" style={{ marginTop: '2.5rem' }}>
        {t.uniqueness.map((u, i) => (
          <div key={i} className="bp-composition__card">
            <h3>{u.title}</h3>
            <p>{u.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
