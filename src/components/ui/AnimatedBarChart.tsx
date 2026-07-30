import { motion } from 'framer-motion';

const data = [
  { name: 'BananaPatch', price: '500 ₸', height: '6%', featured: true },
  { name: 'Axiostat', price: '18 000 ₸', height: '72%' },
  { name: 'Celox Rapid', price: '22 000 ₸', height: '88%' },
  { name: 'QuikClot', price: '25 000 ₸', height: '100%' },
  { name: 'ChitoGauze', price: '25 000 ₸', height: '100%' },
];

export default function AnimatedBarChart() {
  return (
    <div className="bar-chart" aria-label="Сравнение стоимости гемостатических средств">
      {data.map((item, index) => (
        <div className="bar-chart__item" key={item.name}>
          <motion.div
            className={`bar-chart__bar ${item.featured ? 'bar-chart__bar--featured' : ''}`}
            initial={{ height: 0 }}
            whileInView={{ height: item.height }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>{item.price}</span>
          </motion.div>
          <small>{item.name}</small>
        </div>
      ))}
    </div>
  );
}
