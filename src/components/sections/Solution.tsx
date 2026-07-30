import { Droplets, Leaf, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';
import { useI18n } from '../../i18n/I18nProvider';

const benefitIcons = [Droplets, Leaf, Globe2];

export default function Solution() {
  const { content } = useI18n();
  const text = content.solution;

  return (
    <section id="solution" className="section section--navy solution">
      <div className="container">
        <SectionHeading light eyebrow={text.eyebrow} title={text.title} copy={text.copy} />
        <div className="benefits-grid">
          {text.benefits.map((benefit, index) => {
            const BenefitIcon = benefitIcons[index];
            return <motion.article className="benefit" key={benefit.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <BenefitIcon size={26} strokeWidth={1.6} aria-hidden="true" />
              <h3>{benefit.title}</h3><p>{benefit.copy}</p>
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
            alt={text.imageAlt}
            className="product-showcase__image"
            label={text.imageLabel}
          />
          <figcaption className="product-showcase__legend">
            <span><b>01</b> {text.package}</span>
            <span><b>02</b> {text.dressing}</span>
            <span><b>03</b> {text.powder}</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
