import Chip from '../components/ui/Chip';
import StatCard from '../components/ui/StatCard';
import Section from '../components/ui/Section';
import '../pitch-design.css';

export function DesignSystemPage() {
  return (
    <div className="bp-root">
      <Section>
        <p className="bp-eyebrow">Design system · sandbox</p>
        <h1 className="bp-h2" style={{ fontSize: 'var(--bp-fs-hero)', marginTop: '0.4em' }}>
          BananaPatch
        </h1>
        <p className="bp-body" style={{ marginTop: '1em', maxWidth: '60ch' }}>
          Токены, шрифт, фоновая сетка и базовые компоненты (Chip, StatCard, Section)
          из раздела 2 ТЗ. Проверка на разных ширинах экрана.
        </p>
      </Section>

      <Section className="bp-section">
        <p className="bp-eyebrow" style={{ marginBottom: '1rem' }}>Chip</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Chip>Заявка на патент № 490282</Chip>
          <Chip>8 место из 320</Chip>
          <Chip>Отзыв д.м.н.</Chip>
        </div>
      </Section>

      <Section>
        <p className="bp-eyebrow" style={{ marginBottom: '1rem' }}>StatCard</p>
        <div className="bp-grid">
          <StatCard number="5%" label="всех обращений в неотложную помощь это кровоточащие порезы и рваные раны" />
          <StatCard number="до 4 часов" label="район остаётся без скорой, если машина уехала на другой вызов" />
          <StatCard number="до 32%" label="ран нагнаиваются, если кровь не остановили и обработку задержали. Вовремя — 3,5%" />
        </div>
      </Section>

      <Section>
        <p className="bp-eyebrow" style={{ marginBottom: '1rem' }}>Buttons</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="bp-btn bp-btn--primary">Как это работает</button>
          <button className="bp-btn bp-btn--secondary">Связаться</button>
        </div>
      </Section>

      <Section>
        <p className="bp-eyebrow" style={{ marginBottom: '1rem' }}>Type scale</p>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <p style={{ fontSize: 'var(--bp-fs-hero)', fontWeight: 700, margin: 0, fontFamily: 'var(--bp-font-display)' }}>Hero</p>
          <p style={{ fontSize: 'var(--bp-fs-h2)', fontWeight: 600, margin: 0, fontFamily: 'var(--bp-font-display)' }}>H2 заголовок секции</p>
          <p style={{ fontSize: 'var(--bp-fs-h3)', fontWeight: 500, margin: 0, color: 'var(--bp-pale)' }}>H3 подзаголовок</p>
          <p style={{ fontSize: 'var(--bp-fs-body)', margin: 0, color: 'var(--bp-pale)' }}>Body — основной текст секций.</p>
          <p style={{ fontSize: 'var(--bp-fs-small)', margin: 0, color: 'var(--bp-pale-2)' }}>Small — подписи.</p>
          <p style={{ fontSize: 'var(--bp-fs-micro)', margin: 0, color: 'var(--bp-micro)' }}>Micro — источники и сноски.</p>
        </div>
      </Section>
    </div>
  );
}
