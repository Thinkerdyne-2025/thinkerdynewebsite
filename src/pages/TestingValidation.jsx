import PageHero from "../components/PageHero";
import testValideImg from "../assets/test_valide.jpeg";
import "./ServicePage.css";

const TESTING_CAPABILITIES = [
  "Functional testing to verify correct system operation",
  "Power-on testing and hardware bring-up support",
  "Interface testing (UART, SPI, I2C, CAN, USB, Ethernet)",
  "Signal and power validation support",
  "Prototype and production board testing",
];

const DEBUG_FAILURE_ANALYSIS = [
  "Hardware debugging and issue identification",
  "Root cause analysis of functional failures",
  "Support for design corrections and improvements",
  "Engineering support for design stabilization",
];

const VALIDATION_VERIFICATION = [
  "Design validation against electrical and functional requirements",
  "Hardware and firmware integration testing",
  "Interface and peripheral validation",
  "System-level functional verification",
];

const PROTOTYPE_TO_PRODUCTION = [
  "Prototype validation testing",
  "Engineering sample testing",
  "Pre-production testing support",
  "Production validation support",
];

export default function TestingValidation() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="PCB Testing & Validation"
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={testValideImg} alt="PCB testing and validation" />
              </div>
              <div className="service-page__panel">
                <h2 className="service-page__panel-title">
                  PCB Testing &amp; Validation
                </h2>
                <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                  Thinkerdyne provides professional PCB testing and validation
                  services to ensure electronic assemblies meet functional,
                  electrical, and performance requirements with confidence. Our
                  engineering-driven testing approach verifies hardware
                  functionality, confirms design integrity, and identifies
                  potential issues early to ensure reliable and stable system
                  operation.
                </p>
                <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                  We support validation throughout the product development
                  lifecycle, including hardware bring-up, prototype testing,
                  design verification, and pre-production readiness. This
                  structured process ensures every PCB is fully validated,
                  production-ready, and prepared for seamless system integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__grid-2x2">
              <div className="service-page__panel">
                <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                  Testing Capabilities
                </h3>
                <ul className="service-page__arrowlist">
                  {TESTING_CAPABILITIES.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__panel">
                <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                  Debug and Failure Analysis
                </h3>
                <ul className="service-page__arrowlist">
                  {DEBUG_FAILURE_ANALYSIS.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__panel">
                <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                  Validation and Verification
                </h3>
                <ul className="service-page__arrowlist">
                  {VALIDATION_VERIFICATION.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__panel">
                <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                  Prototype to Production Testing
                </h3>
                <ul className="service-page__arrowlist">
                  {PROTOTYPE_TO_PRODUCTION.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
