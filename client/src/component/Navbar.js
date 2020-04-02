import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import "./assets/css/Navbar.css";
import MedicalProfile from './pages/MedicalProfile'


function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Symptom Tracker</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to='/medical-profile' class="nav-link">Medical Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/find-hospital' class="nav-link" >Find a Hospital</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/chart' id='chart' class="nav-link" >Chart</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/new-post' id='newPost' class="nav-link" >🌡</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='print-out' id='printOut' class="nav-link">🖨</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;
