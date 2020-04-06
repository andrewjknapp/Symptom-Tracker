import React, {useState, Fragment} from "react";
import ReactToPrint from "react-to-print";
import PrintComponent from '../PrintComponent';
import MedicalProfile from './MedicalProfile';
import Chart from './Chart'
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


// function PrintOut () {
//     const [medProf, setMedProf] = useState(false)
//     const [chart, setChart] = useState(false)

//     const showMedProf = () => {
//         setMedProf(true)
//         setChart(false)
//     }

//     const showChart = () => {
//         setMedProf(false)
//         setChart(true)
//     }

//     return (
//         <Fragment>
//             <div className='buttonDiv' >
//                 <a className='supportButtons glow-button' onClick={showMedProf} >View Medical Profile</a>
//                 <a className='supportButtons glow-button' onClick={showChart}>View Chart</a>
//             </div>
//             <div className='prevent'>
//                 {
//                     medProf ?    
//                     <MedicalProfile />
//                      : ''
//                 }
//             </div>
//             {
//                 chart ? <Chart /> : ''
//             }

//         </Fragment>
//     )

// }



export default PrintOut;