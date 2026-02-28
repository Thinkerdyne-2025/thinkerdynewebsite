import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { routes, serviceRoutes } from "../constants/images";
import "./Navbar.css";
import thinkerdynelogo from "../assets/tlogo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to={"/"} className="navbar__brand" onClick={closeMenu}>
          <img
            src={thinkerdynelogo}
            alt="THINKERDYNE"
            className="navbar__logo-img"
          />
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}>
          <ul className="navbar__list">
            <li>
              <Link
                to={routes.home}
                className="navbar__link"
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar__link" onClick={closeMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="navbar__dropdown" ref={dropdownRef}>
              <span
                className={`navbar__link navbar__link--trigger ${dropdownOpen ? "navbar__link--open" : ""}`}
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                ENGINEERING SERVICES
                <span className="navbar__dropdown-chevron" aria-hidden="true" />
              </span>
              {dropdownOpen && (
                <ul
                  className={`navbar__dropdown-menu ${dropdownOpen ? "navbar__dropdown-menu--open" : ""}`}
                >
                  {serviceRoutes.map((service) => (
                    <li key={service.title}>
                      <Link
                        to={service.path}
                        className="navbar__dropdown-link"
                        onClick={closeMenu}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <Link
            to="/contact"
            className="navbar__link navbar__contact"
            onClick={closeMenu}
          >
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
}
