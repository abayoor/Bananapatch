import type { ReactNode } from 'react';
import clsx from 'clsx';

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export default function Chip({ children, className }: ChipProps) {
  return <span className={clsx('bp-chip', className)}>{children}</span>;
}
