import { useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Headphones } from './Headphones';

export function Interactable({ onModelLoaded, headphonesObject }) {
  return (
    <Canvas className="grabbable" style={{ height: '110%', width: '50%', zIndex: '10' }}>
      <directionalLight color="white" position={[0, 2, 2]} intensity={1} />
      <directionalLight color="white" position={[0, -2, -2]} intensity={1} />
      <ambientLight intensity={1} />
      <pointLight color="white" position={[0, 1, 0]} intensity={10} />
      <Headphones onModelLoaded={onModelLoaded} headphonesObject={headphonesObject} />
      <OrbitControls panSpeed={0} zoomSpeed={0} />
    </Canvas>
  );
}
