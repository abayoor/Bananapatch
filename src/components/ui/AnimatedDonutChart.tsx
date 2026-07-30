const entries = [
  ['Сырьё', '5%', 'var(--yellow)'],
  ['Альгинат натрия', '15%', '#5370aa'],
  ['Обработка', '20%', '#7690c5'],
  ['Стерилизация', '20%', '#aab8d6'],
  ['Упаковка', '25%', '#0a1b45'],
  ['Контроль и логистика', '15%', '#d6deee'],
];

export default function AnimatedDonutChart() {
  return (
    <div className="donut-chart-wrap">
      <div className="donut-chart" aria-label="Структура себестоимости одной упаковки: 100 тенге">
        <div><strong>100 ₸</strong><span>себестоимость</span></div>
      </div>
      <ul className="donut-legend">
        {entries.map(([name, value, color]) => (
          <li key={name}><i style={{ background: color }} /><span>{name}</span><b>{value}</b></li>
        ))}
      </ul>
    </div>
  );
}
