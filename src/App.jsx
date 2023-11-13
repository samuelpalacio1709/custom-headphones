import './App.css';
import { Header } from './Header';
import { Interactable } from './Interactable';
import { Description } from './Description';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { Suspense } from 'react';

function App() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [headphonesObject, setHeadphones] = useState({
    color: 'white',
    pad: 'foam',
    headBand: 'foam'
  });

  function setHeadphonesProperty(property) {
    const newObj = { ...headphonesObject };
    Object.assign(newObj, property);
    setHeadphones(newObj);
  }

  function onModelLoaded() {
    console.log('r');
    setModelLoaded(true);
  }

  useEffect(() => {
    setModelLoaded(false);
  }, []);
  return (
    <div className="content">
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          {modelLoaded && <Header />}
          <div className="product">
            <Description
              modelLoaded={modelLoaded}
              OnPropertyChange={setHeadphonesProperty}
              headphonesObject={headphonesObject}
            />
            <Interactable onModelLoaded={onModelLoaded} headphonesObject={headphonesObject} />
          </div>
          <img className="instructions" src="assets/images/rotateIcon.png" alt="rotate 3d" />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
