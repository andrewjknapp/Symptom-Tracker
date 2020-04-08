import React, { useState } from 'react';
import "whatwg-fetch";
import "../assets/css/accountpage.css";
import "../assets/css/colors.css";
import { setInStorage } from '../../utils/storage';
import { Redirect } from 'react-router';
import LogInHeader from '../sections/LogInHeader';


function CreateAccountPage() {

    const [token, setToken] = useState('');
    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        signInError: '',
        signUpError: '',
    })
    const [signIn, setSignIn] = useState({
        userEmail: '',
        userPassword: '',
    });
    const [toLandingPage, setToLandingPage] = useState(false);

    const onSignUp = (e) => {
        e.preventDefault();
        //grab state and post request to backend
        const {
            firstName,
            lastName,
            email,
            password,
        } = signUp;

        fetch('/api/account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
        })
        .then(res => res.json())

            .then(()=>{
                console.log(email);
                setSignIn({
                    userEmail: email,
                    userPassword: password
                });
                console.log(userEmail);
            })
            .then(()=>{
                onSignIn(null, email, password);
            });
    }
    const onSignInSuccess = (json) => {

        setErrors({ ...errors, signInError: json.message })

        setInStorage('symptom_tracker', { token: json.token, firstName: json.firstName, id: json.userId });
        console.log(userPassword)
        
        setToken({
            token: json.token,
        })

    }
    const onSignIn = (e, userEmail, userPassword) => {
        if (e !== null) {
            e.preventDefault();
        }

        if (signIn.userEmail !== "") {
            userEmail = signIn.userEmail;
            userPassword = signIn.userPassword
        }

        fetch('/api/account/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            }),
        }).then(res => res.json())
            .then(json => {
                
                if (json.success) {
                    onSignInSuccess(json);
                    setToLandingPage(true);
                } else {

                    setErrors({
                        signInError: json.message,
                    })
                    
                }
            });
        //grab state and post request to backend
    }
    const onSignInChange = (e) => {
        const { name, value } = e.target;
        setSignIn({
            ...signIn,
            [name]: value,
        });
    };
    const onSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUp({
            ...signUp,
            [name]: value,
        });
    };

    const { email, password, firstName, lastName } = signUp
    const { userEmail, userPassword } = signIn
    var style = { backgroundImage: 'url( "../assets/images/microscope.jpg")' };

    return toLandingPage ? <Redirect to='/landing-page' /> : (
        <div className="loginBody" style={style}>
            <div className="container">
                <div className="row">
                    <LogInHeader />
                </div>
                <div className="row">
                    <div className="col-7">
                        <h4 className="h4 user">User Log In</h4>
                        <form className="form-group">
                            
                            <input type="email"
                                name="userEmail"
                                placeholder="Email"
                                id="email"
                                value={userEmail}
                                onChange={onSignInChange}
                            />
                            <br />
                           
                            <input type="password"
                                name="userPassword"
                                placeholder="password"
                                id="password"
                                value={userPassword}
                                onChange={onSignInChange}
                            />
                            <br />
                            <button onClick={onSignIn}
                                className="logbutton">Log In</button>
                        </form>
                    </div>
                    <br />
                </div>
                <div className="row">
                    <div className="col-7">
                        <h4 className="h4 user">User Registration</h4>
                        <form className="form-group UserInput">
                            
                            <input type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={onSignUpChange} />
                            <br />
                            
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={onSignUpChange}
                            />
                            <br />
                            
                            <input type="email" placeholder="Email"
                                name="email"
                                value={email}
                                onChange={onSignUpChange}
                            />
                            <br />
                            
                            <input type="password" placeholder="password"
                                name="password"
                                value={password}
                                onChange={onSignUpChange}
                            />
                            <br />

                            <button onClick={onSignUp}
                                className="logbutton">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreateAccountPage;


