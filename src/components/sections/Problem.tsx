import SectionHeading from '../ui/SectionHeading';
import StatCounter from '../ui/StatCounter';

export default function Problem() {
  return (
    <section id="problem" className="section section--pale problem">
      <div className="container">
        <SectionHeading eyebrow="Контекст" title={<>Проблема, которую<br />нельзя игнорировать.</>} copy="Экстренная помощь зависит не только от скорости врачей, но и от того, есть ли доступное средство остановить кровотечение прямо сейчас." />
        <div className="stats-grid">
          <StatCounter end={1.4} display={(v) => `${v.toFixed(1)}M`} label="смертей от кровопотери ежегодно в мире" />
          <StatCounter end={80} display={(v) => `$50–${Math.max(50, Math.round(v))}`} label="средняя цена одной повязки QuikClot" delay={0.08} />
          <StatCounter end={4} display={(v) => `${Math.max(1, Math.round(v))}+ часа`} label="среднее время ожидания скорой помощи в сельских районах" delay={0.16} />
        </div>
      </div>
    </section>
  );
}
