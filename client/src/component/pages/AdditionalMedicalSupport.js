import React, { Fragment, Component, useState } from "react";



function AdditionalMedicalSupport() {
    const [hospital, setHospital] = useState(false)
    const [service, setService] = useState(false)
    return (


        <Fragment>
            <a onClick={() => setHospital(!hospital)} >Find a Hospital</a>
            <a onClick={() => setService(!service)}>Preventative Services</a>
            {
                hospital ? <iframe src="http://www.ushospitalfinder.com/widgets/widget" width="400" height="200" frameborder="0"> </iframe> : ''
            }

            {
                service ? <iframe src="https://www.health.gov/myhealthfinder?widget=true" name="myhealthfinderframe" frameborder="0" id="myhealthfinderframe" scrolling="yes" height="550"
                    width="100%" marginheight="0" title="myhealthfinder widget" marginwidth="0"><p>Your browser does not support iframes.</p></iframe> : ''
            }
        </Fragment>
    )
}

export default AdditionalMedicalSupport;