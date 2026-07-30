import { useI18n } from '../../i18n/I18nProvider';

export default function ImpactTicker() {
  const { content } = useI18n();
  const messages = content.ticker;
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
