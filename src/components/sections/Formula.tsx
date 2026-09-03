import { CheckCircle2, Layers3 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';
import { useI18n } from '../../i18n/I18nProvider';

export default function Formula() {
  const { content } = useI18n();
  const text = content.formula;

  return (
    <section id="formula" className="formula">
      <div className="formula-pin">
        <div className="container formula__layout">
          <div className="formula__story">
            <SectionHeading eyebrow={text.eyebrow} title={<>{text.title[0]}<br />{text.title[1]}</>} copy={text.copy} />
            <div className="formula-conclusion">
              <CheckCircle2 size={20} aria-hidden="true" />
              <p>{text.conclusion}</p>
            </div>
          </div>
          <div className="formula__visual" aria-label={text.visualAria}>
            <div className="formula-stage">
              <span className="formula-depth-plane formula-depth-plane--back" aria-hidden="true" />
              <span className="formula-depth-plane formula-depth-plane--middle" aria-hidden="true" />
              <Media src="/images/banana-cross-section.png" alt={text.crossAlt} className="formula-cross" label={text.crossLabel} />
              <span className="formula-stage__caption"><Layers3 size={15} aria-hidden="true" /> {text.caption}</span>
              <span className="formula-stage__glare" aria-hidden="true" />
            </div>
            <div className="formula-callouts">
              {text.layers.map((layer, index) => (
                <article className="formula-callout" key={layer.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{layer.title}</h3><p>{layer.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
