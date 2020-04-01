import React from "react";

function CreateAccountPage() {
    return (
        <div>
            <h1>Sign Up Page</h1>
            <form>
                <input type="text" 
                placeholder="First Name" 
                value={signUpFirstName}
                onChange={this.onTextBoxChangeSignUpFirstName} />
                <br />
                <input 
                type="text" 
                placeholder="Last Name"
                value={signUpLastName}
                onChange={this.onTextBoxChangeSignUpLastName}
                />
                <br />
                <input type="username" placeholder="Email" 
                value={signUpEmail}
                onChange={this.onTextBoxChangeSignUpEmail}
                />
                <br />
                <input type="password" placeholder="password"
                value={signUpPassword}
                onChange={this.onTextBoxChangeSignUpPassword}
                />
                <br />
                <button onClick={props.handleFormSubmit} 
                className="btn btn-primary mt-3">Sign Up</button>
            </form>
        </div>
    )

}
//will need bcryptjs?//
//
export default CreateAccountPage;