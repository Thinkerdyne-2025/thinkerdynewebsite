import { Link } from 'react-router-dom';
import './CtaProject.css';

export default function CtaProject() {
  return (
    <section style={{padding:"2rem 0"}}>
      <div className="container cta-project__inner">
        <h2 className="cta-project__title">Have a Hardware Project in Mind?</h2>
        <p className="cta-project__text">
          Partner with Thinkerdyne Technologies for reliable PCB and embedded hardware design.
        </p>
        <Link to="/contact" className="btn btn--primary cta-project__btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
