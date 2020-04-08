import React from "react";
import formatDate from "./DateFormat";
import './assets/css/PostCard.css'


function PostCard(props) {

  const { title, description, time } = props.post;
  let { symptoms } = props.post;

  return (
    <div key={props.keyNumber} className="card text-center m-5 postCard">
      <div className="card-header">{formatDate(time)}</div>
      <div className="card-body">
        <h5 className="post-title card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <div className='table-responsive'>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Symptom</th>
                <th scope="col">Severity</th>
              </tr>
            </thead>
            <tbody>
              {symptoms.map((symp, i) =>
                <tr key={i}>
                  <td>{symp.type}</td>
                  <td>{symp.severity}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <button className="postCardButton" onClick={props.deletePost} description={description}>Delete</button>
      <div className="card-footer text-muted"></div>
    </div>
  );
}

export default PostCard;
