import SectionHeading from '../ui/SectionHeading';
import AnimatedBarChart from '../ui/AnimatedBarChart';
import AnimatedDonutChart from '../ui/AnimatedDonutChart';

export default function Uniqueness() {
  return (
    <section className="section section--pale uniqueness">
      <div className="container">
        <SectionHeading eyebrow="Доступность" title={<>В 50 раз дешевле<br />аналогов.</>} copy="Экономика BananaPatch создаёт запас прочности для локального производства, клинических испытаний и расширения поставок." />
        <div className="economy-grid">
          <article className="chart-card"><div className="chart-card__head"><h3>Цена одной единицы</h3><span>₸</span></div><AnimatedBarChart /></article>
          <article className="chart-card"><div className="chart-card__head"><h3>Структура себестоимости</h3><span>100 ₸</span></div><AnimatedDonutChart /></article>
        </div>
        <p className="margin-note"><b>400 ₸ / 80%</b><span>маржа с одной упаковки, которая финансирует R&amp;D, сертификацию и масштабирование.</span></p>
      </div>
    </section>
  );
}
