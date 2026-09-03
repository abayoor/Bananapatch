import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { useI18n } from '../../i18n/I18nProvider';

const flags = ['🇸🇩', '🇧🇩', '🇺🇬'];

export default function Audience() {
  const { content } = useI18n();
  const text = content.audience;

  return (
    <section className="section section--navy audience">
      <div className="container">
        <SectionHeading light eyebrow={text.eyebrow} title={text.title} copy={text.copy} />
        <div className="country-grid">
          {text.countries.map(({ name, points }, index) => (
            <article className="country-card" key={name}>
              <span className="country-card__index" aria-hidden="true">0{index + 1}</span>
              <div className="country-card__top">
                <span className="country-flag" role="img" aria-label={`${text.flagLabel}: ${name}`}>{flags[index]}</span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </div>
              <h3>{name}</h3>
              <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
