import { useEffect, useRef } from 'react';
import { CheckCircle2, Layers3 } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../ui/SectionHeading';
import Media from '../ui/Media';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

export default function Formula() {
  const { content } = useI18n();
  const text = content.formula;
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const stageTiltX = useMotionValue(0);
  const stageTiltY = useMotionValue(0);
  const stageRotateX = useSpring(stageTiltX, { stiffness: 130, damping: 22 });
  const stageRotateY = useSpring(stageTiltY, { stiffness: 130, damping: 22 });

  const tiltStage = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stageTiltX.set(y * -5);
    stageTiltY.set(x * 7);
  };

  const resetStage = () => {
    stageTiltX.set(0);
    stageTiltY.set(0);
  };

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
        .to('.formula-depth-plane', { opacity: 1, rotateY: -18, stagger: 0.08, duration: 0.65 }, 0.52)
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
            <SectionHeading eyebrow={text.eyebrow} title={<>{text.title[0]}<br />{text.title[1]}</>} copy={text.copy} />
            <div className="formula-conclusion"><CheckCircle2 size={20} aria-hidden="true" /><p>{text.conclusion}</p></div>
          </div>
          <div className="formula__visual" aria-label={text.visualAria}>
            <motion.div
              className="formula-stage"
              style={{ rotateX: reduceMotion ? 0 : stageRotateX, rotateY: reduceMotion ? 0 : stageRotateY }}
              onPointerMove={tiltStage}
              onPointerLeave={resetStage}
            >
              <span className="formula-depth-plane formula-depth-plane--back" aria-hidden="true" />
              <span className="formula-depth-plane formula-depth-plane--middle" aria-hidden="true" />
              <Media src="/images/hero-banana.png" alt={text.bananaAlt} className="formula-whole" label={text.bananaLabel} />
              <Media src="/images/banana-cross-section.png" alt={text.crossAlt} className="formula-cross" label={text.crossLabel} />
              <span className="formula-stage__caption"><Layers3 size={15} aria-hidden="true" /> {text.caption}</span>
              <span className="formula-stage__glare" aria-hidden="true" />
            </motion.div>
            <div className="formula-callouts">
              {text.layers.map((layer, index) => <article className="formula-callout" key={layer.title}><span>0{index + 1}</span><div><h3>{layer.title}</h3><p>{layer.copy}</p></div></article>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
