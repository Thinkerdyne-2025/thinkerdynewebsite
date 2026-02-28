import "./Footer.css";

const SERVICE_LINKS = [
  { label: "PCB Design", href: "#services" },
  { label: "PCB Analysis", href: "#services" },
  { label: "Manufacturing Service", href: "#services" },
  { label: "Reverse Engineering", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            THINKERDYNE
          </a>
          <p className="footer__tagline">
            PCB Design | Electronics Prototyping | Electronics Manufacturing |
            Reverse Engineering
          </p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__nav-title">Our Services</p>
          <ul className="footer__list">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__contact">
          <a href="#contact" className="btn btn--primary btn--sm">
            Contact Us
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            {/* Copyright © {new Date().getFullYear()} | Thinkerdyne. All rights
            reserved. */}
          </p>
        </div>
      </div>
    </footer>
  );
}
