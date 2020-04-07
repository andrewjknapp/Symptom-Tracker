import React, { Fragment } from "react";
import ReactToPrint from "react-to-print";
import PrintComponent from '../PrintComponent';
import "../assets/css/PrintOut.css";


class ComponentToPrint extends React.Component {
    render() {
        return (
            <Fragment>
                <PrintComponent />
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