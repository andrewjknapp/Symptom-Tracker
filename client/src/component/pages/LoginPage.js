import React from "react";

function LoginPage() {
    return (
        <div>
            <h1>Log In Page</h1>
            <input type="text"></input>
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
export default LoginPage;