import { useRef } from 'react';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import { images } from '../../constants/images';
import './Solutions.css';

const PILLARS = [
  {
    title: 'Tailored PCB Solutions',
    description: 'Custom PCB designs crafted to meet your specific project needs, ensuring top performance and reliability.',
    cta: 'Discover More',
    href: '#contact',
    image: images.circuitBoard,
  },
  {
    title: 'Rapid Prototyping',
    description: 'Fast and efficient prototyping services to turn your ideas into functional prototypes quickly and effectively.',
    cta: 'Get Started',
    href: '#contact',
    image: images.techWorkspace,
  },
  {
    title: 'Precision Manufacturing',
    description: 'High-quality manufacturing with precision and durability, ensuring reliable electronic components for your needs.',
    cta: 'Contact Us',
    href: '#contact',
    image: images.lab,
  },
];

export default function Solutions() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: titleRef });
  useStaggerChildren({ containerRef: gridRef, selector: '.solutions__block' });

  return (
    <section id="solutions" className="solutions section section--alt">
      <div className="container">
        <h2 className="solutions__title" ref={titleRef}>Solutions</h2>
        <div className="solutions__grid" ref={gridRef}>
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="solutions__block">
              <div className="solutions__block-visual" aria-hidden="true">
                <img src={pillar.image} alt="" />
              </div>
              <div className="solutions__block-content">
                <h3 className="solutions__block-title">{pillar.title}</h3>
                <p className="solutions__block-desc">{pillar.description}</p>
                <a href={pillar.href} className="btn btn--secondary solutions__block-cta">
                  {pillar.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
