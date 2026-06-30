import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { images } from "../constants/images";
import imgBrass from "../assets/hybrid-slip-ring-brass.png";
import imgFlange from "../assets/hybrid-slip-ring-flange.png";
import imgSide from "../assets/hybrid-slip-ring-side.png";
import imgThroughBore from "../assets/hybrid-slip-ring-through-bore.png";
import "./ProductPage.css";

const KEY_FEATURES = [
  {
    title: "Integrated Hybrid Design",
    points: [
      "Combines electrical slip ring technology with pneumatic rotary union functionality in a single compact unit.",
    ],
  },
  {
    title: "Reliable Pneumatic Transmission",
    points: [
      "Leak-resistant sealing technology",
      "Smooth compressed air transfer during continuous rotation",
      "Optimized for long service life",
    ],
  },
  {
    title: "Stable Electrical Performance",
    points: [
      "Power, signal, and communication transmission through dedicated circuits",
      "Low electrical noise and contact resistance",
      "Consistent performance under dynamic operating conditions",
    ],
  },
  {
    title: "Custom-Engineered Solutions",
    points: [
      "Number of circuits configurable as per application requirements",
      "Multiple pneumatic passages available",
      "Customized mounting interfaces and cable configurations",
    ],
  },
  {
    title: "Compact & Robust Construction",
    points: [
      "Space-saving design",
      "Durable aluminum housing",
      "Suitable for industrial environments",
    ],
  },
];

const BENEFITS = [
  "Eliminates the need for separate electrical and pneumatic rotary interfaces",
  "Reduces installation complexity and overall system footprint",
  "Improves machine reliability and operational efficiency",
  "Minimizes maintenance and downtime",
  "Supports continuous 360° rotation",
  "Tailored to meet unique customer requirements",
];

const DEFENSE_APPLICATIONS = [
  "Surveillance and reconnaissance systems",
  "Radar and antenna positioning systems",
  "Remote weapon stations",
  "Electro-optical and infrared (EO/IR) platforms",
  "Ground-based defense equipment",
  "Military communication systems",
  "Stabilized observation and targeting systems",
];

const DEFENSE_BENEFITS = [
  "High reliability in harsh operating environments",
  "Continuous 360° rotation capability",
  "Rugged construction for shock and vibration resistance",
  "Reduced maintenance requirements in field deployments",
];

const AEROSPACE_APPLICATIONS = [
  "Aircraft test equipment",
  "Ground support systems",
  "Aerospace simulation platforms",
  "Radar and communication antennas",
  "Environmental control systems",
  "Rotary test benches",
  "Unmanned aerial system (UAS) ground equipment",
];

const AEROSPACE_BENEFITS = [
  "Lightweight and compact design",
  "Reliable transmission of power, signals, FORJ, RF and compressed air",
  "Enhanced operational safety and system availability",
  "Custom configurations for specialized aerospace requirements",
];

const OTHER_APPLICATIONS = [
  {
    title: "Industrial Automation",
    text: "Robotic arms, rotary indexing tables, assembly machines, and automated production systems.",
  },
  {
    title: "Packaging Machinery",
    text: "Transfer of power, control signals, and compressed air to rotating equipment.",
  },
  {
    title: "Material Handling Systems",
    text: "Rotating platforms, conveyors, and automated handling equipment.",
  },
  {
    title: "Semiconductor & Electronics Manufacturing",
    text: "Precision rotary systems requiring clean and reliable signal transmission.",
  },
  {
    title: "Medical & Inspection Equipment",
    text: "Applications requiring simultaneous pneumatic and electrical connectivity.",
  },
];

const SPEC_ROWS = [
  ["Electrical Circuits", "As per requirement"],
  ["Current Rating", "Up to application requirement"],
  ["Signal Types", "Analog, Digital, Ethernet, Fieldbus"],
  ["Pneumatic Channels", "Single or Multiple Passages"],
  ["Operating Speed", "Application Specific"],
  ["Housing Material", "Aluminum / Stainless Steel"],
  ["Protection Class", "Up to IP65 and above"],
  ["Mounting Style", "Flange, Through bore, Shaft, Custom"],
];

const GALLERY = [
  // { src: imgBrass, alt: "Hybrid slip ring with brass pneumatic fittings" },
  { src: imgFlange, alt: "Hybrid slip ring flange mounting view" },
  {
    src: imgSide,
    alt: "Hybrid slip ring side view with electrical and pneumatic connections",
  },
  { src: imgThroughBore, alt: "Hybrid slip ring through-bore configuration" },
];

