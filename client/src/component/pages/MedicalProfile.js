import React, { useState } from "react";
import "../assets/css/MedicalProfile.css";


function MedicalProfile() {

    const [medicalProfile, setMedicalProfile] = useState({
        
    });

    const [surgeryCount, setSurgeryCount] = useState(1);
    const addSurgery = () => {
        setSurgeryCount(surgeryCount + 1)
    }
    const removeSurgery = () => {
        setSurgeryCount(surgeryCount - 1)
    }


    const [medCount, setMedCount] = useState(1);
    const addMed = () => {
        setMedCount(medCount + 1)
    }
    const removeMed = () => {
        setMedCount(medCount - 1)
    }
    return (
        <article className='allMedText'>

            <h1 className='medHead1'>[Name's] Medical Information</h1>
            <form>
                <div>
                    <h2 className='medHead2'>General Information</h2>
                    <label className='medBody2' htmlFor='DOB'>Date of Birth: </label>
                    <input name='DOB' type='date'></input>

                    <p className='medBody1'>Please select the sex assigned to you at birth:</p>
                    <input className='medInput' type="radio" id="male" name="sex" value="male" />
                    <label className='medBody2' htmlFor="male">Male</label>
                    <input className='medInput' type="radio" id="female" name="sex" value="female" />
                    <label className='medBody2' htmlFor="female">Female</label>
                    <input className='medInput' type="radio" id="perferNot" name="sex" value="prefer-not-to-say" />
                    <label className='medBody2' htmlFor="prefer-not-to-say">Prefer not to say</label>

                    <p className='medBody1'>Please select your gender identity:</p>
                    <input className='medInput' type="radio" id="male" name="identity" value="male" />
                    <label className='medBody2' htmlFor="male">Male</label>
                    <input className='medInput' type="radio" id="female" name="identity" value="female" />
                    <label className='medBody2' htmlFor="female">Female</label>
                    <br></br>
                    <input className='medInput' type="radio" id="" name="identity" value="female" />
                    <label className='medBody2' htmlFor="female">Trans Man</label>
                    <input className='medInput' type="radio" id="female" name="identity" value="female" />
                    <label className='medBody2' htmlFor="female">Trans Woman</label>
                    <br></br>
                    <input className='medInput' type="radio" id="female" name="identity" value="female" />
                    <label className='medBody2' htmlFor="female">Nonbinary/Gender Nonconforming</label>
                    <br></br>
                    <input className='medInput' type="radio" id="female" name="identity" value="female" />
                    <label className='medBody2' htmlFor="female">Other, please specifiy:</label>
                    <input className='medInput'></input>
                    <br></br>
                    <input className='medInput' type="radio" id="perferNot" name="identity" value="prefer-not-to-say" />
                    <label className='medBody2' htmlFor="prefer-not-to-say">Prefer not to say</label>
                </div>

                <div>
                    <h2>Past Medical History</h2>
                    <p>Do you have any chronic illness or serious medical condition?</p>
                    <input className='medInput' id='no' name='condition' type='radio' value='no'></input>
                    <label className='medBody2' htmlFor='no'>No</label>
                    <br></br>
                    <input className='medInput' id='yes' name='condition' type='radio' value='yes'></input>
                    <label className='medBody2' htmlFor='yes'>Yes</label>
                    <p>Please list any conditions you have had, separated by a comma:</p>
                    <textarea type='text' placeholder='Please list...'></textarea>
                    <br></br>

                    <h2>Past Surgical History</h2>
                    <p>Have you ever had any surgery in the past?</p>

                    <input className='medInput' id='no' name='surgery' type='radio' value='no'></input>
                    <label className='medBody2' htmlFor='noSurgery'>No</label>
                    <br></br>
                    <input className='medInput' id='yes' name='surgery' type='radio' value='yes'></input>
                    <label className='medBody2' htmlFor='yesSurgery'>Yes</label>
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
                                    <td><input type="input" id="surgeryType" name="surgeryType" /></td>
                                    <td><input type="input" id="surgeryYear" name="surgeryYear" /></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    <button className='medButtons glow-button' type='button' id='add' onClick={addSurgery}>Add</button>
                    <button className='medButtons glow-button' type='button' id='add' onClick={removeSurgery}>Remove</button>

                    <h2>Current Medications</h2>
                    <p>Do you take any medications daily or regularly?</p>
                    <input className='medInput' id='no' name='med' type='radio' value='no'></input>
                    <label className='medBody2' htmlFor='no'>No</label>
                    <br></br>
                    <input className='medInput' id='yes' name='med' type='radio' value='yes'></input>
                    <label className='medBody2' htmlFor='yes'>Yes</label>
                    <p>If yes, please list any OTC (over the counter) or prescribed medications, vitamins and herbs that you currently take below.</p>
                    <table id='table'>
                        <thead>
                            <tr>
                                <th>Medicine or Supplement</th>
                                <th>Dosage</th>
                                <th>How Often?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(medCount)].map((m, i) => (
                                <tr key={i}>
                                    <td><input type="input" id="medname" name="medName" /></td>
                                    <td><input type="input" id="medname" name="medDosage" /></td>
                                    <td><input type="input" id="medname" name="medHowMuch" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className='medButtons glow-button' type='button' id='add' onClick={addMed}>Add</button>
                    <button className='medButtons glow-button' type='button' id='add' onClick={removeMed}>Remove</button>

                    <br></br>
                    <h2>Allergies</h2>
                    <p>Have you ever had an adverse reaction (allergy) to medications?</p>

                    <input className='medInput' checked id='no' name='medAllergy' type='radio' value='no' />
                    <label className='medBody2' htmlFor='Allergy'>No</label>
                    <br></br>
                    <input className='medInput' id='yes' name='medAllergy' type='radio' value='yes' />
                    <label className='medBody2' htmlFor='Allergy'>Yes</label>
                    <input className='medInput' placeholder='If yes, please list...'></input>


                    <p>Have you ever had an adverse reaction (allergy) to latex?</p>

                    <input className='medInput' checked name='latex' id='noLatex' type='radio'></input>
                    <label className='medBody2' htmlFor='noLatex'>No</label>
                    <br></br>
                    <input className='medInput' name='latex' type='radio'></input>
                    <label className='medBody2' htmlFor='latex'>Yes</label>

                    <p>Have you ever had an adverse reaction (allergy) to any foods?</p>

                    <input className='medInput' checked name='food' type='radio'></input>
                    <label className='medBody2' htmlFor='noFood'>No</label>
                    <br></br>
                    <input className='medInput' name='food' type='radio'></input>
                    <label className='medBody2' htmlFor='food'>Yes </label>
                    <input className='medInput' placeholder='If yes, please list...'></input>


                </div>
                <div>
                    <button className='submitButton glow-button' type='submit'>Save</button>
                </div>
            </form>
        </article>

    )
}

export default MedicalProfile;