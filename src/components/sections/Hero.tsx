import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import Media from '../ui/Media';
import { useI18n } from '../../i18n/I18nProvider';

export default function Hero() {
  const { content } = useI18n();

  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__particles" aria-hidden="true" />
      <div className="hero__spotlight" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__badge">{content.hero.badge}</p>
          <h1 aria-label={content.hero.titleAria}>
            {content.hero.titleLines.map(({ text, accent }, index) => (
              <span className="hero__title-line" key={`${text}-${index}`} aria-hidden="true">
                <span className={accent ? 'hero__title-accent' : undefined}>{text}</span>
              </span>
            ))}
          </h1>
          <p className="hero__lead">{content.hero.lead}</p>
          <div className="hero__actions">
            <Button href="#solution">{content.hero.learnMore} <ArrowDown size={17} aria-hidden="true" /></Button>
            <Button href="#contacts" variant="secondary">{content.hero.contact} <ArrowUpRight size={17} aria-hidden="true" /></Button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__product">
            <span className="hero__halo" aria-hidden="true"><i /><i /></span>
            <span className="hero__depth-shadow" aria-hidden="true" />
            <div className="hero__packshot">
              <Media
                src="/images/hero-product-minimal.png"
                alt={content.hero.imageAlt}
                className="hero__packshot-image"
                eager
                label={content.hero.imageLabel}
              />
              <span className="hero__packshot-label">{content.hero.productLabel}</span>
              <span className="hero__scanline" aria-hidden="true" />
            </div>
          </div>
          <div className="hero__metric hero__metric--plant">
            <strong>70%</strong><span>{content.hero.plantMetric}</span>
          </div>
          <div className="hero__metric hero__metric--cost">
            <strong>50×</strong><span>{content.hero.costMetric}</span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#problem">
        <span>{content.hero.scrollCue}</span><i><ArrowDown size={16} aria-hidden="true" /></i>
      </a>
    </section>
  );
}
