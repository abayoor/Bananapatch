import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { useI18n } from '../../i18n/I18nProvider';

export default function Footer() {
  const { content } = useI18n();

  return (
    <footer className="footer" id="contacts">
      <div className="footer__main">
        <div>
          <p className="eyebrow">{content.footer.eyebrow}</p>
          <h2>{content.footer.title[0]}<br />{content.footer.title[1]}</h2>
          <p className="footer__intro">{content.footer.copy}</p>
        </div>
        <div className="contact-links">
          <a href="mailto:abikenti85@gmail.com"><Mail size={20} aria-hidden="true" /><span>abikenti85@gmail.com</span><ArrowUpRight size={20} aria-hidden="true" /></a>
          <a href="tel:+77075650071"><Phone size={20} aria-hidden="true" /><span>+7 707 565 00 71</span><ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="brand"><span className="brand__mark"><img src="/images/logo.png" alt="" /></span><span>Banana<span>Patch</span></span></div>
        <span>{content.footer.copyright}</span>
        <a href="#top" className="back-to-top">{content.footer.backToTop}</a>
      </div>
    </footer>
  );
}
