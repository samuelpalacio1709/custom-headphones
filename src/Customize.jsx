import { AnimateLeftToRigth } from './utility';
import { useLayoutEffect, useRef } from 'react';

export function Customize({ OnPropertyChange, headphonesObject }) {
  const headingRef = useRef(null);
  const colors = useRef(null);
  const pads = useRef(null);
  const headBands = useRef(null);

  useLayoutEffect(() => {
    const headingElement = headingRef.current;
    const colorsElement = colors.current;
    const padsElement = pads.current;
    const headBandElement = headBands.current;

    AnimateLeftToRigth(headingElement, 0.8, 0.1);
    AnimateLeftToRigth(colorsElement, 0.8, 0.2);
    AnimateLeftToRigth(padsElement, 0.8, 0.34);
    AnimateLeftToRigth(headBandElement, 0.8, 0.44);
  }, []);
  return (
    <div className="custom-options">
      <h1 ref={headingRef}>Tune your headphones</h1>
      <div ref={colors} className="colorOptions">
        <h3 className="option-title">Color</h3>
        <div className="slots">
          <div
            onClick={() => {
              OnPropertyChange({ color: 'white' });
            }}
            className={`color ${headphonesObject.color == 'white' && 'selectedCustomOption'}`}
            style={{ backgroundColor: '#ffffff' }}
          ></div>
          <div
            onClick={() => {
              OnPropertyChange({ color: 'black' });
            }}
            className={`color ${headphonesObject.color == 'black' && 'selectedCustomOption'}`}
            style={{ backgroundColor: '#000000' }}
          ></div>

          <div
            onClick={() => {
              OnPropertyChange({ color: 'red' });
            }}
            className={`color ${headphonesObject.color == 'red' && 'selectedCustomOption'}`}
            style={{ backgroundColor: '#572020' }}
          ></div>

          <div
            onClick={() => {
              OnPropertyChange({ color: 'green' });
            }}
            className={`color ${headphonesObject.color == 'green' && 'selectedCustomOption'}`}
            style={{ backgroundColor: '#20573c' }}
          ></div>
          <div
            onClick={() => {
              OnPropertyChange({ color: 'purple' });
            }}
            className={`color ${headphonesObject.color == 'purple' && 'selectedCustomOption'}`}
            style={{ backgroundColor: '#ab95cf' }}
          ></div>
          <div
            onClick={() => {
              OnPropertyChange({ color: 'blue' });
            }}
            className={`color ${headphonesObject.color == 'blue' && 'selectedCustomOption'}`}
            style={{ backgroundColor: '#73aae6' }}
          ></div>
        </div>
      </div>
      <div ref={pads} className="padOptions">
        <h3 className="option-title">Pads</h3>
        <div className="slots">
          <div
            onClick={() => {
              OnPropertyChange({ pad: 'foam' });
            }}
            className={`boxOption ${headphonesObject.pad == 'foam' && 'selectedCustomOption'}`}
          >
            <img src="assets/images/pads_1.png" alt="pads" />
            <h4 className="optionTitle ">Foam</h4>
          </div>
          <div
            onClick={() => {
              OnPropertyChange({ pad: 'leather' });
            }}
            className={`boxOption ${headphonesObject.pad == 'leather' && 'selectedCustomOption'}`}
          >
            <img src="assets/images/pads_2.png" alt="pads" />
            <h4 className="optionTitle ">Leather</h4>
          </div>
          <div
            onClick={() => {
              OnPropertyChange({ pad: 'fabric' });
            }}
            className={`boxOption ${headphonesObject.pad == 'fabric' && 'selectedCustomOption'}`}
          >
            <img src="assets/images/pads_3.png" alt="pads" />
            <h4 className="optionTitle ">Fabric</h4>
          </div>
        </div>
      </div>
      <div ref={headBands} className="padOptions">
        <h3 className="option-title">Headband pad</h3>
        <div className="slots">
          <div
            onClick={() => {
              OnPropertyChange({ headBand: 'foam' });
            }}
            className={`boxOption ${headphonesObject.headBand == 'foam' && 'selectedCustomOption'}`}
          >
            <img src="assets/images/headband_1.png" alt="pads" />
            <h4 className="optionTitle ">Foam</h4>
          </div>
          <div
            onClick={() => {
              OnPropertyChange({ headBand: 'leather' });
            }}
            className={`boxOption ${
              headphonesObject.headBand == 'leather' && 'selectedCustomOption'
            }`}
          >
            <img src="assets/images/headband_2.png" alt="pads" />
            <h4 className="optionTitle ">Leather</h4>
          </div>
          <div
            onClick={() => {
              OnPropertyChange({ headBand: 'fabric' });
            }}
            className={`boxOption ${
              headphonesObject.headBand == 'fabric' && 'selectedCustomOption'
            }`}
          >
            <img src="assets/images/headband_3.png" alt="pads" />
            <h4 className="optionTitle ">Fabric</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
