import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import "./assets/css/Navbar.css";


function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/landing-page'><a class="navbar-brand" href="#">Symptom Tracker</a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav main-navbar">
                    <li class="nav-item">
                        <Link to='/medical-profile' class="nav-link">Medical Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/chart' id='chart' class="nav-link" >Chart</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/additional-medical-support' class="nav-link" >Additional Medical Support</Link>
                    </li>
                </ul>
                <span class="navbar-text nav-icons"><Link to='/new-post' id='newPost' class="nav-link" >🌡</Link></span>
                <span class="navbar-text nav-icons"><Link to='print-out' id='printOut' class="nav-link">🖨</Link></span>
            </div>
        </nav>

    )
}

export default Navbar;
