import { useLayoutEffect, useRef } from 'react';
import { AnimateLeftToRigth } from './utility';

export function About() {
  const headingRef = useRef(null);
  const secondTextRef = useRef(null);
  const paragraphRef = useRef(null);

  useLayoutEffect(() => {
    const headingElement = headingRef.current;
    const textElement = secondTextRef.current;
    const pElement = paragraphRef.current;
    console.log('s');
    AnimateLeftToRigth(headingElement, 0.8, 0.1);
    AnimateLeftToRigth(textElement, 0.8, 0.3);
    AnimateLeftToRigth(pElement, 0.8, 0.5);
  }, []);
  return (
    <>
      <div className="main-title">
        <h1 ref={headingRef}>Headphones Redefined</h1>
        <h2 ref={secondTextRef}>Your Sound, Your Style, Your Way</h2>
      </div>

      <div className="description">
        <p ref={paragraphRef}>
          Unleash your personality with our range of avant-garde headphone designs. From sleek
          minimalism to bold aesthetics, our headphones{' '}
          <strong>seamlessly blend style with cutting-edge technology</strong>, making a statement
          wherever you go.
        </p>
      </div>
    </>
  );
}
