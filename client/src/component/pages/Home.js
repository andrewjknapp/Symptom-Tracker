import React, { Component } from 'react';
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";

import "whatwg-fetch";

import {
    getFromStorage, setInStorage
} from '../../utils/storage';


class Home extends Component {
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
        this.onTextBoxChangeSignInEmail = this.onTextBoxChangeSignInEmail.bind(this);
        this.onTextBoxChangeSignInPassword = this.onTextBoxChangeSignInPassword.bind(this);
        this.onTextBoxChangeSignUpEmail = this.onTextBoxChangeSignUpEmail.bind(this);
        this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(this);
        this.onTextBoxChangeSignUpFirstName = this.onTextBoxChangeSignUpFirstName.bind(this);
        this.onTextBoxChangeSignUpLastName = this.onTextBoxChangeSignUpLastName.bind(this);

        this.onSignIn = this.OnSignIn.bind(this);
        this.onSignUp = this.OnSignUp.bind(this);
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
    onTextBoxChangeSignInEmail(event) {
        this.setState({
            signInEmail: event.target.value,
    });
    }
    onTextBoxChangeSignInPassword(event) {
        this.setState({
            signInPassword: event.target.value,
    });
    }
    onTextBoxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
    });
    }
    onTextBoxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
    });
    }
    onTextBoxChangeSignUpFirstName(event) {
        this.setState({
            signUpFirstName: event.target.value,
    });
    }
    onTextBoxChangeSignUpLastName(event) {
        this.setState({
            signUpLastName: event.target.value,
    });
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
        }).then(res = res.json())
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
        }).then(res = res.json())
        .then(json => {
            if (json.success) {
                setInStorage('symptom_tracker', { token: json.token });
                this.setState( {
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


    }
    

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
            signUpError
            
        } = this.state;
        if (isLoading) {
        return (<div><p>Loading...</p></div>)
        }
        if (!token) {
            return (
                <div>
                    {LoginPage}
                    <br />
                    {CreateAccountPage}
                </div>
            );
        }
        return (
            <div>Landing Page</div>
            <button onClick={this.logout}> Logout</button>
        )
    }
}