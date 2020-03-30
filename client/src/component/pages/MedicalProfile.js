import React, { Fragment, Component } from "react";
import medicalHistory from "../medicalChecklist";


function MedicalItem({ history }) {
    return (
        <form>
            <input name={history.id} type='checkbox'></input>
            <label for={history.id}> {history.name}</label>
        </form>

    )
}
function MedicalProfile() {
    return (
        <Fragment>
            <form>
                <div>
                    <h1>[Name's] Medical Information</h1>
                    <h2>General Information</h2>
                    <input name='DOB' type='text'></input>
                    <label for='DOB'>Date of Birth</label>
                    <p>Please select your gender assigned to you at birth:</p>
                    <input type="radio" id="male" name="gender" value="male" checked={false}>
                        <label for="male">Male</label>

                        <input type="radio" id="female" name="gender" value="female" checked={false}>
                            <label for="female">Female</label>
                    </div>
                        <div>
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
                            <p>Are you allergic to any medication?</p>
                            <p>Are you allergic to latex?</p>
                            <p>Are you allergic to any foods?</p>
                        </div>
                    </form>
                    </Fragment>
                    
    )
}

export default MedicalProfile;