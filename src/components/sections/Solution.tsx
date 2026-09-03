import { Droplets, Leaf, Globe2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';
import { useI18n } from '../../i18n/I18nProvider';

const benefitIcons = [Droplets, Leaf, Globe2];

export default function Solution() {
  const { content } = useI18n();
  const text = content.solution;

  return (
    <section id="solution" className="section section--navy solution">
      <div className="container">
        <SectionHeading light eyebrow={text.eyebrow} title={text.title} copy={text.copy} />
        <div className="benefits-grid">
          {text.benefits.map((benefit, index) => {
            const BenefitIcon = benefitIcons[index];
            return (
              <article className="benefit" key={benefit.title}>
                <BenefitIcon size={26} strokeWidth={1.6} aria-hidden="true" />
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            );
          })}
        </div>
        <figure className="product-showcase">
          <Media
            src="/images/product-lineup.png"
            alt={text.imageAlt}
            className="product-showcase__image"
            label={text.imageLabel}
          />
          <figcaption className="product-showcase__legend">
            <span><b>01</b> {text.package}</span>
            <span><b>02</b> {text.dressing}</span>
            <span><b>03</b> {text.powder}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
