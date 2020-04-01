import React, { Fragment, Component, useState } from "react";

function MedicalProfile() {
    const [medCount, setMedCount] = useState(1);
    const updateMed = () => {
        setMedCount(medCount + 1)
    }
    return (
        <Fragment>
            <h1>[Name's] Medical Information</h1>
            <form>
                <div>
                    <h2>General Information</h2>
                    <label for='DOB'>Date of Birth: </label>
                    <input name='DOB' type='date'></input>

                    <p>Please select the sex assigned to you at birth:</p>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label>
                </div>

                <div>
                    <h2>Past Medical History</h2>
                    <p>Please list any conditions you have had, separated by a comma:</p>
                    <textarea type='text' placeholder='Please list...'></textarea>
                    <br></br>

                    <h2>Past Surgical History</h2>
                    <p>Have you ever had surgery?</p>
                    <input id='yes' name='surgery' type='radio' value='yes'></input>
                    <label for='surgeryYes'>Yes</label>
                    <br></br>
                    <input id='no' name='surgery' type='radio' value='no'></input>
                    <label for='surgeryNo'>No</label>

                    <h2>Current Medications</h2>
                    <p>Please list all current medicines and supplements</p>
                    <table id='table'>
                        <thead>
                            <th>Medicine or Supplement</th>
                            <th>Dosage</th>
                            <th>How Much?</th>
                        </thead>
                        {[...Array(medCount)].map((m, i) => (
                            <tr key={i}>
                                <td><input type="input" id="medname" name="medname" /></td>
                                <td><input type="input" id="medname" name="dosage" /></td>
                                <td><input type="input" id="medname" name="howmuch" /></td>
                            </tr>
                        ))}
                        <br></br>
                        <button type='button' id='add' onClick={updateMed}>Add</button>
                    </table>
                    <h2>Allergies</h2>
                    <p>Are you allergic to any medication?</p>
                    <input id='yes' name='allergies' type='radio' value='yes' />
                    <label for='allergies'>Yes </label>
                    <input placeholder='Please list...'></input>
                    <br></br>
                    <input id='no' name='surgery' type='radio' value='no' />
                    <label for='surgery'>No</label>

                    <p>Are you allergic to latex?</p>
                    <input id='surgery' name='surgeryYes' type='radio'></input>
                    <label for='surgeryYes'>Yes</label>

                    <br></br>
                    <input name='surgeryNo' type='radio'></input>
                    <label for='surgeryNo'>No</label>
                    <p>Are you allergic to any foods?</p>
                    <input id='surgery' name='surgeryYes' type='radio'></input>
                    <label for='surgeryYes'>Yes </label>
                    <input placeholder='Please list...'></input>
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