import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';
import LanguageSwitcher from './LanguageSwitcher';

export default function PitchHeader() {
  const t = usePitchContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV = [
    [t.nav.problem, '#problem'],
    [t.nav.solution, '#solution'],
    [t.nav.market, '#market'],
    [t.nav.team, '#team'],
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`bp-header bp-root ${scrolled ? 'bp-header--scrolled' : ''}`}>
      <div className="bp-header__inner">
        <a className="bp-header__brand" href="#top" aria-label={t.nav.homeAria}>
          <img src="/images/logo.png" alt="" width={28} height={28} />
          <span>BananaPatch</span>
        </a>

        <nav className="bp-header__nav" aria-label={t.nav.navAria}>
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="bp-header__link">{label}</a>
          ))}
        </nav>

        <a href="#contacts" className="bp-btn bp-btn--primary bp-header__cta">{t.nav.contact}</a>

        <LanguageSwitcher className="bp-header__lang" />

        <button
          className="bp-header__burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="bp-mobile-nav"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="bp-mobile-nav"
            className="bp-mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label={t.nav.mobileNavAria}
          >
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <LanguageSwitcher onChange={() => setOpen(false)} />
            <a href="#contacts" className="bp-btn bp-btn--primary" onClick={() => setOpen(false)}>
              {t.nav.contact}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
