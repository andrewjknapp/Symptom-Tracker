import React, { Fragment, Component, useState } from "react";
import medicalHistory from "../medicalChecklist";


function HistoryItem({ history }) {
    return (
        <form>
            <input name={history.id} type='checkbox'></input>
            <label for={history.id}> {history.name}</label>
        </form>

    )
}
function MedicationItem() {
   const [med, setMed] = useState('');
   const updateMed = (event) => {
       setMed(event.target)
   }



}
function MedicalProfile() {
    return (
        <Fragment>
            <form>
                <div>
                    <h1>[Name's] Medical Information</h1>
                    <h2>General Information</h2>
                    <label for='DOB'>Date of Birth</label>
                    <input name='DOB' type='date'></input>

                    <p>Please select the sex assigned to you at birth:</p>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label>
                </div>
                <div>
                    <h2>Past Medical History</h2>
                    {medicalHistory.map((h, i) => <HistoryItem key={i} history={h} />)}

                    <h2>Past Surgical History</h2>
                    <p>Have you ever had surgery?</p>
                    <input id='surgery' name='surgeryYes' type='radio'></input>
                    <label for='surgeryYes'>Yes</label>
                    <br></br>
                    <input name='surgeryNo' type='radio'></input>
                    <label for='surgeryNo'>No</label>

                    <h2>Current Medications</h2>
                    <p>Please list all current medicines and supplements</p>
                    <table id='table'>
                        <thead>
                            <th>Medicine or Supplement</th>
                            <th>Dosage</th>
                            <th>How Much?</th>
                        </thead>
                        <tr>
                            <td><input type="input" id="medname" name="medname" /></td>
                            <td><input type="input" id="medname" name="medname" /></td>
                            <td><input type="input" id="medname" name="medname" /></td>
                        </tr>
                        <br></br>
                        {/* <button id='add' onClick={() => setMed('name')}>Add</button> */}
                    </table>
                    <h2>Allergies</h2>
                    <p>Are you allergic to any medication?</p>
                    <input id='surgery' name='surgeryYes' type='radio'></input>
                    <label for='surgeryYes'>Yes</label>
                    <input></input>
                    <br></br>
                    <input name='surgeryNo' type='radio'></input>
                    <label for='surgeryNo'>No</label>

                    <p>Are you allergic to latex?</p>
                    <input id='surgery' name='surgeryYes' type='radio'></input>
                    <label for='surgeryYes'>Yes</label>

                    <br></br>
                    <input name='surgeryNo' type='radio'></input>
                    <label for='surgeryNo'>No</label>
                    <p>Are you allergic to any foods?</p>
                    <input id='surgery' name='surgeryYes' type='radio'></input>
                    <label for='surgeryYes'>Yes</label>
                    <input></input>
                    <br></br>
                    <input name='surgeryNo' type='radio'></input>
                    <label for='surgeryNo'>No</label>

                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </Fragment>

    )
}

export default MedicalProfile;