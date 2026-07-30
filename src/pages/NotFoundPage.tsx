import { Link } from 'wouter';
import { useI18n } from '../i18n/I18nProvider';

export function NotFoundPage() {
  const { content } = useI18n();

  return (
    <main className="container">
      <section className="hello">
        <h1>{content.notFound.title}</h1>
        <p>
          <Link href="/">{content.notFound.back}</Link>
        </p>
      </section>
    </main>
  );
}
