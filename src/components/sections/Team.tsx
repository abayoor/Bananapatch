import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';

const team = [
  ['Абай Оразбек', 'Founder & CEO', 'Стратегия проекта, партнёрства и переговоры, исследования рынка, презентации и питчи, развитие бизнеса.', '/images/team-abay.jpg', 'Фотография Абая Оразбека'],
  ['Сейтали', 'Co-founder & CTO', 'Разработка технологии, создание прототипа, лабораторные испытания, оптимизация состава, техническая документация.', '/images/team-seitali.jpg', 'Фотография Сейтали'],
];

export default function Team() {
  return (
    <section id="team" className="section section--navy team">
      <div className="container">
        <SectionHeading light eyebrow="Люди за продуктом" title="Команда." copy="Объединяем исследовательскую работу, инженерную разработку и коммерческое мышление, чтобы сделать экстренную помощь доступнее." />
        <div className="team-grid">
          {team.map(([name, role, copy, src, alt], index) => (
            <motion.article key={name} className="team-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }}>
              {/* Add the approved portrait to this exact path when it is available. */}
              <Media src={src} alt={alt} className="team-card__image" label={name} />
              <div className="team-card__copy"><span>{role}</span><h3>{name}</h3><p>{copy}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
