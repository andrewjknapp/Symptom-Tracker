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


          <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Symptom</th>
      <th scope="col">Severity</th>
    </tr>
  </thead>
  <tbody>
    {symptoms.map(symp => 
    <tr>
      <td>{symp.type}</td>
      <td>{symp.severity}</td>
    </tr>)}
  </tbody>
</table>
          

        </div>
        <button style={{ margin: '0 auto', width: '30%', color: 'white',backgroundColor: '#3D52D5', borderRadius:'50px'}} className="btn glow-button my-3" onClick={props.deletePost} description={description}>Delete</button>
        <div className="card-footer text-muted"></div>
      </div>
    );
}

export default PostCard;
