type StatCounterProps = {
  end: number;
  display: (value: number) => string;
  label: string;
};

export default function StatCounter({ end, display, label }: StatCounterProps) {
  return (
    <div className="stat-card">
      <strong>{display(end)}</strong>
      <span>{label}</span>
    </div>
  );
}
