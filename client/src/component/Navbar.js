import React , {Fragment, Link} from "react";
import "./assets/css/Navbar.css";
import MedicalProfile from './pages/MedicalProfile'


function Navbar() {
    return(

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Symptom Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        {/* <Link to={MedicalProfile} class="nav-link">Medical Profile<span class="sr-only">(current)</span></Link> */}
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Find a Physician</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Graph</a>
      </li>
      <li class="nav-item">
        <a id='createPost' class="nav-link" href="#">🌡</a>
      </li>
      <li class="nav-item">
        <a id='printInfo' class="nav-link" href="#">🖨</a>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default  Navbar;
