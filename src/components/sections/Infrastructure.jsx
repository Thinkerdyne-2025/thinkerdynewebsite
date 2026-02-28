import { useRef } from 'react';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import './Infrastructure.css';

const INFRA_ITEMS = [
  { title: 'Design Center', placeholder: true },
  { title: 'R&D LAB', placeholder: true },
];

export default function Infrastructure() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: headerRef });
  useStaggerChildren({ containerRef: gridRef, selector: '.infrastructure__item' });

  return (
    <section id="infrastructure" className="infrastructure section">
      <div className="container">
        <h2 className="infrastructure__title" ref={headerRef}>Our Infrastructure</h2>
        <div className="infrastructure__grid" ref={gridRef}>
          {INFRA_ITEMS.map((item) => (
            <div key={item.title} className="infrastructure__item">
              <h3 className="infrastructure__item-title">{item.title}</h3>
              <div className="infrastructure__placeholder" aria-hidden="true">
                <span className="infrastructure__placeholder-text">Add image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
