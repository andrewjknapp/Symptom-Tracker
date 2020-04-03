import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import PrintOut from './component/pages/PrintOut';
import Navbar from "./component/Navbar";
import CreateAccountPage from "./component/pages/CreateAccountPage";
import Chart from './component/pages/Chart';
import LandingPage from './component/pages/LandingPage'
function App() {
  return (
    <Fragment>
       <Router>      
        <Switch>
          <Route absolute path="/landing-page">
            <LandingPage />
          </Route>
          <Route absolute path="/medical-profile">
          <Navbar />
            <MedicalProfile />
          </Route>
          <Route absolute path="/find-physician">
          <Navbar />

            {/* <FindPhysician/> */}
          </Route>
          <Route absolute path="/chart">
            <Chart />
          </Route>
          <Route absolute path="/new-post">
            <NewPost />
          </Route>
          <Route absolute path="/print-out">
            <PrintOut />
          </Route>
          <Route path="/">
            <CreateAccountPage />
          </Route>
        </Switch>
    </Router>
    </Fragment >
  );
}


export default App;
