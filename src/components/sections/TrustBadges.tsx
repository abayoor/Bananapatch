import { BadgeCheck, FileCheck2, Leaf } from 'lucide-react';
import { useI18n } from '../../i18n/I18nProvider';

const icons = [FileCheck2, BadgeCheck, Leaf];

export default function TrustBadges() {
  const { content } = useI18n();

  return <section className="trust-strip"><div className="container trust-strip__inner">{content.trust.map(({ title, subtitle }, index) => {
    const TrustIcon = icons[index];
    return <article key={title}><TrustIcon size={24} aria-hidden="true" /><div><b>{title}</b><span>{subtitle}</span></div></article>;
  })}</div></section>;
}
