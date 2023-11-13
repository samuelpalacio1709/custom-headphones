import { useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Headphones } from './Headphones';

export function Interactable({ onSceneLoaded, onModelLoaded, headphonesObject }) {
  return (
    <div className="interactable-zone">
      <Canvas className="grabbable">
        <directionalLight color="white" position={[0, 2, 2]} intensity={1} />
        <directionalLight color="white" position={[0, -2, -2]} intensity={1} />
        <ambientLight intensity={1} />
        <pointLight color="white" position={[0, 1, 0]} intensity={5} />
        <Headphones onModelLoaded={onModelLoaded} headphonesObject={headphonesObject} />
        <OrbitControls enableZoom={false} panSpeed={0} zoomSpeed={0} />
      </Canvas>
    </div>
  );
}
