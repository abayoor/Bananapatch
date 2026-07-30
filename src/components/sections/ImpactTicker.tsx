const messages = [
  '70% растительное сырьё',
  'Остановка крови за секунды',
  'В 50 раз доступнее',
  'Локальное производство',
  'Органика — в помощь',
];

export default function ImpactTicker() {
  const loop = [...messages, ...messages];

  return (
    <aside className="impact-ticker" aria-label={messages.join('. ')}>
      <div className="impact-ticker__viewport" aria-hidden="true">
        <div className="impact-ticker__track">
          {loop.map((message, index) => (
            <span key={`${message}-${index}`}>
              {message}
              <i />
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
