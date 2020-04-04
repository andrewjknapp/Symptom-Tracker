import React, { useState } from "react";
import "../assets/css/MedicalProfile.css";


function MedicalProfile() {
    const [surgeryCount, setSurgeryCount] = useState(1);
    const updateSurgery = () => {
        setSurgeryCount(surgeryCount + 1)
    }
    
    const [medCount, setMedCount] = useState(1);
    const updateMed = () => {
        setMedCount(medCount + 1)
    }
    return (
        <article class='allMedText'>

            <h1 class='medHead1'>[Name's] Medical Information</h1>
            <form>
                <div>
                    <h2 class='medHead2'>General Information</h2>
                    <label class='medBody2' htmlFor='DOB'>Date of Birth: </label>
                    <input name='DOB' type='date'></input>

                    <p class='medBody1'>Please select the sex assigned to you at birth:</p>
                    <input class='medInput' type="radio" id="male" name="gender" value="male" />
                    <label class='medBody2' htmlFor="male">Male</label>
                    <input class='medInput' type="radio" id="female" name="gender" value="female" />
                    <label class='medBody2' htmlFor="female">Female</label>
                </div>

                <div>
                    <h2>Past Medical History</h2>
                    <p>Please list any conditions you have had, separated by a comma:</p>
                    <textarea type='text' placeholder='Please list...'></textarea>
                    <br></br>

                    <h2>Past Surgical History</h2>
                    <p>Have you ever had surgery?</p>
                   
                    <input class='medInput' id='no' name='surgery' type='radio' value='no'></input>
                    <label class='medBody2' htmlFor='surgeryNo'>No</label>
                    <br></br>
                    <input class='medInput'id='yes' name='surgery' type='radio' value='yes'></input>
                    <label class='medBody2' htmlFor='surgeryYes'>Yes</label>
                    <table id='table'>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(surgeryCount)].map((m, i) => (
                                <tr key={i}>
                                    <td><input type="input" id="surgeryType" name="type" /></td>
                                    <td><input type="input" id="surgeryYear" name="year" /></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    <button className='medButtons' type='button' id='add' onClick={updateSurgery}>Add</button>


                    <h2>Current Medications</h2>
                    <p>Please list all current medicines and supplements</p>
                    <table id='table'>
                        <thead>
                            <tr>
                                <th>Medicine or Supplement</th>
                                <th>Dosage</th>
                                <th>How Much?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(medCount)].map((m, i) => (
                                <tr key={i}>
                                    <td><input type="input" id="medname" name="medname" /></td>
                                    <td><input type="input" id="medname" name="dosage" /></td>
                                    <td><input type="input" id="medname" name="howmuch" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className='medButtons' type='button' id='add' onClick={updateMed}>Add</button>
                    <br></br>
                    <h2>Allergies</h2>
                    <p>Are you allergic to any medication?</p>
                   
                    <input class='medInput' id='no' name='surgery' type='radio' value='no' />
                    <label class='medBody2' htmlFor='surgery'>No</label>
                    <br></br>
                    <input class='medInput' id='yes' name='allergies' type='radio' value='yes' />
                    <label class='medBody2' htmlFor='allergies'>Yes</label>
                    <input class='medInput' placeholder='Please list...'></input>
                   

                    <p>Are you allergic to latex?</p>
                  
                    <input class='medInput' name='surgeryNo' type='radio'></input>
                    <label class='medBody2' htmlFor='surgeryNo'>No</label>
                    <br></br>
                    <input class='medInput' id='surgery' name='surgeryYes' type='radio'></input>
                    <label class='medBody2' htmlFor='surgeryYes'>Yes</label>
                
                    <p>Are you allergic to any foods?</p>
                   
                    <input class='medInput' name='surgeryNo' type='radio'></input>
                    <label class='medBody2' htmlFor='surgeryNo'>No</label>
                    <br></br>
                    <input class='medInput' id='surgery' name='surgeryYes' type='radio'></input>
                    <label class='medBody2' htmlFor='surgeryYes'>Yes </label>
                    <input class='medInput' placeholder='Please list...'></input>
                  

                </div>
                <div>
                    <button className='submitButton' type='submit'>Submit</button>
                </div>
            </form>
        </article>

    )
}

export default MedicalProfile;