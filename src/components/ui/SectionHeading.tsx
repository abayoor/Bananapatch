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
  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`section-heading ${light ? 'section-heading--light' : ''} section-heading--${align}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {eyebrow && <motion.p className="eyebrow" variants={reveal} transition={{ duration: 0.55 }}>{eyebrow}</motion.p>}
      <div className="heading-mask">
        <motion.h2
          variants={{ hidden: { y: '105%', rotate: 1 }, visible: { y: 0, rotate: 0 } }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h2>
      </div>
      {copy && <motion.p className="section-copy" variants={reveal} transition={{ duration: 0.65 }}>{copy}</motion.p>}
    </motion.div>
  );
}
