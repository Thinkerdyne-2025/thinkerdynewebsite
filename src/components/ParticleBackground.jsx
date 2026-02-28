import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const particlesOptions = {
  fullScreen: false,
  background: { color: { value: 'transparent' } },
  particles: {
    number: { value: 60 },
    color: { value: ['#ffffff'] },
    opacity: {
      value: { min: 0.15, max: 0.4 },
    },
    size: { value: { min: 1, max: 2.5 } },
    links: {
      enable: true,
      color: 'rgba(255,255,255,0.2)',
      distance: 140,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      outModes: 'out',
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: { enable: true, mode: 'grab' },
    },
    modes: {
      grab: { links: { opacity: 0.4 } },
    },
  },
};

export default function ParticleBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="hero__particles" aria-hidden="true">
      <Particles options={particlesOptions} init={init} />
    </div>
  );
}
