import React, { Component } from 'react';
import MedicalProfile from "./MedicalProfile";
// import LoginPage from "./LoginPage";

import "whatwg-fetch";

import {
    getFromStorage, setInStorage
} from '../../utils/storage';


class CreateAccountPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            signUpFirstName: '',
            signUpEmail: '',
            signUpPassword: '',
            //split ^these into seperate components...
        };
        this.onSignInChange = this.onSignInChange.bind(this);
        this.onSignUpChange = this.onSignUpChange.bind(this);
        // this.onTextBoxChangeSignUpEmail = this.onTextBoxChangeSignUpEmail.bind(this);
        // this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(this);
        // this.onTextBoxChangeSignUpFirstName = this.onTextBoxChangeSignUpFirstName.bind(this);
        // this.onTextBoxChangeSignUpLastName = this.onTextBoxChangeSignUpLastName.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        const obj = getFromStorage('symptom_tracker');
        if (obj && obj.token) {
            const { token } = obj;
            //verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,

                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
                // set state for different things/
            });
        }
    }

    onSignUp() {
        //grab state and post request to backend
        const {
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        fetch('/api/account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: signUpFirstName,
                lastName: signUpLastName,
                email: signUpEmail,
                password: signUpPassword,
            }),
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                        signUpFirstName: '',
                        signUpLastName: '',
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,


                    })
                }

            });
    }


    onSignIn() {
        const {
            signInEmail,
            signInPassword,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        fetch('/api/account/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword,
            }),
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    setInStorage('symptom_tracker', { token: json.token });
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInPasword: '',
                        signinEmail: '',
                        token: json.token,
                    });
                } else {
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                    });
                }

            });
        //grab state and post request to backend

    }

    logout() {
        this.setState({
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
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,

                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
                // set state for different things/
            });
        }
    }
    //destructure the object
    onSignInChange (e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    };
    onSignUpChange (e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    };


    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword,
            signUpError,

        } = this.state;
        console.log(signUpLastName, signInEmail, signUpPassword)
        if (isLoading) {
            return (<div><p>Loading...</p></div>)
        }
        if (!token) {
            return (
                <div>
                    <form>
                        <label htmlFor="username">Email:</label>
                        {/* each input should have a name (email) */}
                        <input type="email"
                            name="signInEmail"
                            placeholder="Email"
                            value={signInEmail}
                            onChange={this.onSignInChange}
                        />

                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            name="signInPassword"
                            placeholder="password"
                            value={signInPassword}
                            onChange={this.onSignInChange}
                        />
                    
                        <button onClick={this.onSignIn}
                            className="btn btn-primary mt-3">Log In</button>
                    </form>
                    <br />



                    <form>
                        <input type="text"
                            name="signUpFirstName"
                            placeholder="First Name"
                            value={signUpFirstName}
                            onChange={this.onSignUpChange} />
                        <br />
                        <input
                            type="text"
                            name="signUpLastName"
                            placeholder="Last Name"
                            value={signUpLastName}
                            onChange={this.onSignUpChange}
                        />
                        <br />
                        <input type="username" placeholder="Email"
                            name="signUpEmail"
                            value={signUpEmail}
                            onChange={this.onSignUpChange}
                        />
                        <br />
                        <input type="password" placeholder="password"
                            name="signUpPassword"
                            value={signUpPassword}
                            onChange={this.onSignUpChange}
                        />
                        <br />
                        
                        <button onClick={this.onSignUp}
                            className="btn btn-primary mt-3">Sign Up</button>
                    </form>
                </div>
            );
        }
        return (
            <div><MedicalProfile />


                <button onClick={this.logout}> Logout</button>
            </div>
        );
    }
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