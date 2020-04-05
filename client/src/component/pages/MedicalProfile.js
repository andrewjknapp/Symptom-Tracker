import React, { useState } from "react";
import "../assets/css/MedicalProfile.css";


function MedicalProfile() {
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
        <article class='allMedText'>

            <h1 class='medHead1'>[Name's] Medical Information</h1>
            <form>
                <div>
                    <h2 class='medHead2'>General Information</h2>
                    <label class='medBody2' htmlFor='DOB'>Date of Birth: </label>
                    <input name='DOB' type='date'></input>

                    <p class='medBody1'>Please select the sex assigned to you at birth:</p>
                    <input class='medInput' type="radio" id="male" name="maleSex" value="male" />
                    <label class='medBody2' htmlFor="male">Male</label>
                    <input class='medInput' type="radio" id="female" name="femaleSex" value="female" />
                    <label class='medBody2' htmlFor="female">Female</label>
                    <input class='medInput' type="radio" id="perferNot" name="noSex" value="prefer-not-to-say" />
                    <label class='medBody2' htmlFor="prefer-not-to-say">Prefer not to say</label>

                    <p class='medBody1'>Please select your gender identity:</p>
                    <input class='medInput' type="radio" id="male" name="maleId" value="male" />
                    <label class='medBody2' htmlFor="male">Male</label>
                    <input class='medInput' type="radio" id="female" name="femaleId" value="female" />
                    <label class='medBody2' htmlFor="female">Female</label>
                    <br></br>
                    <input class='medInput' type="radio" id="" name="transMan" value="female" />
                    <label class='medBody2' htmlFor="female">Trans Man</label>
                    <input class='medInput' type="radio" id="female" name="transWoman" value="female" />
                    <label class='medBody2' htmlFor="female">Trans Woman</label>
                    <br></br>
                    <input class='medInput' type="radio" id="female" name="nonbinary" value="female" />
                    <label class='medBody2' htmlFor="female">Nonbinary/Gender Nonconforming</label>
                    <br></br>
                    <input class='medInput' type="radio" id="female" name="otherId" value="female" />
                    <label class='medBody2' htmlFor="female">Other, please specifiy:</label>
                    <input class='medInput'></input>
                    <br></br>
                    <input class='medInput' type="radio" id="perferNot" name="noId" value="prefer-not-to-say" />
                    <label class='medBody2' htmlFor="prefer-not-to-say">Prefer not to say</label>
                </div>

                <div>
                    <h2>Past Medical History</h2>
                    <p>Do you have any medical coniditions?</p>
                    <input class='medInput' id='no' name='noCondition' type='radio' value='no'></input>
                    <label class='medBody2' htmlFor='noCondition'>No</label>
                    <br></br>
                    <input class='medInput' id='yes' name='yesCondition' type='radio' value='yes'></input>
                    <label class='medBody2' htmlFor='yesCondition'>Yes</label>
                    <p>Please list any conditions you have had, separated by a comma:</p>
                    <textarea type='text' placeholder='Please list...'></textarea>
                    <br></br>

                    <h2>Past Surgical History</h2>
                    <p>Have you ever had surgery?</p>

                    <input class='medInput' id='no' name='noNurgery' type='radio' value='no'></input>
                    <label class='medBody2' htmlFor='noSurgery'>No</label>
                    <br></br>
                    <input class='medInput' id='yes' name='yesSurgery' type='radio' value='yes'></input>
                    <label class='medBody2' htmlFor='yesSurgery'>Yes</label>
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
                    <button className='medButtons' type='button' id='add' onClick={addSurgery}>Add</button>
                    <button className='medButtons' type='button' id='add' onClick={removeSurgery}>Remove</button>
                    
                    <h2>Current Medications</h2>
                    <p>Are you currently taking any medications?</p>
                    <input class='medInput' id='no' name='noMed' type='radio' value='no'></input>
                    <label class='medBody2' htmlFor='noMed'>No</label>
                    <br></br>
                    <input class='medInput' id='yes' name='yesMed' type='radio' value='yes'></input>
                    <label class='medBody2' htmlFor='yesMed'>Yes</label>
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
                                    <td><input type="input" id="medname" name="medName" /></td>
                                    <td><input type="input" id="medname" name="medDosage" /></td>
                                    <td><input type="input" id="medname" name="medHowMuch" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className='medButtons' type='button' id='add' onClick={addMed}>Add</button>
                    <button className='medButtons' type='button' id='add' onClick={removeMed}>Remove</button>

                    <br></br>
                    <h2>Allergies</h2>
                    <p>Are you allergic to any medication?</p>

                    <input class='medInput' id='no' name='noAllergy' type='radio' value='no' />
                    <label class='medBody2' htmlFor='noAllergy'>No</label>
                    <br></br>
                    <input class='medInput' id='yes' name='yesAllergy' type='radio' value='yes' />
                    <label class='medBody2' htmlFor='yesAllergy'>Yes</label>
                    <input class='medInput' placeholder='Please list...'></input>


                    <p>Are you allergic to latex?</p>

                    <input class='medInput' name='noLatex' type='radio'></input>
                    <label class='medBody2' htmlFor='noLatex'>No</label>
                    <br></br>
                    <input class='medInput' name='yesLatex' type='radio'></input>
                    <label class='medBody2' htmlFor='yesLatex'>Yes</label>

                    <p>Are you allergic to any foods?</p>

                    <input class='medInput' name='noFood' type='radio'></input>
                    <label class='medBody2' htmlFor='noFood'>No</label>
                    <br></br>
                    <input class='medInput' name='yesFood' type='radio'></input>
                    <label class='medBody2' htmlFor='yesFood'>Yes </label>
                    <input class='medInput' placeholder='Please list...'></input>


                </div>
                <div>
                    <button className='submitButton' type='submit'>Save</button>
                </div>
            </form>
        </article>

    )
}

export default MedicalProfile;