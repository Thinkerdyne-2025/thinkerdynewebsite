import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './ServicePage.css';

const FABRICATION = [
  'Rigid, Flex & Rigid-Flex PCB',
  'Single Sided, Double Sided and Multi Layer PCB',
  'Re-engineering an old PCB design to current standards',
];

const ASSEMBLY = [
  'Component Sourcing',
  'Thru-Hole & Surface Mount Assembly',
];

const TESTING = [
  'Visual Inspection',
  'Power On Testing',
  'Basic Board Up Testing',
  'Development of Customer specific Test Jigs for testing',
];

export default function Manufacturing() {
  return (
    <>
      <PageHero
        title="Manufacturing Service"
        subtitle="PCB fabrication, assembly, and testing in collaboration with global manufacturing and EMS partners."
        backgroundImage={images.manufacturing}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <h2 className="service-page__h2">PCB Fabrication</h2>
            <p className="service-page__lead">
              Thinkerdyne is globally connected with various manufacturing facilities for PCB manufacturing activities.
            </p>
            <ul className="service-page__list">
              {FABRICATION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__content">
                <h2 className="service-page__h2">PCB Assembly</h2>
                <p className="service-page__lead">
                  In collaboration with our EMS partners we offer the following technologies and services.
                </p>
                <ul className="service-page__list">
                  {ASSEMBLY.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__media">
                <img src={images.factory} alt="PCB assembly" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <h2 className="service-page__h2">PCB Testing</h2>
            <p className="service-page__lead">
              Thinkerdyne supports In-House testing for custom prototype designs.
            </p>
            <ul className="service-page__list">
              {TESTING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
