import { useRef } from 'react';
import { useFadeInUp } from '../../hooks/useScrollAnimation';
import { images } from '../../constants/images';
import './About.css';

const EXPERTISE = [
  'Library Service [Part–Symbol–Footprint]',
  'PCB Design Service [Schematic–Layout]',
  'Simulation Service [Signal–Power Integrity]',
  'Onsite – Engineer Development Support',
  '24/7 Engineering Support',
];

export default function About() {
  const sectionRef = useRef(null);
  useFadeInUp({ ref: sectionRef });

  return (
    <section id="about" className="about section section--alt" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <p className="about__lead">
              Thinkerdyne offers PCB layout services to design custom printed circuit boards for a wide range of applications.
            </p>
            <div className="about__visual about__visual--inline" aria-hidden="true">
              <img src={images.aboutSection} alt="" />
            </div>
            <p>
              Our expert team of PCB designers possess extensive knowledge and experience in developing high-quality printed circuit board layouts. By leveraging the latest design tools and techniques, we ensure optimal performance, reliability, and cost-effectiveness in every project.
            </p>
            <h3 className="about__subtitle">OUR EXPERTISE:</h3>
            <ul className="about__list">
              {EXPERTISE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about__visual" aria-hidden="true">
            <img src={images.pcbDesign} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
