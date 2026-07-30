import SectionHeading from '../ui/SectionHeading';
import AnimatedBarChart from '../ui/AnimatedBarChart';
import AnimatedDonutChart from '../ui/AnimatedDonutChart';
import { useI18n } from '../../i18n/I18nProvider';

export default function Uniqueness() {
  const { content } = useI18n();
  const text = content.uniqueness;

  return (
    <section className="section section--pale uniqueness">
      <div className="container">
        <SectionHeading eyebrow={text.eyebrow} title={<>{text.title[0]}<br />{text.title[1]}</>} copy={text.copy} />
        <div className="economy-grid">
          <article className="chart-card"><div className="chart-card__head"><h3>{text.unitPrice}</h3><span>₸</span></div><AnimatedBarChart /></article>
          <article className="chart-card"><div className="chart-card__head"><h3>{text.costStructure}</h3><span>100 ₸</span></div><AnimatedDonutChart /></article>
        </div>
        <p className="margin-note"><b>400 ₸ / 80%</b><span>{text.marginCopy}</span></p>
      </div>
    </section>
  );
}
