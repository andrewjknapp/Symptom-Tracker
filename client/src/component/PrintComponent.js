import React from "react";
import Chart from "./pages/Chart";
import MedicalProfileView from './pages/MedicalProfileView';
import LandingPage from "./pages/LandingPage";

function PrintComponent() {
  return (
    <article>
      <MedicalProfileView />
      <Chart />
      <LandingPage/>
    </article>
        
    
  );
}

export default PrintComponent;
