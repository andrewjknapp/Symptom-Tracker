import React from 'react';
import Chart from './pages/Chart';
import MedicalProfileView from './pages/MedicalProfileView';
import LandingPage from './pages/LandingPage';

function PrintComponent() {
  return (
    <article>
      <MedicalProfileView isPrinting={true} />
      <Chart isPrinting={true} />
      <LandingPage isPrinting={true} />
    </article>
  );
}

export default PrintComponent;
