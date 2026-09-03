import Section from '../ui/Section';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const PHOTOS = ['/images/team-abay.jpg', '/images/team-seitali.jpg'];

export default function PitchTeam() {
  const t = usePitchContent().team;

  return (
    <Section id="team" className="bp-root bp-team">
      <p className="bp-eyebrow">{t.eyebrow}</p>
      <h2 className="bp-h2" style={{ marginTop: '0.5em' }}>{t.title}</h2>

      <div className="bp-grid bp-team__grid">
        {t.members.map((m, i) => (
          <article key={m.name} className="bp-team__card">
            <div className="bp-team__photo">
              <img src={PHOTOS[i]} alt={m.name} loading="lazy" />
            </div>
            <h3>{m.name}</h3>
            <p className="bp-team__role">{m.role}</p>
            <ul>
              {m.responsibilities.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <p className="bp-micro bp-team__achievements">{t.achievements.join(' · ')}</p>
    </Section>
  );
}
