import { useRef } from "react";
import {
  useFadeInUp,
  useStaggerChildren,
} from "../../hooks/useScrollAnimation";
import engineeringProcessImg from "../../assets/engineering_process.jpg";
import ep from "../../assets/ep.png";
import "./EngineeringProcess.css";

const STEPS = [
  "Requirement Analysis and Technical Specification Definition",
  "Hardware Architecture Design and Component Selection",
  "Schematic Capture and Electrical Design Validation",
  "Multi-layer PCB Layout with Signal, Power, and Thermal Optimization",
  "Design Verification including DRC, ERC, and Manufacturability Checks",
  "BOM Preparation with Availability and Lifecycle Considerations",
  "Generation of Manufacturing Deliverables (Gerber, Assembly, and Fabrication Files)",
  "Engineering Documentation and Production Release Support",
];

export default function EngineeringProcess() {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const visualRef = useRef(null);
  useFadeInUp({ ref: headerRef });
  useFadeInUp({ ref: visualRef, delay: 0.1 });
  useStaggerChildren({
    containerRef: listRef,
    selector: ".engineering-process__item",
    stagger: 0.06,
  });

  return (
    <section
      id="engineering-process"
      className="engineering-process section section--alt"
    >
      <div className="container engineering-process__inner">
        <div className="engineering-process__content">
          <div ref={headerRef}>
            <h2 className="engineering-process__title">
              Our Engineering Process
            </h2>
            <p className="engineering-process__intro">
              We follow a systematic development approach to ensure quality and
              reliability.
            </p>
          </div>
          <ul className="engineering-process__list" role="list" ref={listRef}>
            {STEPS.map((step) => (
              <li key={step} className="engineering-process__item">
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="engineering-process__visual"
          aria-hidden="true"
          ref={visualRef}
        >
          <img src={ep} alt="" className="engineering-process__img" />
        </div>
      </div>
    </section>
  );
}
