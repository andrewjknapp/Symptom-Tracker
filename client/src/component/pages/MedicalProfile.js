import React, { Fragment } from "react";

function MedicalProfile() {
    return (
        <Fragment>
            <h1>[Name's] Medical Information</h1>
            <form>
                <h2>General Information</h2>
                <input name='DOB' type='text'></input>
                <label for='DOB'>Date of Birth</label>
                <h2>Past Medical History</h2>
                <input name='cancer' type='checkbox'></input>
                <input name='anemia' type='checkbox'></input>

                <label for='cancer'>Cancer</label>
            </form>

        </Fragment>
    )
}

export default MedicalProfile;