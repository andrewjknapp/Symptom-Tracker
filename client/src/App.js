import React, { Fragment, useReducer, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import UserContext from "./utils/UserContext";

import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import PrintOut from './component/pages/PrintOut';
import Navbar from "./component/Navbar";
import CreateAccountPage from "./component/pages/CreateAccountPage";
import Chart from './component/pages/Chart';
import LandingPage from './component/pages/LandingPage'

function AppReducer(state, action) {
  return state
}


function App() {
  //reducer that codes the global state, potentially, strategy for managing state across applications...?
  //useState hook, share via context...? or...use Reducer and share dispatch and state via context,
  //global state...REDUCER and make Global State...

  const initialState = {
    userId: "",
  }

  const [state, dispatch]= useReducer(AppReducer, initialState)
  //gives back state and dispatch in brackets

  return (
    <UserContext.Provider value={
      {
        state, dispatch
      }
      //any child of this, now has access to state and dispatch!
    }>
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
    </UserContext.Provider >
  );
}


export default App;
