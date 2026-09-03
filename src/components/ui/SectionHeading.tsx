import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, copy, light = false, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''} section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="heading-mask"><h2>{title}</h2></div>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
