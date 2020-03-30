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
                <h2>Health Maintence</h2>
                <h2>Past Surgical History</h2>
                <p>Have you ever had surgery?</p>
                <input name='surgeryYes' type='checkbox'></input>
                <label for='surgeryYes'>Yes</label>
                <h2>Current Medications</h2>
                <p>Please list all current medicines and supplements</p>
                <h2>Allergies</h2>



            </form>

        </Fragment>
    )
}

export default MedicalProfile;