export default function Product() {
  return (
    <>
      <PageHero
        title="Hybrid Pneumatic & Electrical Slip Ring"
        subtitle="Engineered for Reliable Power, Signal, RF, FORJ and Fluid Transmission"
        backgroundImage={images.about}
      />
      <div className="product-page">
        <section className="product-page__section section">
          <div className="container product-page__section-inner product-page__section-inner--intro">
            <div className="product-page__img-wrap">
              <img
                src={imgSide}
                alt="Hybrid pneumatic and electrical slip ring"
              />
            </div>
            <div className="product-page__text">
              <h2 className="product-page__h2">
                High-Performance Rotary Interface
              </h2>
              <p className="product-page__lead">
                Our Hybrid Pneumatic & Electrical Slip Ring is a
                high-performance rotary interface designed to simultaneously
                transfer electrical power, control signals, data, and compressed
                air through a single compact assembly. Developed for demanding
                industrial and automation applications, this solution eliminates
                the complexity of multiple rotary joints while ensuring
                reliable, uninterrupted operation.
              </p>
              <p className="product-page__lead">
                Designed and customized to meet specific customer requirements,
                this hybrid slip ring has successfully resolved performance
                challenges experienced with conventional solutions, delivering
                enhanced reliability, reduced maintenance, and improved system
                uptime.
              </p>
            </div>
          </div>
        </section>

        <section
          className="product-page__section section section--alt"
          aria-labelledby="key-features-heading"
        >
          <div className="container">
            <h2
              id="key-features-heading"
              className="product-page__section-heading"
            >
              Key Features
            </h2>
            <div className="product-page__features-grid">
              {KEY_FEATURES.map((feature) => (
                <article
                  key={feature.title}
                  className="product-page__feature-card"
                >
                  <h3 className="product-page__feature-title">
                    {feature.title}
                  </h3>
                  <ul className="product-page__feature-list">
                    {feature.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-page__section section">
          <div className="container">
            <h2 className="product-page__section-heading">Benefits</h2>
            <ul className="product-page__benefits-list">
              {BENEFITS.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="product-page__section section section--alt"
          aria-labelledby="applications-heading"
        >
          <div className="container">
            <h2
              id="applications-heading"
              className="product-page__section-heading"
            >
              Applications
            </h2>

            <div className="product-page__app-grid product-page__app-grid--detailed">
              <article className="product-page__app-card">
                <h3 className="product-page__app-title">Defense Systems</h3>
                <p className="product-page__app-intro">
                  Designed for mission-critical defense applications requiring
                  reliable transmission of power, signals, and pneumatic media
                  across rotating interfaces.
                </p>
                <h4 className="product-page__app-subtitle">
                  Typical Applications
                </h4>
                <ul className="product-page__app-list">
                  {DEFENSE_APPLICATIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4 className="product-page__app-subtitle">Benefits</h4>
                <ul className="product-page__app-list">
                  {DEFENSE_BENEFITS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="product-page__app-card">
                <h3 className="product-page__app-title">Aerospace Systems</h3>
                <p className="product-page__app-intro">
                  Engineered to meet the demanding requirements of aerospace
                  platforms where performance, reliability, and compactness are
                  critical.
                </p>
                <h4 className="product-page__app-subtitle">
                  Typical Applications
                </h4>
                <ul className="product-page__app-list">
                  {AEROSPACE_APPLICATIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4 className="product-page__app-subtitle">Benefits</h4>
                <ul className="product-page__app-list">
                  {AEROSPACE_BENEFITS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="product-page__app-grid product-page__app-grid--compact">
              {OTHER_APPLICATIONS.map((app) => (
                <article
                  key={app.title}
                  className="product-page__app-card product-page__app-card--compact"
                >
                  <h3 className="product-page__app-title">{app.title}</h3>
                  <p className="product-page__app-text">{app.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-page__section section">
          <div className="container">
            <h2 className="product-page__section-heading">Product Gallery</h2>
            <div className="product-page__gallery">
              {GALLERY.map((image) => (
                <div key={image.alt} className="product-page__gallery-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="product-page__section section section--alt">
          <div className="container">
            <h2 className="product-page__section-heading">
              Customer Success Story
            </h2>
            <div className="product-page__story">
              <p>
                This hybrid slip ring was specifically developed to overcome
                reliability issues experienced with a previously installed
                competitive solution. By analyzing the customer&apos;s
                operational challenges and application requirements, our
                engineering team delivered a customized design that
                significantly improved system performance.
              </p>
              <p>
                The result was enhanced reliability, reduced maintenance
                requirements, and positive customer appreciation for
                successfully resolving a long-standing operational issue.
              </p>
            </div>
          </div>
        </section>

        <section className="product-page__section section">
          <div className="container">
            <h2 className="product-page__section-heading">
              Technical Specifications
            </h2>
            <div className="product-page__table-wrap">
              <table className="product-page__table">
                <thead>
                  <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Customizable Options</th>
                  </tr>
                </thead>
                <tbody>
                  {SPEC_ROWS.map(([param, value]) => (
                    <tr key={param}>
                      <td>{param}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="product-page__spec-note">
              Specifications can be customized based on application
              requirements.
            </p>
          </div>
        </section>

        <section className="product-page__section section product-page__cta">
          <div className="container product-page__cta-inner">
            <h2 className="product-page__h2 product-page__cta-title">
              Why Choose Our Hybrid Slip Rings?
            </h2>
            <p className="product-page__cta-text">
              With extensive experience in electromechanical rotary transmission
              solutions, we provide application-specific designs that solve
              real-world engineering challenges. Our focus is not only on
              supplying a component but on delivering a reliable solution that
              enhances overall system performance and customer satisfaction.
            </p>
            <p className="product-page__cta-text product-page__cta-text--emphasis">
              Looking for a customized hybrid slip ring solution? Contact our
              engineering team today to discuss your application requirements.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
