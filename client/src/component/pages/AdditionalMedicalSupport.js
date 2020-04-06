import React, { Fragment, Component, useState } from "react";
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
                <a className='supportButtons glow-button' onClick={showHospital}>Find a Hospital</a>
                <a className='supportButtons glow-button' onClick={showService}>Preventative Services</a>

            </div>
            <div className="buttonDiv">
                <a className='supportButtons glow-button' target="_blank" onClick={e => window.location.href = "https://www.cdc.gov/coronavirus/2019-ncov/index.html"}>Visit CDC.gov for COVID-19 Public Health Updates</a>
            </div>
            <div className='prevent'>
                {
                    hospital ? <iframe src="http://www.ushospitalfinder.com/widgets/widget" width="400" height="200" frameborder="0"> </iframe> : ''
                }
            </div>
            {
                service ? <iframe src="https://www.health.gov/myhealthfinder?widget=true" name="myhealthfinderframe" frameborder="0" id="myhealthfinderframe" scrolling="yes" height="550"
                    width="100%" marginheight="0" title="myhealthfinder widget" marginwidth="0"><p>Your browser does not support iframes.</p></iframe> : ''
            }
        </Fragment>
    )
}

export default AdditionalMedicalSupport;