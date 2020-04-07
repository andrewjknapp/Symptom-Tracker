import React, { Fragment, useState } from "react";
import "../assets/css/AdditionalMedicalSupport.css";


function AdditionalMedicalSupport() {
    const [hospital, setHospital] = useState(false)
    const [service, setService] = useState(false)

    const showHospital = () => {
        setHospital(true)
        setService(false)
    }
    const showService = () => {
        setHospital(false)
        setService(true)
    }
    return (


        <Fragment>
            <div className='buttonDiv' >
                <a className='supportButtons glow-button' target="_blank" href="http://www.ushospitalfinder.com/">Find a Hospital</a>
                <a className='supportButtons glow-button' onClick={showService}>Preventative Services</a>

            </div>
            <div className="buttonDiv">
                <a className='supportButtons glow-button' target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC COVID-19 Updates</a>
            </div>
            <div className='prevent'>
                {
                    hospital ? <iframe src="http://www.ushospitalfinder.com/widgets/widget" width="400" height="200" frameBorder="0"> </iframe> : ''
                }
            </div>
            {
                service ? <iframe src="https://www.health.gov/myhealthfinder?widget=true" name="myhealthfinderframe" frameBorder="0" id="myhealthfinderframe" scrolling="yes" height="550"
                    width="100%" marginHeight="0" title="myhealthfinder widget" marginWidth="0"><p>Your browser does not support iframes.</p></iframe> : ''
            }
        </Fragment>
    )
}

export default AdditionalMedicalSupport;