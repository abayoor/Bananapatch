import { Droplets, Leaf, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';

const benefits = [
  [Droplets, 'Останавливает кровотечение', 'Абсорбирует кровь и помогает запустить свёртывание за секунды.'],
  [Leaf, 'Растительный и биоразлагаемый', 'На 70% состоит из растительного сырья, которое обычно становится отходами.'],
  [Globe2, 'Низкая цена — высокий эффект', 'Доступный продукт для систем здравоохранения с ограниченными ресурсами.'],
];

const products = [
  ['/images/product-pouch-front.png', 'Упаковка гемостатического порошка BananaPatch', 'Порошок'],
  ['/images/product-pouch-pouring.png', 'BananaPatch: упаковка с высыпающимся порошком', 'Применение'],
  ['/images/product-gauze-pad.png', 'Марлевая повязка с порошком BananaPatch', 'Повязка'],
];

export default function Solution() {
  return (
    <section id="solution" className="section section--navy solution">
      <div className="container">
        <SectionHeading light eyebrow="Продукт" title="Наше решение." copy="BananaPatch — гемостатический порошок, который абсорбирует кровь и запускает свёртывание за секунды. На 70% состоит из банановой кожуры — сырья, которое обычно выбрасывается пищевой промышленностью." />
        <div className="benefits-grid">
          {benefits.map(([Icon, title, text], index) => {
            const BenefitIcon = Icon as typeof Droplets;
            return <motion.article className="benefit" key={title as string} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <BenefitIcon size={26} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title as string}</h3><p>{text as string}</p>
            </motion.article>;
          })}
        </div>
        <div className="product-gallery">
          {products.map(([src, alt, caption], index) => (
            <motion.figure key={src} className={`product-card product-card--${index + 1}`} whileHover={{ y: -7, scale: 1.015 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
              {/* Each item keeps its final asset path; simply add the matching file to public/images. */}
              <Media src={src} alt={alt} className="product-card__image" label={caption} />
              <figcaption>{caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
