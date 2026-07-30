import { useEffect, useRef } from 'react';
import { CheckCircle2, Layers3 } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';

gsap.registerPlugin(ScrollTrigger);

const layers = [
  ['01', 'Банановая кожура — 70%', 'Основа порошка. Источник танинов, пектина и флавоноидов — сырьё по цене отходов пищевой промышленности. Танины связываются с белками крови и ускоряют образование сгустка.'],
  ['02', 'Пектин — 15%', 'Природный полисахарид кожуры. При контакте с раневой жидкостью образует гель, который физически удерживает сгусток в ране, как сетка.'],
  ['03', 'Альгинат кальция — 15%', 'Клинически проверенный биополимер. Ионный обмен Ca²⁺↔Na⁺ ускоряет каскад свёртывания и обеспечивает быстрое поглощение крови.'],
];

export default function Formula() {
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || window.innerWidth < 800 || !root.current) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=1450',
          scrub: 0.75,
          pin: '.formula-pin',
          anticipatePin: 1,
        },
      });
      timeline
        .to('.formula-whole', { opacity: 0, scale: 0.9, y: -18, duration: 0.55 })
        .to('.formula-cross', { opacity: 1, scale: 1, duration: 0.7 }, 0.62)
        .to('.formula-callout', { opacity: 1, x: 0, stagger: 0.2, duration: 0.7 }, 1.15)
        .to('.formula-conclusion', { opacity: 1, y: 0, duration: 0.7 }, 1.95);
    }, root);
    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section id="formula" className="formula" ref={root}>
      <div className="formula-pin">
        <div className="container formula__layout">
          <div className="formula__story">
            <SectionHeading eyebrow="Материал и механизм" title={<>Внутри — природа,<br />усиленная наукой.</>} copy="Прокрутите историю: основа BananaPatch раскрывается слой за слоем." />
            <div className="formula-conclusion"><CheckCircle2 size={20} aria-hidden="true" /><p>Сырьё по цене отходов + два клинически доказанных механизма гелеобразования и свёртывания = быстрая, надёжная и дешёвая остановка кровотечения.</p></div>
          </div>
          <div className="formula__visual" aria-label="Состав BananaPatch">
            <div className="formula-stage">
              <Media src="/images/hero-banana.png" alt="Целый банан для демонстрации состава BananaPatch" className="formula-whole" label="Банан: исходное сырьё" />
              <Media src="/images/banana-cross-section.png" alt="Срез слоёв банановой кожуры" className="formula-cross" label="Срез банановой кожуры" />
              <span className="formula-stage__caption"><Layers3 size={15} aria-hidden="true" /> раскрываем состав</span>
            </div>
            <div className="formula-callouts">
              {layers.map(([number, title, copy]) => <article className="formula-callout" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
