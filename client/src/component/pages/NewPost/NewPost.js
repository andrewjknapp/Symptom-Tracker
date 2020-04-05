import React, { useState, Fragment } from "react";
import "./NewPost.css";
import API from "../../../utils/API";
import { Link, Redirect } from "react-router-dom";

function NewPost() {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [symptoms, setSymptoms] = useState([
    {
      type: "Headache", 
      severity: 0
    },
    {
      type: "Stomache Ache", 
      severity: 0
    },
    {
      type: "Fever", 
      severity: 0
    }
  ]);
  const [toLandingPage, setToLandingPage] = useState(false);

  // const [headNum, setHeadNum] = useState(0);
  // const [stomNum, setStomNum] = useState(0);
  // const [feverNum, setFeverNum] = useState(0);

  const [sympNums, setSympNums] = useState({
    headNum: 0,
    stomNum: 0,
    feverNum: 0
  });

  const [showNums, setShowNums] = useState({
    showHead: false,
    showStom: false,
    showFever: false
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
        type: "Fever",
        severity: sympNums.feverNum
      }
    ]

    API.savePost({ title, description, symptoms});
    setToLandingPage(true);
  }

  return (
    <Fragment>
      {toLandingPage ? <Redirect to='/landing-page' /> : null}
      <h1 className='newpost-header'>Create A New Entry</h1>
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

        <div className="row">
          <div className="col-sm-4"></div>

          <div className="col-sm-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="showHead"
                onClick={handleCheckBox}
              ></input>
              <label className="form-check-label">Headache</label>
              {showNums.showHead ? <input type="number" min="0" max="9" name="headNum" onChange={handleNumChange}/> : null}
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="showStom"
                onClick={handleCheckBox}
              ></input>
              <label className="form-check-label">Stomach Ache</label>
              {showNums.showStom ? <input type="number" min="0" max="9" name="stomNum" onChange={handleNumChange}/> : null}
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="showFever"
                onClick={handleCheckBox}
              ></input>
              <label className="form-check-label">Fever</label>
              {showNums.showFever ? <input type="number" min="0" max="9" name="feverNum" onChange={handleNumChange}/> : null}
            </div>

            <Link to="/landing-page"><button style={{ margin: '0 auto', width: '30%', color: 'white',backgroundColor: '#3D52D5'}}onClick={handleSubmit} className="btn btn-primary my-3 glow-button">Save</button></Link>
          </div>

          <div className="col-sm-4"></div>
        </div>
      </form>
    </Fragment>
  );
}

export default NewPost;
