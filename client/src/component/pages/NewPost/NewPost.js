import React, { useState, Fragment } from "react";
import "./NewPost.css";
import API from "../../../utils/API";
import { Link, Redirect } from "react-router-dom";

function NewPost() {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  // const [symptoms, setSymptoms] = useState([
  //   {
  //     type: "Headache", 
  //     severity: 0
  //   },
  //   {
  //     type: "Stomache Ache", 
  //     severity: 0
  //   },
  //   {
  //     type: "Cough", 
  //     severity: 0
  //   }
  // ]);
  const [toLandingPage, setToLandingPage] = useState(false);

  // const [headNum, setHeadNum] = useState(0);
  // const [stomNum, setStomNum] = useState(0);
  // const [feverNum, setFeverNum] = useState(0);

  const [sympNums, setSympNums] = useState({
    headNum: 0,
    stomNum: 0,
    coughNum: 0,
    breathNum: 0,
    temp: null
  });

  const [showNums, setShowNums] = useState({
    showHead: false,
    showStom: false,
    showCough: false,
    showShortness: false
  })

  const handleCheckBox = e => {
    let bool = !showNums[e.target.name]
    setShowNums({
      ...showNums,
      [e.target.name]: bool
    })

  }

  const handleNumChange = e => {
    setSympNums({
      ...sympNums,
      [e.target.name]: Number(e.target.value)
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    const symptoms = [
      {
        type: "Headache",
        severity: sympNums.headNum
      },
      {
        type: "Stomach Ache",
        severity: sympNums.stomNum
      },
      {
        type: "Cough",
        severity: sympNums.coughNum
      },
      {
        type: "Shortness of Breath",
        severity: sympNums.breathNum
      }
    ]

    const temperature = sympNums.temp;

    API.savePost({ title, description, symptoms, temperature });
    setToLandingPage(true);
  }

  return (
    <Fragment>
      {toLandingPage ? <Redirect to='/landing-page' /> : null}
      <h1 className='newpost-header'>Log Symptoms</h1>
      <form>
        <div className="row my-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Title"
              name="Title"
              onChange={e => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="row mb-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <textarea
              className="form-control"
              id="description"
              rows="8"
              placeholder="Describe your symptoms in a few sentences."
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="row mb-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <label htmlFor="temp-input">Enter your Temperature (Optional)</label>
            <input
              id="temp-input"
              name="temp"
              min="90"
              type="number"
              onChange={handleNumChange}
            />
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div id="userInstruction">Please check off and rate the severity of any symptoms that you are currently experiencing on a scale from 1 to 10</div>
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 checkBoxes">

            <div className="checkBoxPadding">

              <div className="form-check">
                <input
                  className="form-check-input sympt"
                  type="checkbox"
                  value=""
                  name="showHead"
                  onClick={handleCheckBox}
                ></input>
                <label className="form-check-label">Headache </label>
                {showNums.showHead ? <div > <input className="symptomInput" type="number" min="0" max="10" name="headNum" onChange={handleNumChange} /><p>Rate severity from 1-10</p> </div> : null}
              </div>
              <div className="form-check">
                <input
                  className="form-check-input sympt"
                  type="checkbox"
                  value=""
                  name="showStom"
                  onClick={handleCheckBox}
                ></input>
                <label className="form-check-label">Stomach Ache </label>
                {showNums.showStom ? <div> <input type="number" min="0" max="10" name="stomNum" onChange={handleNumChange} /><p>Rate severity from 1-10</p> </div> : null}
              </div>

              <div className="form-check">
                <input
                  className="form-check-input sympt"
                  type="checkbox"
                  value=""
                  name="showCough"
                  onClick={handleCheckBox}
                ></input>
                <label className="form-check-label">Cough </label>
                {showNums.showCough ? <div><input type="number" min="0" max="10" name="coughNum" onChange={handleNumChange} /><p>Rate severity from 1-10</p> </div> : null}
              </div>
              <div className="form-check">
                <input
                  className="form-check-input sympt"
                  type="checkbox"
                  value=""
                  name="showShortness"
                  onClick={handleCheckBox}
                ></input>
                <label className="form-check-label">Shortness of Breath</label>
                {showNums.showShortness ? <div><input className="symptomInput" type="number" min="0" max="9" name="breathNum" onChange={handleNumChange} /><p>Rate severity from 1-10</p> </div> : null}
              </div>
              <Link to="/landing-page"><button style={{ margin: '0 auto', width: '30%', color: 'white', backgroundColor: '#3D52D5', buttonRadius: '50px' }} onClick={handleSubmit} className="btn btn-primary my-3 glow-button saveMargin">Save</button></Link>
            </div>
            <div className="col-sm-3"></div>

          </div>

        </div>
      </form>
    </Fragment>
  );
}

export default NewPost;
