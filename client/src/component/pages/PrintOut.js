import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";
import MedicalProfile from "./MedicalProfile"

function ComponentToPrint() {
    return (
     <MedicalProfile />
    )
}

class PrintOut extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PrintOut;