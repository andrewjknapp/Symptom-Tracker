import React, { Fragment } from "react";
import './NewPost.css'

function NewPost() {
  return (
    <Fragment>
    <h1>Create A New Entry</h1>
      <form>
        <input className="form-control form-control-lg" type="text" placeholder="Title">
        </input>

    <textarea class="form-control" id="description" rows="3" placeholder="Description"></textarea>
  

      
      </form>
    </Fragment>
  );
}

export default NewPost;
