import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  useFadeInUp,
  useStaggerChildren,
} from "../../hooks/useScrollAnimation";
import {
  coreServicesCategory1,
  coreServicesCategory2,
  images,
} from "../../constants/images";
import imgEmbeddedHardware from "../../assets/homecore_hardware.png";
import imgEmbeddedFirmware from "../../assets/firmwre.jpg";
import imgPcbDesign from "../../assets/pcb.png";
import imgReverseEngineering from "../../assets/reverse.jpg";
import imgWiringHarness from "../../assets/wiring.png";
import bgImage from "../../assets/bg.jpeg";
import compo from "../../assets/component.png";
import fab from "../../assets/fab.png";
import testing from "../../assets/testing.png";
import core_bg from "../../assets/core_bg.jpg";
import "./Services.css";

const SERVICE_DESCRIPTIONS = {
  "Hardware Design":
    "Our engineering team develops production-ready embedded hardware and firmware for reliable, high-performance electronic systems.",
  "Firmware Development":
    "Our engineering team develops production-ready embedded hardware and firmware for reliable, high-performance electronic systems.",
  "PCB Design & Analysis":
    "With extensive PCB design expertise, our engineering team delivers solutions ranging from compact controller boards to complex high-speed electronic systems. Our team provides comprehensive signal integrity, power integrity, and thermal analysis to ensure reliable and high-performance electronic systems.",
  "Reverse Engineering":
    "Our engineering team provides reverse engineering solutions to recreate, analyze, and optimize existing electronic hardware.",
  "Component Sourcing":
    "Our engineering team ensures reliable component sourcing, providing genuine electronic components to support prototype and production requirements.",
  "Fabrication & Assembly":
    "We deliver reliable PCB fabrication and assembly services through trusted global vendor partnerships, ensuring high-quality and production-ready electronic assemblies.",
  "Testing & Validation":
    "Thinkerdyne delivers PCB testing and validation services to ensure reliable, high-performance, and production-ready electronic assemblies.",
  "Wiring Harness":
    "Thinkerdyne provides custom wiring harness solutions for reliable, efficient, and production-ready electrical connectivity.",
};

const SERVICE_IMAGES = {
  "Hardware Design": imgEmbeddedHardware,
  "Firmware Development": imgEmbeddedFirmware,
  "PCB Design & Analysis": imgPcbDesign,
  "Reverse Engineering": imgReverseEngineering,
  "Component Sourcing": compo,
  "Fabrication & Assembly": fab,
  "Testing & Validation": testing,
  "Wiring Harness": imgWiringHarness,
};

export default function Services() {
  const headerRef = useRef(null);
  const grid1Ref = useRef(null);
  const grid2Ref = useRef(null);
  useFadeInUp({ ref: headerRef });
  useStaggerChildren({ containerRef: grid1Ref, selector: ".services__card" });
  useStaggerChildren({ containerRef: grid2Ref, selector: ".services__card" });

  return (
    <section
      id="services"
      className="services section"
      style={{ backgroundImage: `url(${core_bg})` }}
    >
      <div className="services__overlay" aria-hidden="true" />
      <div className="services__content">
        <div className="services__header-wrap container container--narrow">
          <div className="services__header" ref={headerRef}>
            <h2 className="services__title">Core Services</h2>
            <p className="services__subtitle">
              Your trusted partner for reliable and value-driven engineering
              solutions.
            </p>
          </div>
        </div>
        <div className="services__grid-wrap container container--narrow">
          <h3 className="services__category-title">
            Electronic Hardware Development
          </h3>
          <div className="services__grid" ref={grid1Ref}>
            {coreServicesCategory1.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="services__card"
              >
                <div className="services__card-img-wrap" aria-hidden="true">
                  <img src={SERVICE_IMAGES[service.title]} alt="" />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">
                  {SERVICE_DESCRIPTIONS[service.title]}
                </p>
                <span className="services__card-link">Know more →</span>
              </Link>
            ))}
          </div>
          <h3 className="services__category-title">
            Integrated Manufacturing Services
          </h3>
          <div className="services__grid" ref={grid2Ref}>
            {coreServicesCategory2.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="services__card"
              >
                <div className="services__card-img-wrap" aria-hidden="true">
                  <img src={SERVICE_IMAGES[service.title]} alt="" />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">
                  {SERVICE_DESCRIPTIONS[service.title]}
                </p>
                <span className="services__card-link">Know more →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
