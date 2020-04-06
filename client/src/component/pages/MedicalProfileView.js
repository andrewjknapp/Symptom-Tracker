import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getFromStorage } from "../../utils/storage";
import API from "../../utils/API";

function MedicalProfileView() {

    const [toEditPage, setToEditPage] = useState(false);
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
            <button onClick={()=>setToEditPage(true)}>Edit Profile</button>
            <h1>{userName} Profile View</h1>
            <p>Date of Birth: {DOB}</p>
            <p>Sex: {sex}</p>
            <p>Gender Identity: {identity}</p>
            <p>Medical Conditions: {condition}</p>
            {(condition === "None") ? null : <p>{conditionInfo}</p> }
            <p>Surgical History: {surgery}</p>
            {(surgery === "None") ? null : surgeryList}
            <p>Medication: {med}</p>
            {(med === "None") ? null : medicationList}
            <p>Medication Allergies: {medAllergy}</p>
            <p>Latex Allergy: {latex}</p>
            <p>Food Allergies: {food}</p>
        </article>
    )
}

export default MedicalProfileView