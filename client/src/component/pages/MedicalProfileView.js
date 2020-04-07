import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getFromStorage } from "../../utils/storage";
import API from "../../utils/API";
import '../assets/css/MedicalProfileView.css';
import '../assets/css/loader.css'

function MedicalProfileView() {

    const [toEditPage, setToEditPage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState("Your");
    const [surgeryList, setSurgeryList] = useState(null);
    const [medicationList, setMedicationList] = useState(null);
    const [medicalProfile, setMedicalProfile] = useState({
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

    let { DOB, sex, identity, condition, conditionInfo, surgery, surgeryInfo, med, medicationInfo, medAllergy, latex, food } = medicalProfile;

    useEffect(()=>{
        const { firstName } = getFromStorage('symptom_tracker');
        setUserName(firstName + "'s");
        API.getProfile()
            .then(res => {
                if(res.data === "") {
                    setToEditPage(true);
                } 
                setMedicalProfile(res.data)
                setIsLoading(false);
            })
    }, [])

    useEffect(()=>{
        setSurgeryList(parseSurgery(surgeryInfo));
        setMedicationList(parseMedication(medicationInfo));
    },[medicalProfile])

    const parseSurgery = surgeryInfo => {
        const keys = Object.keys(surgeryInfo);
        return keys.map(key => {
            if (key.includes("Type") === true) {
                return <span>{surgeryInfo[key]}:</span>
            } else if (key.includes("Year") === true) {
                return <p>{surgeryInfo[key]}</p>
            }
        })
    }

    const parseMedication = medicationInfo => {
        const keys = Object.keys(medicationInfo);
        return keys.map(key => {
            if (key.includes("Name") === true) {
                return (
                    <React.Fragment>
                        <span>{medicationInfo[key]}</span>
                        <br/>
                    </React.Fragment>
                    )
            } else if (key.includes("Dosage") === true) {
                return <span>Dosage: {medicationInfo[key]}</span>
            } else if (key.includes("HowMuch") === true) {
                return <p>{medicationInfo[key]}</p>
            }
        })
    }

    return toEditPage ? <Redirect to="/medical-profile" try="hope"/> :(
        <article>
            

            <h1 className='profile-view-header'>{userName} Profile View</h1>
            
            { isLoading ? <h2 className="text-center loading">Loading...</h2> : (
                <section>
            <div className='text-center'> 
            <button className='editBtn glow-button' onClick={()=>setToEditPage(true)}>Edit Profile</button>
            </div>

              <div className="card profile-view-card" >
                <ul className="profile-view-elements list-group-flush list-group">
                    <li className="list-group-item"><span className='list-num'>1. Date of Birth:</span> {DOB}</li>
                    <li className="list-group-item"><span className='list-num'>2. Sex:</span> {sex}</li>
                    <li className="list-group-item"><span className='list-num'>3. Gender Identity:</span> {identity}</li>
                    <li className="list-group-item"><span className='list-num'>4. Medical Conditions:</span> {condition}</li>
                    {(condition === "None") ? null :<li className="list-group-item">{conditionInfo}</li>}
                    <li className="list-group-item"><span className='list-num'>5. Surgery History:</span> {surgery}</li>
                    {(surgery === "None") ? null : <li className="list-group-item">Past Surgeries: {surgeryList}</li>}
                    <li className="list-group-item"><span className='list-num'>6. Medication:</span> {med}</li>
                    {(med === "None") ? null : <li className="list-group-item">Medication List: {medicationList}</li>}
                    <li className="list-group-item"><span className='list-num'>7. Medication Allergies:</span> {medAllergy}</li>
                    <li className="list-group-item"><span className='list-num'>8. Latex Allergy:</span> {latex}</li>
                    <li className="list-group-item"><span className='list-num'>9. Food Allergies:</span> {food}</li>
                </ul>
            </div>
            </section>)}
        </article>
    )
}

export default MedicalProfileView