import { useI18n } from '../../i18n/I18nProvider';

export default function ImpactTicker() {
  const { content } = useI18n();
  const messages = content.ticker;

  return (
    <aside className="impact-ticker" aria-label={messages.join('. ')}>
      <div className="impact-ticker__viewport" aria-hidden="true">
        <div className="impact-ticker__track">
          {messages.map((message) => (
            <span key={message}>
              {message}
              <i />
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
