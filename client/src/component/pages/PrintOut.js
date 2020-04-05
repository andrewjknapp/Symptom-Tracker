import React, {Fragment} from "react";
import ReactToPrint from "react-to-print";
import MedicalProfile from "./MedicalProfile"
import Chart from "./Chart";
import "../assets/css/PrintOut.css";


class ComponentToPrint extends React.Component {
    render() {
        return (
            <Fragment>
            <MedicalProfile />
            <Chart />
            </Fragment>
        )
    }
}

class PrintOut extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <button id='printButton' className='glow-button'>Print this out!</button>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

export default PrintOut;