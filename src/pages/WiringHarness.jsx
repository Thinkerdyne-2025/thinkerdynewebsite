import PageHero from "../components/PageHero";
import imgWiringHarness from "../assets/wiringharness.jpg";
import cableh from "../assets/cableh.jpg";
import wiring from "../assets/fab_wire.jpeg";
import "./ServicePage.css";

const HARNESS_CAPABILITIES = [
  "Custom wiring harness design based on system requirements",
  "Harness assembly using industry-standard connectors and cables",
  "Support for prototype, low-volume, and production harness builds",
  "Harness routing and integration support",
];

const ASSEMBLY_INTEGRATION = [
  "Harness assembly using standard and application-specific components",
  "Connector crimping, termination, and cable preparation",
  "Harness integration support for PCB and embedded systems",
  "Engineering support for harness validation and testing",
];

export default function WiringHarness() {
  return (
    <>
      <PageHero title="Engineering Services:" serviceName="Wiring Harness" />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__panel">
                <h2 className="service-page__panel-title">Wiring Harness</h2>
                <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                  Thinkerdyne provides reliable wiring harness solutions that
                  ensure secure electrical connectivity and seamless integration
                  for embedded and electronic systems. Our harnesses are
                  developed with precise wire selection, connector integration,
                  and optimized routing to support stable power delivery, signal
                  integrity, and long-term reliability.
                </p>
                <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                  We work with trusted manufacturing partners to support both
                  prototype and production requirements, delivering
                  high-quality, production-ready wiring harness solutions for
                  embedded hardware, control systems, and custom electronic
                  products.
                </p>

                <h3
                  className="service-page__h3"
                  style={{ color: "var(--color-text)", marginTop: "1.25rem" }}
                >
                  Wiring Harness Capabilities
                </h3>
                <ul className="service-page__arrowlist">
                  {HARNESS_CAPABILITIES.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>

                <h3
                  className="service-page__h3"
                  style={{ color: "var(--color-text)" }}
                >
                  Assembly and Integration Support
                </h3>
                <ul className="service-page__arrowlist">
                  {ASSEMBLY_INTEGRATION.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__media">
                <img src={wiring} alt="Wiring harness" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
