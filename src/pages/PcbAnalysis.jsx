import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './ServicePage.css';

const SIGNAL_INTEGRITY = [
  'Impedance Analysis, Trace Coupling Analysis',
  'Reflection, Ringing and Overshoot/Undershoot',
  'Single Ended and Differential Crosstalk Analysis',
  'S-Parameter Analysis',
  'Eye diagrams analysis with equalization & Timing Analysis',
  'Ibis Validation',
];

const POWER_INTEGRITY = [
  'DC Power Integrity- IR-Drop analysis',
  'AC Analysis',
  'Decoupling Analysis & Optimization.',
  'Noise Analysis',
  'Loop inductance for Decaps',
];

export default function PcbAnalysis() {
  return (
    <>
      <PageHero
        title="PCB Analysis"
        subtitle="Comprehensive signal and power integrity analysis to overcome signal loss, noise, and impedance issues."
        backgroundImage={images.pcbAnalysis}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <p className="service-page__lead">
              Thinkerdyne will take your PCB through a set of comprehensive tests to overcome Signal Loss, Noise Susceptibility, Power Dissipation, Overheating, Impedance Issues, and other malfunctions.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__content">
                <h2 className="service-page__h2">Signal Integrity Analysis</h2>
                <ul className="service-page__list">
                  {SIGNAL_INTEGRITY.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__media">
                <img src={images.lab} alt="Signal integrity analysis" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <h2 className="service-page__h2">Power Integrity Analysis</h2>
            <ul className="service-page__list service-page__list--two">
              {POWER_INTEGRITY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
