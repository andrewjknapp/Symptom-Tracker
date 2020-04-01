import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";
import MedicalProfile from "./MedicalProfile"

class ComponentToPrint extends React.Component {
    render() {
        return (
            <MedicalProfile />
        )
    }
}

class PrintOut extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <button id='printButton' href="#">Print this out!</button>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

export default PrintOut;