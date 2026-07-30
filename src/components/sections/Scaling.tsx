import { TrendingDown, TrendingUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const rows = [
  ['Объём продаж, шт/год', '10 000', '100 000', '1 000 000'],
  ['Себестоимость/шт', '100 ₸', '70 ₸', '50 ₸'],
  ['Выручка', '5 000 000 ₸', '50 000 000 ₸', '500 000 000 ₸'],
  ['Валовая прибыль', '4 000 000 ₸', '43 000 000 ₸', '450 000 000 ₸'],
  ['Валовая маржа', '80%', '86%', '90%'],
];

export default function Scaling() {
  return (
    <section className="section section--pale scaling">
      <div className="container">
        <SectionHeading eyebrow="Траектория" title="План роста." copy="Экономика продукта становится сильнее с объёмом: ниже себестоимость, выше доступность и больше ресурсов для сертификации." />
        <div className="scaling-table-wrap" role="region" aria-label="План роста BananaPatch" tabIndex={0}>
          <table className="scaling-table">
            <thead><tr><th>Показатель</th><th>Пилот <span>2026</span></th><th>Рост <span>2027</span></th><th>Масштаб <span>2028</span></th></tr></thead>
            <tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={cell}>{i === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="growth-insights">
          <article><span className="growth-icon"><TrendingDown size={23} aria-hidden="true" /></span><div><b>Себестоимость снижается</b><p>Со 100 ₸ до 50 ₸ по мере роста объёма производства.</p></div><div className="sparkline sparkline--down" aria-hidden="true"><i /><i /><i /></div></article>
          <article><span className="growth-icon"><TrendingUp size={23} aria-hidden="true" /></span><div><b>Маржа растёт</b><p>С 80% до 90% по мере масштабирования.</p></div><div className="sparkline sparkline--up" aria-hidden="true"><i /><i /><i /></div></article>
        </div>
      </div>
    </section>
  );
}
