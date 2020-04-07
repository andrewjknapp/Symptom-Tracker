import React, { useState } from "react";
import { removeFromStorage } from "../utils/storage";
import { Redirect } from "react-router";
import "./assets/css/Navbar.css";


function Logout() {

    const [ isLoggedOut, setIsLoggedOut ] = useState(false);

    function logoutUser() {
        removeFromStorage('symptom_tracker');
        setIsLoggedOut(true);
    }

    return isLoggedOut ? <Redirect to="/"/> : (

    <button class='navLogout' onClick={logoutUser}>Logout</button>
   
    )
}

export default Logout;