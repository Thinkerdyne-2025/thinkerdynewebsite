/**
 * SEO meta content per route (pathname).
 * Used by Layout to set document title and meta tags.
 */
const SITE_NAME = 'THINKERDYNE';

export const seoByPath = {
  '/': {
    title: `${SITE_NAME} | PCB Design & Electronics Solutions`,
    description:
      'Thinkerdyne Technologies delivers end-to-end electronics product development: PCB design, embedded hardware & firmware, fabrication, assembly, testing, and wiring harness. Your trusted partner for production-ready solutions.',
    keywords:
      'PCB design, electronics engineering, embedded systems, hardware design, firmware development, PCB fabrication, assembly, testing validation, wiring harness, Bengaluru',
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Thinkerdyne Technologies is an electronics engineering services company in Bengaluru. We specialize in hardware design, PCB development, and manufacturing support for industrial automation, IoT, and embedded systems.',
    keywords:
      'about Thinkerdyne, electronics engineering company, Bengaluru, PCB design company, embedded systems design',
  },
  '/contact': {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      'Get in touch with Thinkerdyne for PCB design, embedded hardware, fabrication, assembly, and testing services. Request a callback or send an enquiry for your electronics project.',
    keywords:
      'contact Thinkerdyne, PCB design quote, electronics engineering contact, Bengaluru',
  },
  '/pcb-design': {
    title: `PCB Design & Analysis | ${SITE_NAME}`,
    description:
      'Professional PCB design and analysis services: schematic capture, multi-layer layout, signal integrity, power integrity, and thermal analysis. From compact boards to complex high-speed systems.',
    keywords:
      'PCB design, PCB layout, schematic design, signal integrity, power integrity, Altium, KiCad, high-speed PCB',
  },
  '/pcb-analysis': {
    title: `PCB Analysis | ${SITE_NAME}`,
    description:
      'Comprehensive signal and power integrity analysis for PCB designs. Overcome signal loss, noise, and impedance issues with our engineering expertise.',
    keywords:
      'PCB analysis, signal integrity, power integrity, SI PI analysis, PCB validation',
  },
  '/manufacturing': {
    title: `Manufacturing Services | ${SITE_NAME}`,
    description:
      'PCB fabrication, assembly, and testing in collaboration with global manufacturing and EMS partners. Prototype to production support.',
    keywords:
      'PCB manufacturing, EMS, fabrication, assembly, electronics manufacturing',
  },
  '/reverse-engineering': {
    title: `Reverse Engineering | ${SITE_NAME}`,
    description:
      'PCB reverse engineering services: schematic reconstruction, BOM extraction, layout recreation, and design validation for manufacturing readiness.',
    keywords:
      'PCB reverse engineering, schematic reconstruction, BOM extraction, circuit analysis',
  },
  '/embedded-hardware': {
    title: `Hardware Design | ${SITE_NAME}`,
    description:
      'Embedded hardware design and system design: processor selection, schematic design, high-speed and mixed-signal design, power management. Production-ready platforms.',
    keywords:
      'embedded hardware design, PCB hardware, microcontroller design, ARM Cortex, system design',
  },
  '/embedded-firmware': {
    title: `Firmware Development | ${SITE_NAME}`,
    description:
      'Embedded firmware development for microcontrollers: drivers, RTOS, bare-metal, hardware bring-up, and validation. ARM Cortex-M, STM32, NXP, and more.',
    keywords:
      'embedded firmware, firmware development, microcontroller firmware, RTOS, device drivers',
  },
  '/component-sourcing': {
    title: `Component Sourcing | ${SITE_NAME}`,
    description:
      'Reliable component sourcing for prototype and production. BOM sourcing, authenticity verification, alternate identification, and supply chain coordination.',
    keywords:
      'electronic component sourcing, BOM sourcing, component procurement, counterfeit prevention',
  },
  '/fabrication-assembly': {
    title: `PCB Fabrication & Assembly | ${SITE_NAME}`,
    description:
      'PCB fabrication, assembly, and rework support through qualified vendors. SMT, through-hole, prototype to production. Manufacturing-ready assemblies.',
    keywords:
      'PCB fabrication, PCB assembly, SMT assembly, rework, manufacturing',
  },
  '/testing-validation': {
    title: `PCB Testing & Validation | ${SITE_NAME}`,
    description:
      'PCB testing and validation services: functional testing, hardware bring-up, design verification, debug and failure analysis. Production-ready validation.',
    keywords:
      'PCB testing, validation, functional testing, hardware bring-up, failure analysis',
  },
  '/wiring-harness': {
    title: `Wiring Harness | ${SITE_NAME}`,
    description:
      'Custom wiring harness design and assembly for PCB and embedded systems. Prototype to production harness builds with industry-standard connectors.',
    keywords:
      'wiring harness, cable harness, custom harness design, connector assembly',
  },
};

/** Default SEO when path is not in seoByPath */
export const defaultSeo = {
  title: `${SITE_NAME} | PCB Design & Electronics Solutions`,
  description:
    'Thinkerdyne Technologies delivers electronics product development: PCB design, embedded hardware & firmware, fabrication, assembly, and testing.',
  keywords:
    'PCB design, electronics engineering, embedded systems, Thinkerdyne',
};
