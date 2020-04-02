import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import PrintOut from './component/pages/PrintOut';
import Navbar from "./component/Navbar";
import Chart from './component/pages/Chart';
import AdditionalMedicalSupport from './component/pages/AdditionalMedicalSupport';
function App() {
  return (
    <Fragment>
       <Router>
      <Navbar />
        <Switch>
          <Route absolute path="/medical-profile">
            <MedicalProfile />
          </Route>
          <Route absolute path="/additional-medical-support">
            <AdditionalMedicalSupport/>
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
        </Switch>

    </Router>
    </Fragment >
  );
}


export default App;
