import { Droplets, Leaf, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';

const benefits = [
  [Droplets, 'Останавливает кровотечение', 'Абсорбирует кровь и помогает запустить свёртывание за секунды.'],
  [Leaf, 'Растительный и биоразлагаемый', 'На 70% состоит из органического растительного сырья.'],
  [Globe2, 'Низкая цена — высокий эффект', 'Доступный продукт для систем здравоохранения с ограниченными ресурсами.'],
];

export default function Solution() {
  return (
    <section id="solution" className="section section--navy solution">
      <div className="container">
        <SectionHeading light eyebrow="Продукт" title="Наше решение." copy="BananaPatch — гемостатический порошок, который абсорбирует кровь и запускает свёртывание за секунды. На 70% состоит из банановой кожуры — доступного органического сырья." />
        <div className="benefits-grid">
          {benefits.map(([Icon, title, text], index) => {
            const BenefitIcon = Icon as typeof Droplets;
            return <motion.article className="benefit" key={title as string} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <BenefitIcon size={26} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title as string}</h3><p>{text as string}</p>
            </motion.article>;
          })}
        </div>
        <motion.figure
          className="product-showcase"
          initial={{ opacity: 0, y: 42, clipPath: 'inset(10% 0 0 round 24px)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 round 24px)' }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <Media
            src="/images/product-lineup.png"
            alt="Линейка BananaPatch: упаковка порошка, гемостатическая повязка и порошок"
            className="product-showcase__image"
            label="Линейка продуктов BananaPatch"
          />
          <figcaption className="product-showcase__legend">
            <span><b>01</b> Упаковка</span>
            <span><b>02</b> Повязка</span>
            <span><b>03</b> Порошок</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
