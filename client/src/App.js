import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import PrintOut from './component/pages/PrintOut';
import Navbar from "./component/Navbar";
import CreateAccountPage from "./component/pages/CreateAccountPage";
import Chart from './component/pages/Chart';
import AdditionalMedicalSupport from './component/pages/AdditionalMedicalSupport';
import LandingPage from './component/pages/LandingPage'
function App() {
  return (
    <Fragment>
       <Router>
        <Switch>
          <Route absolute path="/">
            <CreateAccountPage />
          </Route>

        <Route absolute path="/landing-page">
            <Navbar />
            <LandingPage />
          </Route>
          <Route absolute path="/medical-profile">
          <Navbar />
            <MedicalProfile />
          </Route>
          <Route absolute path="/additional-medical-support">
            <Navbar />
            <AdditionalMedicalSupport/>
          </Route>
          <Route absolute path="/chart">
            <Navbar />
            <Chart />
          </Route>
          <Route absolute path="/new-post">
            <Navbar />
            <NewPost />
          </Route>
          <Route absolute path="/print-out">
            <Navbar />
            <PrintOut />
          </Route>
        </Switch>
    </Router>
    </Fragment >
  );
}


export default App;
