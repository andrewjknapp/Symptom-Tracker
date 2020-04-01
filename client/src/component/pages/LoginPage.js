import React from "react";

function LoginPage() {
    return (
        <div>
            <h1>Sign In </h1>
            <input type="text"></input>
            <form>
                <label htmlFor="username">Email:</label>
                <input type="email" 
                placeholder="Email" 
                value={signInEmail} 
                onChange={this.onTextBoxChangeSignInEmail}
                />

                <label htmlFor="password">Password:</label>
                <input type="password" 
                placeholder="password" 
                value={signInPassword}
                onChange={this.onTextBoxChangeSignInPassword}
                />

                <button onClick={this.onSignIn} 
                className="btn btn-primary mt-3">Log In</button>
            </form>
            
        </div>
    )


}
//will need bcryptjs?//
//
export default LoginPage;