import { useI18n } from '../../i18n/I18nProvider';

const data = [
  { name: 'BananaPatch', price: '500 ₸', height: '6%', featured: true },
  { name: 'Axiostat', price: '18 000 ₸', height: '72%' },
  { name: 'Celox Rapid', price: '22 000 ₸', height: '88%' },
  { name: 'QuikClot', price: '25 000 ₸', height: '100%' },
  { name: 'ChitoGauze', price: '25 000 ₸', height: '100%' },
];

export default function AnimatedBarChart() {
  const { content } = useI18n();

  return (
    <div className="bar-chart" aria-label={content.uniqueness.barAria}>
      {data.map((item) => (
        <div className="bar-chart__item" key={item.name}>
          <div
            className={`bar-chart__bar ${item.featured ? 'bar-chart__bar--featured' : ''}`}
            style={{ height: item.height }}
          >
            <span>{item.price}</span>
          </div>
          <small>{item.name}</small>
        </div>
      ))}
    </div>
  );
}
