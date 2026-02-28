import { useRef } from "react";
import {
  useFadeInUp,
  useStaggerChildren,
} from "../../hooks/useScrollAnimation";
import { images } from "../../constants/images";
import imgDefense from "../../assets/defense.jpg";
import imgRoboticAutomation from "../../assets/robotic_automation.jpg";
import imgIotSmartDevices from "../../assets/iotsmart_device.jpg";
import "./Industries.css";

const INDUSTRIES = [
  { name: "Defense", image: imgDefense },
  { name: "Aerospace", image: images.industryAerospace },
  { name: "Automotive", image: images.industryAutomotive },
  { name: "Medical", image: images.industryMedical },
  { name: "Robotics & Automation", image: imgRoboticAutomation },
  { name: "Telecommunication", image: images.industryTelecom },
  { name: "Industrial", image: images.industryIndustrial },
  { name: "Consumer Electronics", image: images.industryConsumer },
  // { name: "Energy & Power", image: images.industryEnergy },
  // { name: 'IoT & Smart Devices', image: imgIotSmartDevices },
];

export default function Industries() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: titleRef });
  useStaggerChildren({ containerRef: gridRef, selector: ".industries__item" });

  return (
    <section id="industries" className="industries section section--alt">
      <div className="container">
        <h2 className="industries__title" ref={titleRef}>
          Industries We Serve
        </h2>
        <div className="industries__grid" ref={gridRef}>
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="industries__item"
              style={{ backgroundImage: `url(${industry.image})` }}
            >
              <span className="industries__item-name">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
