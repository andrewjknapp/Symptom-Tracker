import React, { Fragment } from "react";
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
    <PrintOut />
    </Fragment>
  );
}


export default App;
