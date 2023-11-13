import { About } from './About';
import { Specs } from './Specs';
import { Customize } from './Customize';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function Description({ modelLoaded, OnPropertyChange, headphonesObject }) {
  return (
    <div className="product-content">
      {modelLoaded && (
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/specs" element={<Specs />} />
          <Route
            path="/customize"
            element={
              <Customize OnPropertyChange={OnPropertyChange} headphonesObject={headphonesObject} />
            }
          />
        </Routes>
      )}
    </div>
  );
}
