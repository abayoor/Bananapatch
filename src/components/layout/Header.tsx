import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../../i18n/I18nProvider';
import Button from '../ui/Button';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { content } = useI18n();
  const nav = [
    [content.nav.problem, '#problem'],
    [content.nav.solution, '#solution'],
    [content.nav.formula, '#formula'],
    [content.nav.team, '#team'],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label={content.nav.homeAria}>
        <span className="brand__mark"><img src="/images/logo.png" alt="" /></span>
        <span>Banana<span>Patch</span></span>
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? content.nav.closeMenu : content.nav.openMenu}>
        {open ? <X /> : <Menu />}
      </button>

      <nav id="site-navigation" className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label={content.nav.navigationAria}>
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <LanguageSwitcher onChange={() => setOpen(false)} />
        <Button href="#contacts" variant="primary" onClick={() => setOpen(false)}>{content.nav.contact}</Button>
      </nav>
    </header>
  );
}
