import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import imgEmbeddedHardware from "../assets/homecore_hardware.png";
import "./ServicePage.css";

const KEY_CAPABILITIES = [
  "Embedded hardware architecture and system design",
  "Processor and microcontroller selection and integration",
  "Schematic design and hardware implementation",
  "High-speed and mixed-signal hardware design",
  "Power supply and power management circuit design",
  "Hardware design validation and engineering support",
];

const HW_INTERFACE_SUPPORT = [
  "UART, SPI, and I2C interfaces",
  "USB, CAN, and Ethernet interfaces",
  "ADC, DAC, and PWM interfaces",
  "Sensor and peripheral integration",
  "Communication and control interfaces",
];

const DELIVERABLES = [
  "Complete schematic design files",
  "PCB layout design support files",
  "Component libraries and documentation",
  "Bill of Materials (BOM)",
  "Manufacturing and engineering documentation",
];

const SUPPORTED_PROCESSORS = [
  "ARM Cortex-M based microcontrollers",
  "Microchip, NXP, STMicroelectronics, and TI platforms",
  "Processor-based embedded systems",
  "Industrial and IoT hardware platforms",
];

const SCOPE = [
  "Hardware architecture definition",
  "Schematic design and component selection",
  "PCB design support and integration",
  "Hardware bring-up and validation",
  "Engineering support during testing and production",
];

const APPLICATIONS = [
  "Industrial embedded systems",
  "IoT and connected devices",
  "Control and automation systems",
  "Communication and interface hardware",
  "Custom embedded electronic products",
];

export default function EmbeddedHardware() {
  return (
    <>
      <PageHero title="Engineering Services:" serviceName="Hardware Design" />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div>
              <div className="service-page__split">
                <div className="service-page__media">
                  <img src={imgEmbeddedHardware} alt="Hardware design" />
                </div>
                <div className="service-page__panel">
                  <h2 className="service-page__panel-title">Hardware Design</h2>
                  <p
                    className="service-page__lead"
                    style={{ maxWidth: "100%" }}
                  >
                    Thinkerdyne delivers advanced hardware design solutions for
                    embedded and electronic systems. We specialize in developing
                    processor-based hardware platforms that meet demanding
                    requirements for performance, reliability, and
                    manufacturability.
                  </p>
                  <p
                    className="service-page__lead"
                    style={{ maxWidth: "100%" }}
                  >
                    We work closely with customers from concept to production,
                    providing efficient, scalable, and cost-effective solutions
                    that meet global quality standards and accelerate product
                    development.
                  </p>
                </div>
              </div>

              <div style={{ height: "1.75rem" }} />

              <div className="service-page__grid-2x2">
                <div className="service-page__panel">
                  <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                    Key Capabilities
                  </h3>
                  <ul className="service-page__arrowlist">
                    {KEY_CAPABILITIES.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  {/* <div className="service-page__panel-cta">
                    <Link to="/contact" className="btn btn--secondary">
                      Let's Collaborate
                    </Link>
                  </div> */}
                </div>
                <div className="service-page__panel">
                  <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                    Supported Processors and Platforms
                  </h3>
                  <ul className="service-page__arrowlist">
                    {SUPPORTED_PROCESSORS.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  {/* <div className="service-page__panel-cta">
                    <Link to="/contact" className="btn btn--secondary">
                      Let's Collaborate
                    </Link>
                  </div> */}
                </div>
                <div className="service-page__panel">
                  <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                    Hardware Interface Support
                  </h3>
                  <ul className="service-page__arrowlist">
                    {HW_INTERFACE_SUPPORT.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  {/* <div className="service-page__panel-cta">
                    <Link to="/contact" className="btn btn--secondary">
                      Let's Collaborate
                    </Link>
                  </div> */}
                </div>
                <div className="service-page__panel">
                  <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                    Design and Development Scope
                  </h3>
                  <ul className="service-page__arrowlist">
                    {SCOPE.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  {/* <div className="service-page__panel-cta">
                    <Link to="/contact" className="btn btn--secondary">
                      Let's Collaborate
                    </Link>
                  </div> */}
                </div>
                <div className="service-page__panel">
                  <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                    Deliverables
                  </h3>
                  <ul className="service-page__arrowlist">
                    {DELIVERABLES.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  {/* <div className="service-page__panel-cta">
                    <Link to="/contact" className="btn btn--secondary">
                      Let's Collaborate
                    </Link>
                  </div> */}
                </div>
                <div className="service-page__panel">
                  <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                    Applications
                  </h3>
                  <ul className="service-page__arrowlist">
                    {APPLICATIONS.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  {/* <div className="service-page__panel-cta">
                    <Link to="/contact" className="btn btn--secondary">
                      Let's Collaborate
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
