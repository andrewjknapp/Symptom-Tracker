import React , {Fragment} from "react";




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
        <a class="nav-link" href="#">Medical Profile<span class="sr-only">(current)</span></a>
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
