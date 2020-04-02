import React, { Component } from "react";

class PostCard extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">(Render the date here?)</div>
        <div className="card-body">
          <h5 className="card-title">Title of User's post</h5>
          <p className="card-text">
            User's description of symptom/illness
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    );
  }
}

export default PostCard;
