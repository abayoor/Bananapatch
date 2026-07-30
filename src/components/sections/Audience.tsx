import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

type Country = { flag: string; name: string; points: string[] };

const countries: Country[] = [
  { flag: '🇸🇩', name: 'Судан', points: ['Более 30 млн человек нуждаются в гуманитарной помощи', 'Значительная часть больниц повреждена', 'Дефицит перевязочных материалов и импортных медизделий'] },
  { flag: '🇧🇩', name: 'Бангладеш', points: ['Регулярные сезонные наводнения', 'Циклоны разрушают инфраструктуру', 'Ограниченные ресурсы здравоохранения в сельских районах'] },
  { flag: '🇺🇬', name: 'Уганда', points: ['Крупное число беженцев', 'Нехватка расходников в удалённых районах', 'Большие расстояния до специализированных больниц'] },
];

export default function Audience() {
  return (
    <section className="section section--navy audience">
      <div className="container">
        <SectionHeading light eyebrow="Доступ там, где он важнее всего" title="Где это особенно нужно." copy="BananaPatch создаётся с расчётом на регионы, где время, логистика и стоимость определяют, будет ли помощь доступна." />
        <div className="country-grid">
          {countries.map(({ flag, name, points }, index) => (
            <motion.article className="country-card" key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <div className="country-card__top"><span className="country-flag" role="img" aria-label={`Флаг ${name}`}>{flag}</span><ArrowUpRight size={19} aria-hidden="true" /></div>
              <h3>{name}</h3>
              <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
