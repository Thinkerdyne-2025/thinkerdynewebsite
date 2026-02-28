import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  routes,
  coreServicesCategory1,
  coreServicesCategory2,
} from "../constants/images";
import "./sections/Footer.css";

const QUICK_LINKS = [
  { label: "HOME", to: routes.home },
  { label: "ABOUT US", to: "/about" },
  { label: "ENGINEERING SERVICES", to: routes.home },
  { label: "CONTACT US", to: "/contact" },
  {
    label: "LINKEDIN",
    to: "https://www.linkedin.com/company/thinkerdynetechnologies/?viewAsMember=true",
    external: true,
  },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="footer">
      <div className="footer__bg" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__col footer__find">
          <h3 className="footer__heading">Find Us</h3>
          <address className="footer__address">
            <p className="footer__line">
              <span
                className="footer__icon footer__icon--location"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              THINKERDYNE TECHNOLOGIES PRIVATE LIMITED<br></br>
              NO: 59,60, NL ARCADE, SECOND MAIN, VINAYAKA LAYOUT, SHANTHIPURA
              ELECTRONIC CITY, PHASE II, BANGALORE, KARNATAKA. 560100
            </p>
            <p className="footer__line">
              <span
                className="footer__icon footer__icon--phone"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a href="tel:+919677510113" style={{ fontSize: "15px" }}>
                +91 9620233838
              </a>
            </p>
            <p className="footer__line">
              <span
                className="footer__icon footer__icon--email"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <a
                href="mailto:info@thinkerdyne.com"
                style={{ fontSize: "15px" }}
              >
                info@thinkerdyne.com
              </a>
            </p>
          </address>
        </div>
        <div className="footer__col footer__core-services">
          <h3 className="footer__heading_service">Core Services</h3>
          <div className="footer__core-services-grid">
            <div className="footer__core-services-col">
              <h4 className="footer__subheading">Hardware Development</h4>
              <ul className="footer__list">
                {coreServicesCategory1.map((service) => (
                  <li key={service.title}>
                    <Link to={service.path}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__core-services-col">
              <h4 className="footer__subheading">Manufacturing Service</h4>
              <ul className="footer__list">
                {coreServicesCategory2.map((service) => (
                  <li key={service.title}>
                    <Link to={service.path}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__col footer__col--quick-links">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                {link.external || link.to.startsWith("http") ? (
                  <a href={link.to} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.to}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", width: "100%" }}>
        <p style={{ textAlign: "center", color: "#d6d1d1", fontSize: "14px" }}>
          Copyright © {new Date().getFullYear()} | Thinkerdyne. All rights
          reserved.
        </p>
      </div>
      {/* <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <Link to={routes.home} className="footer__logo-link" aria-label="THINKERDYNE Home">
            <img src="/thinkerdyne-logo.png" alt="" className="footer__logo-img" />
          </Link>
          <p className="footer__copy">© THINKERDYNE, All Right Reserved.</p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/company/thinkerdyne"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div> */}
      {showScrollTop && (
        <button
          type="button"
          className="footer__scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
