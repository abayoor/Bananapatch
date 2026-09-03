import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import AnimatedNumber from '../ui/AnimatedNumber';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const PRICE_NET = 912.5;
const COGS = 365;
const OPEX = 8_000_000;
const TAX = 0.20;

const VOLUMES = [10_000, 20_000, 40_000] as const;

function compute(units: number) {
  const revenue = units * PRICE_NET;
  const cogs = units * COGS;
  const gross = revenue - cogs;
  const preTax = gross - OPEX;
  const tax = preTax > 0 ? preTax * TAX : 0;
  const net = preTax - tax;
  const perSachet = units ? net / units : 0;
  return { revenue, cogs, gross, preTax, tax, net, perSachet };
}

type Step = { key: string; label: string; kind: 'level' | 'delta' | 'final'; from: number; to: number };

const toMillions = (v: number) => v / 1_000_000;

export default function PitchCalculator() {
  const t = usePitchContent().calculator;
  const [units, setUnits] = useState<number>(20_000);
  const { revenue, gross, preTax, net, perSachet, tax, cogs } = useMemo(() => compute(units), [units]);

  const steps: Step[] = [
    { key: 'revenue', label: t.steps.revenue, kind: 'level', from: 0, to: revenue },
    { key: 'cogs', label: t.steps.cogs, kind: 'delta', from: revenue, to: revenue - cogs },
    { key: 'gross', label: t.steps.gross, kind: 'level', from: 0, to: gross },
    { key: 'opex', label: t.steps.opex, kind: 'delta', from: gross, to: preTax },
    { key: 'preTax', label: t.steps.preTax, kind: 'level', from: 0, to: preTax },
    { key: 'tax', label: t.steps.tax, kind: 'delta', from: preTax, to: net },
    { key: 'net', label: t.steps.net, kind: 'final', from: 0, to: net },
  ];

  const allValues = steps.flatMap((s) => [s.from, s.to]);
  const maxVal = Math.max(0, ...allValues);
  const minVal = Math.min(0, ...allValues);
  const span = maxVal - minVal || 1;
  const zeroPercent = (maxVal / span) * 100;

  const pct = (v: number) => ((maxVal - v) / span) * 100;

  return (
    <Section id="economics" className="bp-root bp-calc">
      <p className="bp-eyebrow">{t.eyebrow}</p>
      <h2 className="bp-h2" style={{ marginTop: '0.5em' }}>{t.title}</h2>

      <div className="bp-calc__controls">
        <span className="bp-body">{t.volumeLabel}</span>
        <div className="bp-calc__toggle" role="group" aria-label={t.volumeAria}>
          {VOLUMES.map((v) => (
            <button
              key={v}
              type="button"
              className={`bp-calc__toggle-btn ${units === v ? 'bp-calc__toggle-btn--active' : ''}`}
              onClick={() => setUnits(v)}
            >
              {v.toLocaleString('ru-RU')}
            </button>
          ))}
        </div>
      </div>

      <div className="bp-calc__summary">
        <div>
          <span className="bp-eyebrow">{t.summary.revenue}</span>
          <strong><AnimatedNumber value={toMillions(revenue)} decimals={2} /> млн ₸</strong>
        </div>
        <div>
          <span className="bp-eyebrow">{t.summary.gross}</span>
          <strong><AnimatedNumber value={toMillions(gross)} decimals={2} /> млн ₸</strong>
        </div>
        <div>
          <span className="bp-eyebrow">{t.summary.preTax}</span>
          <strong><AnimatedNumber value={toMillions(preTax)} decimals={2} /> млн ₸</strong>
        </div>
        <div>
          <span className="bp-eyebrow">{t.summary.net}</span>
          <strong className="bp-calc__summary-net"><AnimatedNumber value={toMillions(net)} decimals={2} /> млн ₸</strong>
        </div>
        <div>
          <span className="bp-eyebrow">{t.summary.perUnit}</span>
          <strong><AnimatedNumber value={perSachet} decimals={0} /> ₸</strong>
        </div>
      </div>

      <div className="bp-calc__waterfall">
        <div className="bp-calc__zero-line" style={{ top: `${zeroPercent}%` }} aria-hidden="true" />
        {steps.map((s) => {
          const top = Math.min(pct(s.from), pct(s.to));
          const height = Math.abs(pct(s.to) - pct(s.from));
          const isNegativeDelta = s.kind === 'delta' && s.to < s.from;
          const colorClass = s.kind === 'final'
            ? 'bp-calc__bar--final'
            : s.kind === 'delta'
              ? 'bp-calc__bar--delta'
              : 'bp-calc__bar--level';
          return (
            <div key={s.key} className="bp-calc__col">
              <div className="bp-calc__bar-track">
                <motion.div
                  className={`bp-calc__bar ${colorClass}`}
                  animate={{ top: `${top}%`, height: `${Math.max(height, 0.5)}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="bp-calc__bar-value">
                    {isNegativeDelta ? '−' : ''}
                    {Math.abs(toMillions(s.to - s.from)).toFixed(2)}
                  </span>
                </motion.div>
              </div>
              <span className="bp-calc__col-label">{s.label}</span>
            </div>
          );
        })}
      </div>

      <div className="bp-calc__waterfall-mobile">
        {steps.map((s) => (
          <div key={s.key} className="bp-calc__row">
            <span>{s.label}</span>
            <div className="bp-calc__row-track">
              <motion.div
                className={`bp-calc__row-bar ${s.kind === 'final' ? 'bp-calc__bar--final' : s.kind === 'delta' ? 'bp-calc__bar--delta' : 'bp-calc__bar--level'}`}
                animate={{ width: `${Math.min(100, (Math.abs(s.to - s.from) / maxVal) * 100)}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="bp-calc__row-value">{toMillions(s.to - s.from).toFixed(2)} млн</span>
          </div>
        ))}
      </div>

      <p className="bp-micro" style={{ marginTop: '1.5rem' }}>
        {t.note}
        {tax === 0 && t.noteNoTax}
      </p>
    </Section>
  );
}
