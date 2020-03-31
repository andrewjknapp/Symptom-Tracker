import React from "react";

function CreateAccountPage() {
    return (
        <div>
            <h1>Create Account Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input placeholder="email" />
                <label htmlFor="password">Password:</label>
                <input placeholder="password" />
                <button onClick={props.handleFormSubmit} 
                className="btn btn-primary mt-3">Log In</button>
            </form>
        </div>
    )

}
//will need bcryptjs?//
//
export default CreateAccountPage;