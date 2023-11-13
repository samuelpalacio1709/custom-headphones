import { useLayoutEffect, useRef } from 'react';
import { AnimateLeftToRigth } from './utility';

export function Specs() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useLayoutEffect(() => {
    const headingElement = headingRef.current;
    const pElement = paragraphRef.current;
    console.log('s');
    AnimateLeftToRigth(headingElement, 0.8, 0.1);
    AnimateLeftToRigth(pElement, 0.8, 0.5);
  }, []);
  return (
    <>
      <div className="main-title-specs">
        <h1 ref={headingRef}>Sac Pro-X</h1>
      </div>

      <div className="description">
        <p ref={paragraphRef}>
          <strong>Driver Type: </strong>Dual Neodymium Dynamic Drivers <br />
          <strong>Frequency Response:</strong> 10Hz - 40kHz <br />
          <strong>Impedance</strong>: 32 Ohms <br />
          <strong>Sensitivity</strong>: 110 dB/mW <br />
          <strong>Total Harmonic Distortion (THD):</strong> {'< 0.5%'} Noise Isolation: Up to 25dB{' '}
          <br />
          <strong>Cable Type: </strong> Detachable braided oxygen-free copper cable <br />
          <strong>Cable Length: </strong> 1.5 meters <br />
          <strong>Connector Type: </strong> Gold-plated 3.5mm stereo jack <br />
          <strong> Weight: </strong> 300 grams <br />
        </p>
      </div>
    </>
  );
}
