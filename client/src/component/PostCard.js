import React from "react";

function PostCard(props) {

  const { title, description, date } = props.post;
  let { symptoms } = props.post;

    return (
      <div className="card text-center m-5">
        <div className="card-header">{date}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <h6>Symptoms</h6>
          <ul>
          {symptoms.map(symp => <li>{symp.type}, Severity: {symp.severity}</li>)}
          </ul>
        </div>
        <button className="btn btn-primary mt-3" onClick={props.deletePost} description={description}>Delete</button>
        <div className="card-footer text-muted"></div>
      </div>
    );
}

export default PostCard;
