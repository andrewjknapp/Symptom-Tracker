import React, { Fragment, useState } from "react";
import "../assets/css/AdditionalMedicalSupport.css";


function AdditionalMedicalSupport() {
    const [service, setService] = useState(false)

    const showService = () => {
        setService(true)
    }
    return (


        <Fragment>
            <div className='buttonDiv' >
                <a className='supportButtons glow-button' target="_blank" rel="noopener noreferrer" href="http://www.ushospitalfinder.com/">Find a Hospital</a>
                <a className='supportButtons glow-button' href="#" onClick={showService}>Preventative Services</a>
            </div>
            <div className="buttonDiv">
                <a className='supportButtons glow-button' target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC COVID-19 Updates</a>
            </div>
            {
                service ? <iframe src="https://www.health.gov/myhealthfinder?widget=true" name="myhealthfinderframe" frameBorder="0" id="myhealthfinderframe" scrolling="yes" height="550"
                    width="100%" marginHeight="0" title="myhealthfinder widget" marginWidth="0" className="preventativeServices">Loading<p>Your browser does not support iframes.</p></iframe> : ''
            }
        </Fragment>
    )
}

export default AdditionalMedicalSupport;