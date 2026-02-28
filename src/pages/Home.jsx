import Hero from '../components/sections/Hero';
import CaeSoftwares from '../components/sections/CaeSoftwares';
import Services from '../components/sections/Services';
import EngineeringProcess from '../components/sections/EngineeringProcess';
import Why from '../components/sections/Why';
import Industries from '../components/sections/Industries';
import Testimonials from '../components/sections/Testimonials';
import CtaProject from '../components/sections/CtaProject';

export default function Home() {
  return (
    <>
      <Hero />
      <CaeSoftwares />
      <Services />
      <EngineeringProcess />
      <Why />
      <Industries />
      <Testimonials />
      <CtaProject />
    </>
  );
}
