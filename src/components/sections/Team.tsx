import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';
import { useI18n } from '../../i18n/I18nProvider';

const photos = ['/images/team-abay.jpg', '/images/team-seitali.jpg'];

export default function Team() {
  const { content } = useI18n();
  const text = content.team;

  return (
    <section id="team" className="section section--navy team">
      <div className="container">
        <SectionHeading light eyebrow={text.eyebrow} title={text.title} copy={text.copy} />
        <div className="team-grid">
          {text.members.map(({ name, role, copy, alt }, index) => (
            <article key={name} className="team-card">
              <Media src={photos[index]} alt={alt} className="team-card__image" label={name} />
              <div className="team-card__copy">
                <span>{role}</span><h3>{name}</h3><p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
