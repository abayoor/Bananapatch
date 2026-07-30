import { BadgeCheck, FileCheck2, Leaf } from 'lucide-react';

const badges = [
  [FileCheck2, 'Патент подан', 'Kazpatent №490282'],
  [BadgeCheck, 'Класс I медицинское изделие', 'EAEU, решение №46 от 12.02.2016'],
  [Leaf, 'Растительная основа', '70% банановая кожура'],
];

export default function TrustBadges() {
  return <section className="trust-strip"><div className="container trust-strip__inner">{badges.map(([Icon, title, subtitle]) => {
    const TrustIcon = Icon as typeof FileCheck2;
    return <article key={title as string}><TrustIcon size={24} aria-hidden="true" /><div><b>{title as string}</b><span>{subtitle as string}</span></div></article>;
  })}</div></section>;
}
