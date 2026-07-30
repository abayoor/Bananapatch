import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, copy, light = false, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`section-heading ${light ? 'section-heading--light' : ''} section-heading--${align}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  );
}
