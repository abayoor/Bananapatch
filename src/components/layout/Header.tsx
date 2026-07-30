import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const nav = [
  ['Проблема', '#problem'],
  ['Решение', '#solution'],
  ['Формула', '#formula'],
  ['Процесс', '#process'],
  ['Команда', '#team'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="BananaPatch — на главную">
        <span className="brand__mark"><img src="/images/logo.png" alt="" /></span>
        <span>Banana<span>Patch</span></span>
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? 'Закрыть меню' : 'Открыть меню'}>
        {open ? <X /> : <Menu />}
      </button>

      <nav id="site-navigation" className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Основная навигация">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <Button href="#contacts" variant="primary" onClick={() => setOpen(false)}>Связаться</Button>
      </nav>
    </header>
  );
}
