import { useState, useRef } from "react";
import {
  useFadeInUp,
  useStaggerChildren,
} from "../../hooks/useScrollAnimation";
import "./Testimonials.css";
import reviewimg from "../../assets/review.jpeg";

const TESTIMONIALS = [
  {
    name: "Trusted Customer",
    role: "Founder – Product Engineering Company",
    text: "Extremely professional and talent team. We rely on this team completely for PCB services. Our design included an auto grade camera FPDlink module and quad core ARM processor based edge computing unit. It was a first pass success, thanks to this team. Would highly recommend.",
    rating: 5,
    initial: "AG",
    // platform: "G",
    icon: reviewimg,
  },
  {
    name: "Trusted Customer",
    role: "Senior R&D Manager – Electronics Industry",
    text: "Expert in multi-layer Hi Speed mixed signal PCB design and providing turnkey product service with end-to-end tech.",
    rating: 5,
    initial: "SK",
    // platform: "G",
    icon: reviewimg,
  },
  {
    name: "Trusted Customer",
    role: "Engineering Lead – Embedded Systems",
    text: "Thinkerdyne Technologies has provided excellent PCB design services. Their team is easy to work with, responsive, and highly professional. They handle design changes and modifications efficiently, making the entire process smooth and hassle-free.",
    rating: 5,
    initial: "MT",
    icon: reviewimg,
    // platform: "G",
  },
  {
    name: "Trusted Customer",
    role: "Technical Director – Semiconductor Industry",
    text: "Very happy with the support, Team is very friendly and deliver the projects on time with quality, really appreciate the team.",
    rating: 5,
    initial: "KP",
    icon: reviewimg,
    // platform: null,
  },
  {
    name: "Trusted Customer",
    role: "Product Manager – Technology Company",
    text: "Thinkerdyne providing pcb design and development solutions for turnkey and service requirements.",
    // Very talented team of engineers with deep technical expertise, strong understanding of design concepts and tools, and commitment to quality with on time delivery
    rating: 5,
    initial: "TA",
    icon: reviewimg,
    // platform: "P",
  },
  {
    name: "Trusted Customer",
    role: "Product Manager – Industrial Electronics",
    text: "Strongly Recommended PCB Design Partner We’ve had an excellent experience working with Thinkerdyne",
    //  for PCB design and development solutions—both turnkey and service requirements.
    rating: 5,
    initial: "DC",
    icon: reviewimg,
    // platform: "P",
  },
];

function TestimonialCard({ t, isExpanded, onToggle }) {
  const truncateLength = 120;
  const isLong = t.text.length > truncateLength;

  const displayText =
    isExpanded || !isLong ? t.text : t.text.slice(0, truncateLength) + "...";

  return (
    <div className="testimonials__card">
      {!t.platform && (
        // <span className="testimonials__card-platform" aria-hidden="true">
        //   {t.platform}
        // </span>
        <span style={{ position: "absolute", right: 0, top: "0.6rem" }}>
          <img src={t.icon} alt="" width={50} height={50} />
        </span>
      )}

      <div className="testimonials__card-body">
        <div className="testimonials__card-header">
          <div className="testimonials__avatar" aria-hidden="true">
            <svg
              className="testimonials__avatar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <div className="testimonials__card-meta">
            <p className="testimonials__card-name">{t.name}</p>
            <p className="testimonials__card-role">{t.role}</p>
          </div>
        </div>

        <div
          className="testimonials__card-rating"
          aria-label={`${t.rating} out of 5 stars`}
        >
          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i} className="testimonials__star">
              ★
            </span>
          ))}
        </div>

        <p className="testimonials__card-text">"{displayText}"</p>

        {/* Optional Read More */}
        {/* {isLong && (
          <button
            type="button"
            className="testimonials__read-more"
            onClick={onToggle}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )} */}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [expandedId, setExpandedId] = useState(null);

  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useFadeInUp({ ref: headerRef });

  useStaggerChildren({
    containerRef: gridRef,
    selector: ".testimonials__card",
  });

  return (
    <section id="testimonials" className="testimonials section section--alt">
      <div className="container">
        <div className="testimonials__header" ref={headerRef}>
          <h2 className="testimonials__title">What our clients say about us</h2>
        </div>

        <div className="testimonials__grid" ref={gridRef}>
          {TESTIMONIALS.slice(0, 6).map((t) => {
            const id = t.name + t.role;

            return <TestimonialCard key={id} t={t} />;
          })}
        </div>
      </div>
    </section>
  );
}
