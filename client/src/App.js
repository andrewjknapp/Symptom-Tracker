import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import PrintOut from './component/pages/PrintOut';
import Navbar from "./component/Navbar";
import Chart from './component/pages/Chart';
function App() {
  return (
    <Fragment>
       <Router>
      <Navbar />
        <Switch>
          <Route path="/medical-profile">
            <MedicalProfile />
          </Route>
          <Route path="/find-physician">
            {/* <FindPhysician/> */}
          </Route>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/print-out">
            <PrintOut />
          </Route>
        </Switch>

    </Router>
    </Fragment >
  );
}


export default App;
