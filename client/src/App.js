import React, { Fragment } from "react";
import "./App.css";
import MedicalProfile from "./component/pages/MedicalProfile"
import NewPost from './component/pages/NewPost/NewPost'
import Navbar from "./component/Navbar";
function App() {
  return (
    <Fragment>
      <Navbar />
    <NewPost />
    </Fragment>
  );
}


export default App;
