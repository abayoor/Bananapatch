import SectionHeading from '../ui/SectionHeading';
import StatCounter from '../ui/StatCounter';
import { useI18n } from '../../i18n/I18nProvider';

export default function Problem() {
  const { content } = useI18n();
  const text = content.problem;

  return (
    <section id="problem" className="section section--pale problem">
      <div className="container">
        <SectionHeading eyebrow={text.eyebrow} title={<>{text.title[0]}<br />{text.title[1]}</>} copy={text.copy} />
        <div className="stats-grid">
          <StatCounter end={1.4} display={(v) => `${v.toFixed(1)}M`} label={text.annualLoss} />
          <StatCounter end={80} display={(v) => `$50–${Math.max(50, Math.round(v))}`} label={text.price} delay={0.08} />
          <StatCounter end={4} display={(v) => `${Math.max(1, Math.round(v))}+ ${text.hourUnit}`} label={text.responseTime} delay={0.16} />
        </div>
      </div>
    </section>
  );
}
