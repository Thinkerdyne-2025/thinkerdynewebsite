import { useRef } from 'react';
import { useFadeInUp } from '../../hooks/useScrollAnimation';
import altiumLogo from "../../assets/altium_logo.png";
import kicadLogo from "../../assets/kicad_logo.png";
import cadence from "../../assets/candence.jpeg"
import "./CaeSoftwares.css";

const CAE_LOGOS = [
  // { name: "Cadence",src:cadence}
  { name: "Altium Designer", src: altiumLogo },
  { name: "KiCad", src: kicadLogo },
];

export default function CaeSoftwares() {
  const titleRef = useRef(null);
  useFadeInUp({ ref: titleRef });

  return (
    <section className="cae-softwares" aria-label="CAE Softwares">
      <h2 className="cae-softwares__title" ref={titleRef}>Engineering Tools & Technologies</h2>
      {/* <p className="cae-softwares__subtitle">Software We Use</p> */}
      <div className="cae-softwares__logos-wrap">
        <div className="cae-softwares__logos">
          {CAE_LOGOS.map((logo) => (
            <div key={logo.name} className="cae-softwares__logo">
              <img
                src={logo.src}
                alt={logo.name}
                className="cae-softwares__logo-img"
              />
              <span className="cae-softwares__logo-text">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
