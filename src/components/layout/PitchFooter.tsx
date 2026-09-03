import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { usePitchContent } from '../../i18n/pitch/usePitchContent';

export default function PitchFooter() {
  const t = usePitchContent().footer;

  return (
    <footer className="bp-footer bp-root" id="contacts">
      <div className="bp-container bp-footer__inner">
        <div className="bp-footer__main">
          <h2 className="bp-h2 bp-footer__heading">{t.heading}</h2>

          <div className="bp-footer__links">
            <a href="https://instagram.com/banana.patch" target="_blank" rel="noreferrer">
              <Instagram size={20} aria-hidden="true" />
              <span>{t.instagram}</span>
            </a>
            <a href="https://wa.me/77075650071" target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              <span>{t.phone}</span>
            </a>
            <a href="mailto:abikenti85@gmail.com">
              <Mail size={20} aria-hidden="true" />
              <span>{t.email}</span>
            </a>
          </div>
        </div>

        <div className="bp-footer__qr">
          <img src="/images/footer-qr.png" alt={t.qrAlt} width={160} height={160} />
        </div>
      </div>

      <div className="bp-container bp-footer__bottom">
        <p className="bp-micro">{t.legal}</p>
        <p className="bp-micro">{t.disclaimer}</p>
      </div>
    </footer>
  );
}
