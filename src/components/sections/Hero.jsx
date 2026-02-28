import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroVideo from "../../assets/6466100-uhd_3840_2160_30fps.mp4";
import ParticleBackground from "../ParticleBackground";
import bg from "../../assets/bghome1.jpeg"
import "./Hero.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ELECTRONIC_HARDWARE = [
  "Hardware Design",
  "Firmware Development",
  "PCB Design & Analysis",
  "Reverse Engineering",
];

const INTEGRATED_MANUFACTURING = [
  "Component Sourcing",
  "Fabrication & Assembly",
  "Testing & Validation",
  "Wiring Harness",
];

export default function Hero() {
  const titleRef = useRef(null);
  const sublineRef = useRef(null);
  const listRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = titleRef.current;
    const sub = sublineRef.current;
    const list = listRef.current;
    const cta = ctaRef.current;
    if (!el) return;

    gsap.fromTo(
      [el, sub, list, cta],
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.2,
      },
    );
  }, []);

  return (
    <section id="hero" className="hero section section--lg">
      <div className="hero__video-wrap" aria-hidden="true">
        {/* <video
          className="hero__video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          tabIndex={-1}
        /> */}
        <img src={bg} alt="image" className="hero__video"/>
      </div>
      <ParticleBackground />
      <ParticleBackground />
      {/* <div className="hero__graphics" aria-hidden="true" /> */}
      <div className="hero__graphics_right" aria-hidden="true" />
      <div className=" hero__container">
        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__title-line">
            Engineering the Future <br />
            <span className="hero__title-nowrap"> of Connected Devices</span>
          </span>
        </h1>
        <p className="hero__subline" ref={sublineRef}>
          Turning concepts into production-ready products through expert
          engineering.
        </p>
        <div className="hero__service-groups" ref={listRef}>
          <div className="hero__service-group">
            <h3 className="hero__service-group-title">
              Electronic Hardware Development
            </h3>
            <ul className="hero__service-list" role="list">
              {ELECTRONIC_HARDWARE.map((service) => (
                <li key={service} className="hero__service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero__service-group">
            <h3 className="hero__service-group-title">
              Integrated Manufacturing Service
            </h3>
            <ul className="hero__service-list" role="list">
              {INTEGRATED_MANUFACTURING.map((service) => (
                <li key={service} className="hero__service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="#services" className="btn btn--primary hero__cta" ref={ctaRef}>
          Discover More
        </a>
      </div>
    </section>
  );
}
