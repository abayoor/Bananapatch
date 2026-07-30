import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';

const steps = [
  ['01', 'Очистка', 'Снимаем внутреннюю мякоть, режем полосками', '/images/process-peeling.jpg', 'Очистка банана руками в перчатках'],
  ['02', 'Сушка, 60°C', '5–6 часов в духовке — не выше, иначе танины разрушаются', '/images/process-drying.jpg', 'Сушка полосок банановой кожуры'],
  ['03', 'Помол', 'Кофемолка, импульсами по 30 секунд', '/images/process-grinding.jpg', 'Помол банановой кожуры в тёмный порошок'],
  ['04', 'Просеивание', 'Через марлю — мелкая фракция в повязку', '/images/process-sieving.jpg', 'Просеивание порошка через марлю'],
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHeading eyebrow="От отходов к помощи" title="Как это производится." copy="Небольшое количество понятных процессов превращает доступное растительное сырьё в готовый гемостатический продукт." />
        <motion.div
          className="process-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />
        <div className="process-grid">
          {steps.map(([number, title, copy, src, alt], index) => (
            <motion.article
              className="process-card"
              key={number}
              initial={{ opacity: 0, y: 38, rotateX: 7 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-card__number">{number}</div>
              <div className="process-card__media"><Media src={src} alt={alt} className="process-card__image" label={title} /></div>
              <h3>{title}</h3><p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
