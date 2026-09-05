import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Chip from '../ui/Chip';
import BananaBurst from '../ui/BananaBurst';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

const EASE = [0.22, 1, 0.36, 1] as const;
const DOUBLE_TAP_MS = 400;
const BURST_DURATION_MS = 1500;

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
  const [burst, setBurst] = useState(false);
  const lastTapRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoTap = () => {
    const now = Date.now();
    if (now - lastTapRef.current < DOUBLE_TAP_MS) {
      lastTapRef.current = 0;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setBurst(false);
      // Restart on the next frame so a rapid re-trigger re-mounts cleanly.
      requestAnimationFrame(() => {
        setBurst(true);
        timeoutRef.current = setTimeout(() => setBurst(false), BURST_DURATION_MS);
      });
    } else {
      lastTapRef.current = now;
    }
  };

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
          <div
            className="bp-hero__mark"
            onClick={handleLogoTap}
            role="button"
            tabIndex={0}
            aria-label={t.logoHint}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleLogoTap(); handleLogoTap(); } }}
          >
            <motion.img
              src="/images/logo.png"
              alt="BananaPatch"
              className="bp-hero__mark-img"
              animate={burst ? { rotate: [0, -10, 10, -6, 6, 0], scale: [1, 1.12, 1] } : { y: [0, -14, 0] }}
              transition={burst ? { duration: 0.6, ease: EASE } : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <BananaBurst active={burst} />
          </div>
          <p className="bp-hero__logo-hint">{t.logoHint}</p>
        </motion.div>
      </div>
    </section>
  );
}
