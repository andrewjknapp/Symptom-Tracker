import React, { useState, useEffect } from 'react';
import MedicalProfile from "./MedicalProfile";
// import LoginPage from "./LoginPage";
import UserContext from "../../utils/UserContext";
import Logout from "../Logout";

import "whatwg-fetch";

import {
    getFromStorage, setInStorage
} from '../../utils/storage';
import { Redirect } from 'react-router';


function CreateAccountPage(props) {

    //hook it up with some hooks for all our different states
    const [loading, setLoading] = useState({
        isLoading: true,
    });
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


    useEffect(() => {
        const obj = getFromStorage('symptom_tracker');
        if (obj && obj.token) {
            const { token } = obj;
            //verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        setToken({
                            token,
                        });
                        setLoading({
                            isLoading: false
                        })
                    }
                    else {
                        setLoading({
                            isLoading: false
                        })
                    }
                });
        } else {
            setLoading({
                isLoading: false,
                // set state for different things/
            });
        }
    }, [])

    const onSignUp = (e) => {
        e.preventDefault();
        //grab state and post request to backend
        const {
            firstName,
            lastName,
            email,
            password,
        } = signUp;

        setLoading({
            isLoading: true,
        });

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
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                if (json) {
                    // setErrors(...errors, {signUpError: json.message})
                    setLoading({
                        isLoading: false,
                    })
                    setSignUp({
                        email: '',
                        password: '',
                        firstName: '',
                        lastName: '',
                    });
                    setToLandingPage(true)
                } else {
                    setErrors({
                        signUpError: json.message,

                    })
                    setLoading({
                        isLoading: false,
                    })
                }

            });
    }
    const onSignInSuccess = (json) => {

        setErrors({ ...errors, signInError: json.message })
        setLoading({
            isLoading: false,
        })
        setInStorage('symptom_tracker', { token: json.token });
        setSignIn({
            pasword: userPassword,
            email: userEmail,
        });
        setToken({
            token: json.token,
        })

    }
    const onSignIn = (e) => {
        e.preventDefault();
        const {
            userEmail,
            userPassword,
        } = signIn;

        setLoading({
            isLoading: true,
        });

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
                console.log(json);
                if (json.success) {
                    onSignInSuccess(json);
                    setToLandingPage(true);
                } else {

                    setErrors({
                        signInError: json.message,
                    })
                    setLoading({
                        isLoading: false,
                    });
                }
            });
        //grab state and post request to backend
    }
    const logout = () => {
        setLoading({
            isLoading: true,
        })
        const obj = getFromStorage('symptom_tracker');
        if (obj && obj.token) {
            const { token } = obj;
            //verify token
            fetch('/api/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        setToken({
                            token: '',
                        });
                        setLoading({
                            isLoading: false,
                        })
                    } else {
                        setLoading({
                            isLoading: false,
                        });
                    }
                });
        } else {
            setLoading({
                isLoading: false,
                // set state for different things/
            });
        }
    }
    //destructure the object
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

    return toLandingPage ? <Redirect to='/landing-page' /> : (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <form className="form-group">
                            <label htmlFor="username">Email:</label>
                            {/* each input should have a name (email) */}
                            <input type="email"
                                name="userEmail"
                                placeholder="Email"
                                id="email"
                                value={userEmail}
                                onChange={onSignInChange}
                            />

                            <label htmlFor="password">Password:</label>
                            <input type="password"
                                name="userPassword"
                                placeholder="password"
                                id="password"
                                value={userPassword}
                                onChange={onSignInChange}
                            />

                            <button onClick={onSignIn}
                                className="btn btn-primary mt-3">Log In</button>
                        </form>
                    </div>
                    <div className="col-5">
                        <form className="form-group">
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
                                className="btn btn-primary mt-3">Sign Up</button>
                        </form>
                    </div>
                    <Logout />

<<<<<<< HEAD
    return (
                <div>
                    <form>
                        <label htmlFor="username">Email:</label>
                        {/* each input should have a name (email) */}
                        <input type="email"
                            name="userEmail"
                            placeholder="Email"
                            value={userEmail}
                            onChange={onSignInChange}
                        />

                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            name="userPassword"
                            placeholder="password"
                            value={userPassword}
                            onChange={onSignInChange}
                        />
                    
                        <button onClick={onSignIn}
                            className="btn btn-primary mt-3">Log In</button>
                    </form>
                    <br />
                    <form>
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
                            className="btn btn-primary mt-3">Sign Up</button>
                    </form>


                {/* Ternary Operator to render medical profile and button based on login token */}
            <div>
              <button onClick={logout}> Logout</button>
            </div>
=======
>>>>>>> master
                </div>





            </div>

            {/* Ternary Operator to render medical profile and button based on login token */}

        </div>
    );

}


export default CreateAccountPage;





// function CreateAccountPage() {
//     return (
//         <div>
//             <h1>Sign Up Page</h1>
            // <form>
            //     <input type="text" 
            //     placeholder="First Name" 
            //     value={signUpFirstName}
            //     onChange={this.onTextBoxChangeSignUpFirstName} />
            //     <br />
            //     <input 
            //     type="text" 
            //     placeholder="Last Name"
            //     value={signUpLastName}
            //     onChange={this.onTextBoxChangeSignUpLastName}
            //     />
            //     <br />
            //     <input type="username" placeholder="Email" 
            //     value={signUpEmail}
            //     onChange={this.onTextBoxChangeSignUpEmail}
            //     />
            //     <br />
            //     <input type="password" placeholder="password"
            //     value={signUpPassword}
            //     onChange={this.onTextBoxChangeSignUpPassword}
            //     />
            //     <br />
            //     <button onClick={this.onSignUp} 
            //     className="btn btn-primary mt-3">Sign Up</button>
            // </form>
//         </div>
//     )

// }
// //will need bcryptjs?//
// //
// export default CreateAccountPage;