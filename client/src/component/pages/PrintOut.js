<<<<<<< HEAD
import React, { Fragment} from "react";
=======
import React, { useState, Fragment } from "react";
>>>>>>> d7f5f133a860cb49d9c1a4432b051fa46f6cf8fc
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