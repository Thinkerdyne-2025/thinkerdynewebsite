import PageHero from "../components/PageHero";
import imgReverseEngineering from "../assets/reverse_engineering.jpg";
import "./ServicePage.css";
import rvp from "../assets/reverse_engi.jpeg";
const RE_CAPABILITIES = [
  "PCB hardware analysis and circuit architecture identification",
  "Schematic reconstruction and connectivity verification",
  "Component identification and BOM extraction",
  "PCB layout recreation with accurate routing and structure",
  "Component library and footprint development",
  "Design validation for accuracy and manufacturing readiness",
];

const DELIVERABLES = [
  "Recreated schematic design files (Altium, KiCad, or customer-specified format)",
  "Recreated PCB layout files with complete routing and layer structure",
  "Verified component libraries including symbols and footprints",
  "Bill of Materials (BOM) with component specifications and manufacturer details",
  "Gerber, drill, and fabrication files for manufacturing",
  "Complete engineering documentation for production and future modifications",
];

export default function ReverseEngineering() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Reverse Engineering"
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={rvp} alt="Reverse engineering" />
              </div>
              <div className="service-page__panel">
                <h2 className="service-page__panel-title">
                  Reverse Engineering
                </h2>
                <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                  Thinkerdyne delivers expert PCB reverse engineering to
                  reconstruct schematics and layouts from existing boards. Our
                  process ensures accurate design recovery, enabling redesign,
                  analysis, and reliable manufacturing support when original
                  files are unavailable.
                </p>
                <p
                  className="service-page__lead"
                  style={{ maxWidth: "100%", fontWeight: 600 }}
                >
                  We currently support reverse engineering of single-layer and
                  double-layer PCB designs.
                </p>

                <h3 className="service-page__h3">
                  Our Reverse Engineering Capabilities
                </h3>
                <ul className="service-page__arrowlist">
                  {RE_CAPABILITIES.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>

                <h3 className="service-page__h3">Deliverables</h3>
                <ul className="service-page__arrowlist">
                  {DELIVERABLES.map((i) => (
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
