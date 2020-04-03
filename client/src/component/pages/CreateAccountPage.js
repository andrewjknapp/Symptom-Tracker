import React, { useState, useEffect } from 'react';
import MedicalProfile from "./MedicalProfile";
// import LoginPage from "./LoginPage";
import UserContext from "../../utils/UserContext";

import "whatwg-fetch";

import {
    getFromStorage, setInStorage
} from '../../utils/storage';


function CreateAccountPage (props) {
// class CreateAccountPage extends Component {
    // constructor(props) {
        // super(props);
    //4 hooks needed (is loading, token, signups, signins...)
        // this.state = {
        //     isLoading: true,
        //     token: '',
        //     signUpError: '',
        //     signInError: '',
        //     signInEmail: '',
        //     signInPassword: '',
        //     signUpFirstName: '',
        //     signUpEmail: '',
        //     signUpPassword: '',
        //     //split ^these into seperate components...
        // };

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
    const[signIn, setSignIn] = useState({
        userEmail: '',
        userPassword: '',
    });

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
                console.log("response")
                if (json.success) {
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
                    setErrors(...errors, {signInError: json.message})
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
    const onSignInChange = (e) =>  {
        const {name, value} = e.target;
        setSignIn({
            [name]: value,
        });
    };
    const onSignUpChange = (e) => {
        const {name, value} = e.target;
        setSignUp({
            ...signUp,
            [name]: value,
        });
    };

    const { email, password, firstName, lastName } = signUp
    const { userEmail, userPassword } = signIn


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