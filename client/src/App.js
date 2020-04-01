import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import PrintOut from './component/pages/PrintOut';
import Navbar from "./component/Navbar";
function App() {
  return (
    <Fragment>
      <Navbar />
    {/* <NewPost /> */}
    {/* <PrintOut /> */}
    </Fragment>
  );
}


export default App;
