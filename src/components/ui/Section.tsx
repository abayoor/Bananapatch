import type { ReactNode } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
};

export default function Section({ id, children, className, containerClassName, animate = true }: SectionProps) {
  const content = (
    <div className={clsx('bp-container', containerClassName)}>{children}</div>
  );

  if (!animate) {
    return (
      <section id={id} className={clsx('bp-section', className)}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={clsx('bp-section', className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.section>
  );
}
