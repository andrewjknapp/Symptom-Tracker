import React, { Component, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(function () {
    axios.get('/api/users').then(({data}) => {
      console.log(data);
    })
  },[]) 

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
