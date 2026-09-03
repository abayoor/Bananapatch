import type { ReactNode } from 'react';
import clsx from 'clsx';

type StatCardProps = {
  number: ReactNode;
  label: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export default function StatCard({ number, label, icon, className }: StatCardProps) {
  return (
    <div className={clsx('bp-statcard', className)}>
      {icon && <span className="bp-statcard__icon">{icon}</span>}
      <span className="bp-statcard__number">{number}</span>
      <span className="bp-statcard__label">{label}</span>
    </div>
  );
}
