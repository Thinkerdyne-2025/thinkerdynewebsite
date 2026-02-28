import { useState, useRef } from 'react';
import { useFadeInUp } from '../../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  useFadeInUp({ ref: sectionRef });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact section section--dark" ref={sectionRef}>
      <div className="container">
        <h2 className="contact__title">Connect with Us</h2>
        <div className="contact__grid">
          {/* <div className="contact__info">
            <p>Get in touch with our expert team. We are just a click away.</p>
            <a href="#hero" className="btn btn--secondary contact__cta">
              Back to top
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
