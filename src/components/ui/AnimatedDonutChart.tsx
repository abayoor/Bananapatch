import { useI18n } from '../../i18n/I18nProvider';

const values = ['5%', '15%', '20%', '20%', '25%', '15%'];
const colors = ['var(--yellow)', '#5370aa', '#7690c5', '#aab8d6', '#0a1b45', '#d6deee'];

export default function AnimatedDonutChart() {
  const { content } = useI18n();
  const text = content.uniqueness;

  return (
    <div className="donut-chart-wrap">
      <div className="donut-chart" aria-label={text.donutAria}>
        <div><strong>100 ₸</strong><span>{text.costLabel}</span></div>
      </div>
      <ul className="donut-legend">
        {text.costEntries.map((name, index) => (
          <li key={name}><i style={{ background: colors[index] }} /><span>{name}</span><b>{values[index]}</b></li>
        ))}
      </ul>
    </div>
  );
}
