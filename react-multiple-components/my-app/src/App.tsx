import './App.css';
import { RotatingBanner } from './RotatingBanner/RotatingBanner';
import React from 'react';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <>
      <RotatingBanner items={items} />
    </>
  );
}

export default App;
