import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import AnimatedNumber from '../ui/AnimatedNumber';
import mapData from '../../data/market-map.json';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

type CountryGeo = { code: string; d: string };

const FUNNEL_WIDTH = [100, 88, 76];

export default function PitchMarket() {
  const t = usePitchContent().market;
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const countries = mapData.countries as CountryGeo[];
  const active = activeCode ? t.countries[activeCode] : null;

  return (
    <Section id="market" className="bp-root bp-market">
      <p className="bp-eyebrow">{t.eyebrow}</p>
      <h2 className="bp-h2" style={{ marginTop: '0.5em' }}>{t.title}</h2>

      <div className="bp-market__layout">
        <motion.div
          className="bp-market__funnel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {t.funnel.map((f, i) => (
            <motion.div
              key={f.label}
              className="bp-market__tier"
              style={{ width: `${FUNNEL_WIDTH[i]}%` }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="bp-market__tier-label">{f.label}</span>
              <span className="bp-market__tier-value">
                <AnimatedNumber value={f.value} /> {f.unit}
              </span>
              <span className="bp-market__tier-copy">{f.copy}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="bp-market__map-col">
          <svg viewBox={mapData.viewBox} className="bp-market__map" role="img" aria-label={t.mapAria}>
            {mapData.land.map((d, i) => (
              <path key={i} d={d} className="bp-market__land" />
            ))}
            {countries.map((c) => {
              const info = t.countries[c.code];
              return (
                <path
                  key={c.code}
                  d={c.d}
                  className={`bp-market__country ${activeCode === c.code ? 'bp-market__country--active' : ''}`}
                  onMouseEnter={() => setActiveCode(c.code)}
                  onFocus={() => setActiveCode(c.code)}
                  onClick={() => setActiveCode(c.code)}
                  tabIndex={0}
                  role="button"
                  aria-label={info ? `${info.name}: ${info.population}` : c.code}
                />
              );
            })}
          </svg>
          <p className="bp-market__tooltip">
            {active ? <><strong>{active.name}</strong> — {active.population}</> : t.tooltipDefault}
          </p>
        </div>
      </div>

      <p className="bp-micro" style={{ marginTop: '2rem', maxWidth: '70ch' }}>
        {t.note}
      </p>
    </Section>
  );
}
