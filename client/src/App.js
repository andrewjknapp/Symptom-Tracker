import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import UserContext from "./utils/UserContext";

import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import PrintOut from './component/pages/PrintOut';
import Navbar from "./component/Navbar";
import CreateAccountPage from "./component/pages/CreateAccountPage";
import Chart from './component/pages/Chart';
import LandingPage from './component/pages/LandingPage'
import AdditionalMedicalSupport from "./component/pages/AdditionalMedicalSupport";
import MedicalProfileView from "./component/pages/MedicalProfileView";

function AppReducer(state, action) {
  if (action.type === "handleLogIn") {
    return {
      ...state, userId: action.payload
    }

  }
  return state
}


function App() {
  //reducer that codes the global state, potentially, strategy for managing state across applications...?
  //useState hook, share via context...? or...use Reducer and share dispatch and state via context,
  //global state...REDUCER and make Global State...

  const initialState = {
    userId: "",
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)
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
            <Navbar />
            <LandingPage />
          </Route>
          <Route absolute path="/medical-profile">
            <Navbar />
            <MedicalProfile />
          </Route>
          <Route absolute path="/medical-profile-view">
            <Navbar />
            <MedicalProfileView />
          </Route>
          <Route absolute path="/additional-medical-support">
            <Navbar />
            <AdditionalMedicalSupport />
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
          <Route path="/">
            <div id="accountBackground">
              <CreateAccountPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}


export default App;
