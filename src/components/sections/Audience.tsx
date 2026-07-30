import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
            <motion.article
              className="country-card"
              key={name}
              initial={{ opacity: 0, y: 34, rotateY: -4 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ y: -9, rotateY: 1.5 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="country-card__index" aria-hidden="true">0{index + 1}</span>
              <div className="country-card__top"><span className="country-flag" role="img" aria-label={`${text.flagLabel}: ${name}`}>{flags[index]}</span><ArrowUpRight size={19} aria-hidden="true" /></div>
              <h3>{name}</h3>
              <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
