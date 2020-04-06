import React, { Fragment } from "react";
import MedicalProfile from "./pages/MedicalProfile";
import Chart from "./pages/Chart";

function PrintComponent() {
  return (
    <Fragment>
        <MedicalProfile />
        <Chart />
    </Fragment>
  );
}

export default PrintComponent;
