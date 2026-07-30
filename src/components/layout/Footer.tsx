import { ArrowUpRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__main">
        <div>
          <p className="eyebrow">Партнёрства и пилоты</p>
          <h2>Свяжитесь<br />с нами.</h2>
          <p className="footer__intro">Открыты к партнёрствам, инвестициям и пилотным поставкам.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:abikenti85@gmail.com"><Mail size={20} aria-hidden="true" /><span>abikenti85@gmail.com</span><ArrowUpRight size={20} aria-hidden="true" /></a>
          <a href="tel:+77075650071"><Phone size={20} aria-hidden="true" /><span>+7 707 565 00 71</span><ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="brand"><span className="brand__mark"><img src="/images/logo.png" alt="" /></span><span>Banana<span>Patch</span></span></div>
        <span>© 2026 BananaPatch. Абай &amp; Сейтали.</span>
        <a href="#top" className="back-to-top">Наверх ↑</a>
      </div>
    </footer>
  );
}
