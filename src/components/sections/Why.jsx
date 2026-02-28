import { useRef } from "react";
import {
  useFadeInUp,
  useStaggerChildren,
} from "../../hooks/useScrollAnimation";
import { images } from "../../constants/images";
import bgImage from "../../assets/bg.jpeg";
import "./Why.css";
import {
  LuBriefcase,
  LuStar,
  LuRocket,
  LuHandshake,
  LuShieldCheck,
  LuLightbulb,
  LuUsers,
  LuGlobe,
} from "react-icons/lu";

// const FACTORS = [
//   {
//     title: "Experience",
//     // description: "Proven expertise in PCB design and electronics.",
//     image: images.whyExperience,
//   },
//   {
//     title: "Excellence",
//     // description: "High-quality deliverables and attention to detail.",
//     image: images.whyGlobalReach,
//   },
//   {
//     title: "Time To Market",
//     // description: "Efficient processes to accelerate your product launch.",
//     image: images.whyTimeToMarket,
//   },
//   {
//     title: "Reliable Partner",
//     // description: "Dedicated support and long-term collaboration.",
//     image: images.whyReliable,
//   },
//   {
//     title: "Quality Assurance",
//     // description: "Rigorous testing and validation at every stage.",
//     image: images.whyReliable,
//   },
//   {
//     title: "Innovation",
//     // description: "Cutting-edge technology and forward-thinking methodologies.",
//     image: images.whyInnovation,
//   },

//   {
//     title: "Customer Focus",
//     // description: "Tailored solutions built around your unique requirements.",
//     image: images.whyCustomerFocus,
//   },
//   {
//     title: "Global Reach",
//     // description: "Serving clients worldwide with scalable solutions.",
//     image: images.whyGlobalReach,
//   },
// ];
const FACTORS = [
  {
    title: "Experience",
    icon: LuBriefcase,
    description: "Proven expertise in PCB design and electronics.",
  },
  {
    title: "Excellence",
    icon: LuStar,
    description: "High-quality deliverables and attention to detail.",
  },
  {
    title: "Time To Market",
    icon: LuRocket,
    description: "Efficient processes to accelerate your product launch.",
  },
  {
    title: "Reliable Partner",
    icon: LuHandshake,
    description: "Dedicated support and long-term collaboration.",
  },
  {
    title: "Quality Assurance",
    icon: LuShieldCheck,
    description: "Rigorous testing and validation at every stage.",
  },
  {
    title: "Innovation",
    icon: LuLightbulb,
    description: "Cutting-edge technology and forward-thinking methodologies.",
  },
  {
    title: "Customer Focus",
    icon: LuUsers,
    description: "Tailored solutions built around your unique requirements.",
  },
  {
    title: "Global Reach",
    icon: LuGlobe,
    description: "Serving clients worldwide with scalable solutions.",
  },
];
export default function Why() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: headerRef });
  useStaggerChildren({ containerRef: gridRef, selector: ".why__card" });

  return (
    <section
      id="why"
      className="why section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="why__overlay" aria-hidden="true" />
      <div className="container why__content">
        <div className="why__header" ref={headerRef}>
          <h2 className="why__title">Our Competitive Advantage</h2>
          <p className="why__subtitle">Our Core Strengths &amp; Values</p>
        </div>
        <div className="why__grid" ref={gridRef}>
          {/* {FACTORS.map((factor) => (
            <div key={factor.title} className="why__card">
              <div className="why__card-img-wrap" aria-hidden="true">
                <img src={factor.image} alt="" />
              </div>
              <h3 className="why__card-title">{factor.title}</h3>
              <p className="why__card-desc">{factor.description}</p>
            </div>
          ))} */}

          {FACTORS.map((factor) => {
            const Icon = factor.icon;

            return (
              <div key={factor.title} className="why__card">
                <div className="why__icon">
                  <Icon />
                </div>
                <h3 className="why__card-title">{factor.title}</h3>
                <p className="why__card-desc">{factor.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
