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
        <div className="process-line" aria-hidden="true" />
        <div className="process-grid">
          {steps.map(([number, title, copy, src, alt], index) => (
            <motion.article className="process-card" key={number} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.09 }}>
              <div className="process-card__number">{number}</div>
              {/* Add each authentic production photo at the listed path in public/images. */}
              <Media src={src} alt={alt} className="process-card__image" label={title} />
              <h3>{title}</h3><p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
