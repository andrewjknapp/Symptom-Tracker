import React, { useState, useEffect } from "react";
import "../assets/css/MedicalProfile.css";
import API from "../../utils/API";
import { getFromStorage } from "../../utils/storage";
import { Redirect } from "react-router";


function MedicalProfile() {

    const [toViewPage, setToViewPage] = useState(false);
    const [userName, setUserName] = useState("Your");
    const [medicalProfile, setMedicalProfile] = useState({
        exists: false,
        DOB: 'Decline to Answer',
        sex: 'Prefer not to say',
        identity: 'Prefer no to say',
        condition: 'None',
        conditionInfo: 'None',
        surgery: 'None',
        surgeryInfo: {},
        med: 'None',
        medicationInfo: {},
        medAllergy: 'None',
        latex: 'No',
        food: 'None'
    });

    const [surgeryCount, setSurgeryCount] = useState(1);
    const addSurgery = () => {
        setSurgeryCount(surgeryCount + 1)
    }
    const removeSurgery = () => {
        if (surgeryCount > 1) {
            setSurgeryCount(surgeryCount - 1)
        }
    }


    const [medCount, setMedCount] = useState(1);
    const addMed = () => {
        setMedCount(medCount + 1)
    }
    const removeMed = () => {
        if (medCount > 1) {
            setMedCount(medCount - 1)
        }
    }

    const handleSurgeryChange = e => {

        setMedicalProfile({
            ...medicalProfile,
            surgeryInfo: {
                ...medicalProfile.surgeryInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleMedicationChange = e => {
        setMedicalProfile({
            ...medicalProfile,
            medicationInfo: {
                ...medicalProfile.medicationInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleInputChange = e => {
        setMedicalProfile({
            ...medicalProfile,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (window.confirm("Ensure all data is correct, Save will overwrite all previous data")) {
            API.saveProfile(medicalProfile);
        }

        console.log(medicalProfile);
        setToViewPage(true);
    }

    useEffect(() => {
        const { firstName } = getFromStorage('symptom_tracker');
        setUserName(firstName + "'s");
        let bool = false;
        API.getProfile()
            .then(res => {

                if (res.data !== "") {
                    bool = !window.confirm("Press OK to edit and Cancel to go back");
                }

            })
            .then(() => {
                setToViewPage(bool);
            })
    }, [])

    return toViewPage ? <Redirect to="/medical-profile-view" /> : (
        <article className='allMedText'>

            <h1 className='medHead1'>{userName} Medical Information</h1>
            <form>
                <div>
                    <h2 className='medHead2'>General Information</h2>
                    <label className='medBody2' htmlFor='DOB'>Date of Birth: </label>
                    <input name='DOB' type='date' onChange={handleInputChange}></input>

                    <p className='medBody1'>Please select the sex assigned to you at birth:</p>
                    <input className='medInput' type="radio" id="male" name="sex" value="male" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="male">Male</label>
                    <input className='medInput' type="radio" id="female" name="sex" value="female" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="female">Female</label>
                    <input className='medInput' type="radio" id="perferNot" name="sex" value="Prefer not to say" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="prefer-not-to-say">Prefer not to say</label>

                    <p className='medBody1'>Please select your gender identity:</p>
                    <input className='medInput' type="radio" id="imale" name="identity" value="male" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="imale">Male</label>
                    <input className='medInput' type="radio" id="ifemale" name="identity" value="female" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="ifemale">Female</label>
                    <br></br>
                    <input className='medInput' type="radio" id="iTransMan" name="identity" value="Trans Man" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="iTransMan">Trans Man</label>
                    <input className='medInput' type="radio" id="iTransWoman" name="identity" value="Trans Woman" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="iTransWoman">Trans Woman</label>
                    <br></br>
                    <input className='medInput' type="radio" id="iNonConform" name="identity" value="Nonbinary/Gender Nonconforming" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="iNonConform">Nonbinary/Gender Nonconforming</label>
                    <br></br>
                    <input className='medInput' type="radio" id="iOther" value="" />
                    <label className='medBody2' htmlFor="iOther">Other, please specifiy:</label>
                    <input className='medInput' name="identity" onChange={handleInputChange}></input>
                    <br></br>
                    <input className='medInput' type="radio" id="iPerferNot" name="identity" value="Prefer not to say" onChange={handleInputChange} />
                    <label className='medBody2' htmlFor="iPreferNot">Prefer not to say</label>
                </div>

                <div>
                    <h2>Past Medical History</h2>
                    <p>Do you have any chronic illness or serious medical condition?</p>
                    <input className='medInput' id='cNo' name='condition' type='radio' value='None' onChange={handleInputChange}></input>
                    <label className='medBody2' htmlFor='cNo'>No</label>
                    <br></br>
                    <input className='medInput' id='cYes' name='condition' type='radio' value='yes' onChange={handleInputChange}></input>
                    <label className='medBody2' htmlFor='cYes'>Yes</label>
                    <p>Please list any conditions you have had, separated by a comma:</p>
                    <textarea type='text' placeholder='Please list...' name="conditionInfo" onChange={handleInputChange}></textarea>
                    <br></br>

                    <h2>Past Surgical History</h2>
                    <p>Have you ever had any surgery in the past?</p>

                    <input className='medInput' id='noSurgery' name='surgery' type='radio' value='no' onChange={handleInputChange}></input>
                    <label className='medBody2' htmlFor='noSurgery'>No</label>
                    <br></br>
                    <input className='medInput' id='yesSurgery' name='surgery' type='radio' value='yes' onChange={handleInputChange}></input>
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
                                    <td><input type="input" id="surgeryType" name={"surgeryType_" + i} onChange={handleSurgeryChange} /></td>
                                    <td><input type="input" id="surgeryYear" name={"surgeryYear_" + i} onChange={handleSurgeryChange} /></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    <button className='medButtons glow-button' type='button' id='add' onClick={addSurgery}>Add</button>
                    <button className='medButtons glow-button' type='button' id='add' onClick={removeSurgery}>Remove</button>

                    <h2>Current Medications</h2>
                    <p>Do you take any medications daily or regularly?</p>
                    <input className='medInput' id='noMedication' name='med' type='radio' value='no' onChange={handleInputChange}></input>
                    <label className='medBody2' htmlFor='noMedication'>No</label>
                    <br></br>
                    <input className='medInput' id='yesMedication' name='med' type='radio' value='yes' onChange={handleInputChange}></input>
                    <label className='medBody2' htmlFor='yesMedication'>Yes</label>
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
                                    <td><input type="input" id={"medname" + i} name={"medName_" + i} onChange={handleMedicationChange} /></td>
                                    <td><input type="input" id={"medDose" + i} name={"medDosage_" + i} onChange={handleMedicationChange} /></td>
                                    <td><input type="input" id={"medHowMuch" + i} name={"medHowMuch_" + i} onChange={handleMedicationChange} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className='medButtons glow-button' type='button' id='add' onClick={addMed}>Add</button>
                    <button className='medButtons glow-button' type='button' id='add' onClick={removeMed}>Remove</button>

                    <br></br>
                    <h2>Allergies</h2>
                    <p>Have you ever had an adverse reaction (allergy) to medications?</p>

                    <input className='medInput' defaultChecked id='noAllergy' name='medAllergy' type='radio' value='None' onClick={handleInputChange} />
                    <label className='medBody2' htmlFor='noAllergy'>No</label>
                    <br></br>
                    <input className='medInput' id='yesAllergy' name='medAllergy' type='radio' value='yes' />
                    <label className='medBody2' htmlFor='yesAllergy'>Yes</label>
                    <input className='medInput' placeholder='If yes, please list...' name="medAllergy" onChange={handleInputChange}></input>


                    <p>Have you ever had an adverse reaction (allergy) to latex?</p>

                    <input className='medInput' defaultChecked name='latex' id='noLatex' type='radio' value='None' onClick={handleInputChange}></input>
                    <label className='medBody2' htmlFor='noLatex'>No</label>
                    <br></br>
                    <input className='medInput' name='latex' type='radio' value='Yes' onClick={handleInputChange}></input>
                    <label className='medBody2' htmlFor='latex'>Yes</label>

                    <p>Have you ever had an adverse reaction (allergy) to any foods?</p>

                    <input className='medInput' defaultChecked name='food' type='radio' value='None' onClick={handleInputChange}></input>
                    <label className='medBody2' htmlFor='noFood'>No</label>
                    <br></br>
                    <input className='medInput' name='food' type='radio'></input>
                    <label className='medBody2' htmlFor='food'>Yes </label>
                    <input className='medInput' placeholder='If yes, please list...' name='food' onChange={handleInputChange}></input>


                </div>
                <div>
                    <button className='submitButton glow-button' onClick={handleSubmit}>Save</button>
                </div>
            </form>

        </article>


    )
}

export default MedicalProfile;