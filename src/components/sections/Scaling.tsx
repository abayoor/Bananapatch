import { TrendingDown, TrendingUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { useI18n } from '../../i18n/I18nProvider';

const rowValues = [
  ['10 000', '100 000', '1 000 000'],
  ['100 ₸', '70 ₸', '50 ₸'],
  ['5 000 000 ₸', '50 000 000 ₸', '500 000 000 ₸'],
  ['4 000 000 ₸', '43 000 000 ₸', '450 000 000 ₸'],
  ['80%', '86%', '90%'],
];

export default function Scaling() {
  const { content } = useI18n();
  const text = content.scaling;
  const rows = text.rowLabels.map((label, index) => [label, ...rowValues[index]]);

  return (
    <section className="section section--pale scaling">
      <div className="container">
        <SectionHeading eyebrow={text.eyebrow} title={text.title} copy={text.copy} />
        <div className="scaling-table-wrap" role="region" aria-label={text.tableAria} tabIndex={0}>
          <table className="scaling-table">
            <thead><tr><th>{text.indicator}</th><th>{text.pilot} <span>2026</span></th><th>{text.growth} <span>2027</span></th><th>{text.scale} <span>2028</span></th></tr></thead>
            <tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={cell}>{i === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="growth-insights">
          <article><span className="growth-icon"><TrendingDown size={23} aria-hidden="true" /></span><div><b>{text.costDownTitle}</b><p>{text.costDownCopy}</p></div><div className="sparkline sparkline--down" aria-hidden="true"><i /><i /><i /></div></article>
          <article><span className="growth-icon"><TrendingUp size={23} aria-hidden="true" /></span><div><b>{text.marginUpTitle}</b><p>{text.marginUpCopy}</p></div><div className="sparkline sparkline--up" aria-hidden="true"><i /><i /><i /></div></article>
        </div>
      </div>
    </section>
  );
}
