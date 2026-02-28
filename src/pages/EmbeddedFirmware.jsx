import PageHero from "../components/PageHero";
import imgEmbeddedFirmware from "../assets/firmwre.jpg";
import "./ServicePage.css";

const KEY_CAPABILITIES = [
  "Embedded firmware development for microcontrollers and embedded processors",
  "Hardware bring-up and low-level driver development",
  "Peripheral driver development (GPIO, UART, SPI, I2C, CAN, ADC, PWM, USB, Ethernet)",
  "Communication protocol implementation and system integration",
  "RTOS and bare-metal firmware development",
  "Firmware debugging, optimization, and validation",
];

const DELIVERABLES = [
  "Production-ready embedded firmware source code",
  "Peripheral drivers and hardware initialization",
  "Board Support Package (BSP)",
  "Firmware documentation and integration support",
];

const SUPPORTED_PLATFORMS = [
  "ARM Cortex-M microcontrollers (STM32, NXP, Microchip, TI)",
  "8-bit, 16-bit, and 32-bit microcontrollers",
  "Bare-metal and RTOS-based embedded systems",
];

const APPLICATIONS = [
  "Industrial and embedded electronic systems",
  "IoT and connected devices",
  "Power electronics and control systems",
  "Communication and interface systems",
];

export default function EmbeddedFirmware() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Firmware Development"
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div>
              <div className="service-page__split">
                <div className="service-page__media">
                  <img src={imgEmbeddedFirmware} alt="Firmware development" />
                </div>
                <div className="service-page__panel">
                  <h2 className="service-page__panel-title">
                    Firmware Development
                  </h2>
                  <p
                    className="service-page__lead"
                    style={{ maxWidth: "100%" }}
                  >
                    At Thinkerdyne, we develop high-performance embedded
                    firmware that enables precise hardware control, reliable
                    system operation, and seamless integration between
                    processors, peripherals, and communication interfaces. Our
                    firmware is designed for stability, scalability, and
                    production readiness, supporting both prototype validation
                    and high-volume deployment.
                  </p>
                  <p
                    className="service-page__lead"
                    style={{ maxWidth: "100%" }}
                  >
                    Our engineers work closely with hardware teams to ensure
                    smooth hardware bring-up, efficient debugging, and optimized
                    system performance. Using structured development practices
                    and rigorous validation, we deliver robust firmware
                    solutions for real-world applications.
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
                </div>
                <div className="service-page__panel">
                  <h3 className="service-page__h3" style={{ marginTop: 0 }}>
                    Supported Platforms
                  </h3>
                  <ul className="service-page__arrowlist">
                    {SUPPORTED_PLATFORMS.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
