import React from "react";
import './assets/css/PostCard.css'


function PostCard(props) {

  const { title, description, date } = props.post;
  let { symptoms } = props.post;
  console.log(props.key);
    return (
      <div key={props.keyNumber} className="card text-center m-5">
        <div className="card-header">{date}</div>
        <div className="card-body">
          <h5 style={{fontSize: '40px'}} className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <h6 style={{fontSize: '40px'}} >Symptoms</h6>
          <ul>
          {symptoms.map(symp => <li style={{listStyleType: 'none'}}>{symp.type}, Severity: {symp.severity}</li>)}
          </ul>
        </div>
        <button  className="postCardButton" onClick={props.deletePost} description={description}>Delete</button>
        <div className="card-footer text-muted"></div>
      </div>
    );
}

export default PostCard;
