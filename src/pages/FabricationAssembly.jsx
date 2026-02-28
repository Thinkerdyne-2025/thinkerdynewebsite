import PageHero from "../components/PageHero";
import { images } from "../constants/images";
import rework from "../assets/fab.png";
import fab_assembly from "../assets/fab_first.jpeg";
import fab from "../assets/rework_fab.jpeg";
import "./ServicePage.css";

const FABRICATION_SUPPORT = [
  "Support for PCB fabrication through trusted and qualified manufacturing vendors",
  "Manufacturing coordination for single-layer, double-layer, and multi-layer PCB designs",
  "Guidance on PCB material selection based on electrical, thermal, and application requirements",
  "Controlled impedance and stack-up implementation to meet signal integrity and design specifications",
  "Support for prototype, pre-production, and production fabrication requirements",
];

const ASSEMBLY_SUPPORT = [
  "Coordination with trusted assembly vendors for SMT, through-hole, and mixed-technology PCB assemblies",
  "Quick turnaround support for prototype and engineering validation builds",
  "Assembly support for prototype, pre-production, and volume manufacturing",
  "BOM verification and component readiness coordination for efficient assembly",
  "Preparation and validation of Pick and Place data and assembly documentation",
];

const PCB_REWORK = [
  "Component replacement, correction of assembly defects, and solder rework",
  "PCB modifications to implement design updates, engineering changes, or component revisions",
  "Rework support for prototype, engineering validation, and production boards",
  "Repair and restoration of faulty, damaged, or non-functional PCB assemblies",
  "Removal and replacement of SMT and through-hole components with proper handling and precision",
];

export default function FabricationAssembly() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="PCB Fabrication & Assembly"
      />
      <div className="service-page">
        {/* Intro */}
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__panel">
              <h2 className="service-page__panel-title">
                Fabrication, Assembly, and PCB Rework
              </h2>
              <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                Thinkerdyne provides professional PCB fabrication, assembly, and
                rework support to ensure reliable and efficient manufacturing of
                electronic products. We work closely with trusted and qualified
                fabrication and assembly vendors to deliver high-quality PCB
                boards that meet design specifications, performance
                requirements, and production standards.
              </p>
              <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                Our engineering-driven approach ensures accurate manufacturing
                preparation, component coordination, and assembly support,
                enabling a seamless transition from design to prototype and
                production. In addition, we provide PCB rework and modification
                support to correct issues, implement design updates, and restore
                functionality, helping extend product lifecycle and ensure
                manufacturing reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Fabrication */}
        <section className="section">
          <div className="container">
            <h2 className="service-page__section-title">PCB Fabrication</h2>
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={fab} alt="PCB fabrication" />
              </div>
              <div className="service-page__panel">
                <p
                  className="service-page__lead"
                  style={{ maxWidth: "100%", marginBottom: ".5rem" }}
                >
                  We support PCB fabrication through qualified manufacturing
                  partners, from prototype to production, with focus on quality,
                  compliance, and manufacturability.
                </p>
                <ul className="service-page__arrowlist">
                  {FABRICATION_SUPPORT.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Assembly */}
        <section className="section section--alt">
          <div className="container">
            <h2 className="service-page__section-title">PCB Assembly</h2>
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={fab_assembly} alt="PCB assembly" />
              </div>
              <div className="service-page__panel">
                <p
                  className="service-page__lead"
                  style={{ maxWidth: "100%", marginBottom: "0.5rem" }}
                >
                  Our assembly support covers SMT, through-hole, and
                  mixed-technology builds with trusted vendors for prototype and
                  volume manufacturing.
                </p>
                <ul className="service-page__arrowlist">
                  {ASSEMBLY_SUPPORT.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: PCB Rework */}
        <section className="section">
          <div className="container">
            <h2 className="service-page__section-title">PCB Rework</h2>
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={rework} alt="PCB rework" />
              </div>
              <div className="service-page__panel">
                <p
                  className="service-page__lead"
                  style={{ maxWidth: "100%", marginBottom: "0.5rem" }}
                >
                  We provide rework and modification support to correct defects,
                  implement design changes, and restore functionality of PCB
                  assemblies.
                </p>
                <ul className="service-page__arrowlist">
                  {PCB_REWORK.map((i) => (
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
