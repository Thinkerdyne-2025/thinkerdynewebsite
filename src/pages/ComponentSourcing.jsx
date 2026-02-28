import PageHero from "../components/PageHero";
import compo from "../assets/component.png";
import "./ServicePage.css";

const CAPABILITIES = [
  "Sourcing through authorized distributors",
  "BOM sourcing for prototype and production builds",
  "Component authenticity verification and counterfeit risk prevention",
  "Alternate component identification and lifecycle management",
  "Lead time optimization and supply chain coordination",
  "Support for prototype, low-volume, and production manufacturing",
];

export default function ComponentSourcing() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Component Sourcing"
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={compo} alt="Component sourcing" />
              </div>
              <div className="service-page__panel">
                <h2 className="service-page__panel-title">
                  Component Sourcing
                </h2>
                <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                  Thinkerdyne provides professional component sourcing and
                  procurement services to ensure reliable and uninterrupted
                  electronics product development and manufacturing. As
                  authorized partners with leading global distributors such as
                  Digi-Key and Mouser, and through our network of trusted local
                  authorized distributors, we source genuine, high-quality
                  electronic components that meet stringent performance,
                  reliability, and lifecycle requirements.
                </p>
                <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                  Our engineering-driven procurement approach ensures accurate
                  component selection aligned with design specifications and
                  production needs. By working exclusively with authorized
                  global and local supply channels, we minimize lead times,
                  eliminate counterfeit risks, and ensure consistent component
                  availability for both prototype development and volume
                  manufacturing.
                </p>

                <h3
                  className="service-page__h3"
                  style={{ color: "var(--color-text)", marginTop: "1.25rem" }}
                >
                  Component Sourcing Capabilities
                </h3>
                <ul className="service-page__arrowlist">
                  {CAPABILITIES.map((i) => (
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
