import { motion } from 'framer-motion';
import Chip from '../ui/Chip';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export default function PitchHero() {
  const t = usePitchContent().hero;

  return (
    <section id="top" className="bp-hero bp-root">
      <div className="bp-hero__glow" aria-hidden="true" />

      <div className="bp-hero__content bp-hero__content--split">
        <div className="bp-hero__text">
          <motion.div className="bp-hero__badge" custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <Chip>{t.badge}</Chip>
          </motion.div>

          <motion.h1 className="bp-hero__title" custom={0.08} initial="hidden" animate="visible" variants={fadeUp}>
            {t.title}
          </motion.h1>

          <motion.p className="bp-hero__sub" custom={0.16} initial="hidden" animate="visible" variants={fadeUp}>
            {t.sub}
          </motion.p>

          <motion.div className="bp-hero__actions" custom={0.24} initial="hidden" animate="visible" variants={fadeUp}>
            <a href="#solution" className="bp-btn bp-btn--primary">{t.ctaPrimary}</a>
            <a href="#contacts" className="bp-btn bp-btn--secondary">{t.ctaSecondary}</a>
          </motion.div>

          <motion.p className="bp-hero__trust" custom={0.32} initial="hidden" animate="visible" variants={fadeUp}>
            {t.trust}
          </motion.p>
        </div>

        <motion.div
          className="bp-hero__visual"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          <div className="bp-hero__mark">
            <motion.img
              src="/images/logo.png"
              alt="BananaPatch"
              className="bp-hero__mark-img"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
