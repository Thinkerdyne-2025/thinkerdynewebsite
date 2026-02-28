import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PcbDesign from './pages/PcbDesign';
import PcbAnalysis from './pages/PcbAnalysis';
import Manufacturing from './pages/Manufacturing';
import ReverseEngineering from './pages/ReverseEngineering';
import EmbeddedHardware from './pages/EmbeddedHardware';
import EmbeddedFirmware from './pages/EmbeddedFirmware';
import ComponentSourcing from './pages/ComponentSourcing';
import FabricationAssembly from './pages/FabricationAssembly';
import TestingValidation from './pages/TestingValidation';
import WiringHarness from './pages/WiringHarness';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pcb-design" element={<PcbDesign />} />
        <Route path="pcb-analysis" element={<PcbAnalysis />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="reverse-engineering" element={<ReverseEngineering />} />
        <Route path="embedded-hardware" element={<EmbeddedHardware />} />
        <Route path="embedded-firmware" element={<EmbeddedFirmware />} />
        <Route path="component-sourcing" element={<ComponentSourcing />} />
        <Route path="fabrication-assembly" element={<FabricationAssembly />} />
        <Route path="testing-validation" element={<TestingValidation />} />
        <Route path="wiring-harness" element={<WiringHarness />} />
      </Route>
    </Routes>
  );
}

export default App;
