import React, { Fragment } from "react";
import medicalHistory from "../medicalChecklist";


function MedicalItem({ history }) {
    return (
        <form>
            <input name={history.id} type='checkbox'></input>
            <label for={history.id}> {history.name}</label>
        </form>

    )
}


function MedicalProfile({medicalChecklist}) {
    return (
        <Fragment>
            <h1>[Name's] Medical Information</h1>
            <form>
                <h2>General Information</h2>
                <input name='DOB' type='text'></input>
                <label for='DOB'>Date of Birth</label>
                <h2>Past Medical History</h2>
                {medicalHistory.map((h, i) => <MedicalItem key={i} history={h} />)}
            </form>

        </Fragment>
    )
}

export default MedicalProfile;