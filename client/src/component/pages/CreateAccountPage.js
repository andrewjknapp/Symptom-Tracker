import React, { useState, useEffect } from 'react';
import 'whatwg-fetch';
import '../assets/css/accountpage.css';
import '../assets/css/colors.css';
import { setInStorage } from '../../utils/storage';
import { Redirect } from 'react-router';

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
  });
  const [signIn, setSignIn] = useState({
    userEmail: '',
    userPassword: '',
  });
  // Handles whether or not to display an error for registration
  const [isRegistrationError, setIsRegistrationError] = useState({
    error: false,
    message: ""
  });
  // Handles whether or not to display an error for logging in
  const [isSignInError, setIsSignInError] = useState({
    error: false,
    message: ""
  });
  // Handles whether or not to redirect user to landing page
  const [toLandingPage, setToLandingPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRegistrationError({
        error: false,
        message: ""
      })
    }, 3000);
    return () => clearTimeout(timer);
  }, [isRegistrationError]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSignInError({
        error: false,
        message: ""
      })
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSignInError]);

  const onSignUp = (e) => {
    e.preventDefault();
    //grab state and post request to backend
    const { firstName, lastName, email, password } = signUp;

    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          setSignIn({
            userEmail: email,
            userPassword: password,
          });
        } else {
          // alert user that email has already been taken
          //alert(json.message);
          setIsRegistrationError({
            error: true,
            message: json.message
          });
          throw new Error('invalid email');
        }
      })
      .then(() => {
        onSignIn(null, email, password);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  const onSignInSuccess = (json) => {
    setErrors({ ...errors, signInError: json.message });

    setInStorage('symptom_tracker', {
      token: json.token,
      firstName: json.firstName,
      id: json.userId,
    });
    console.log(userPassword);

    setToken({
      token: json.token,
    });
  };
  const onSignIn = (e, userEmail, userPassword) => {
    if (e !== null) {
      e.preventDefault();
    }

    if (signIn.userEmail !== '') {
      userEmail = signIn.userEmail;
      userPassword = signIn.userPassword;
    }

    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          onSignInSuccess(json);
          setToLandingPage(true);
        } else {
          setIsSignInError({
            error: true,
            message: json.message
          });
          // Invalid login message here
          console.log(token);
          setErrors({
            signInError: json.message,
          });
        }
      });
    //grab state and post request to backend
  };
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

  const { email, password, firstName, lastName } = signUp;
  const { userEmail, userPassword } = signIn;
  var style = { backgroundImage: 'url( "../assets/images/microscope.jpg")' };

  return toLandingPage ? (
    <Redirect to='/landing-page' />
  ) : (
    <div className='loginBody' style={style}>
      <div className='login-container'>

        <article className='transparent-gray-background'>
          {/* APP DESCRIPTION */}
          <section>
            <h1 className='login'>Symptom Tracker</h1>
            <h4 className='login'>Empower your medical visits with personal data!</h4>
        </section>

          {/* APP DESCRIPTION */}
          <section>
            <p className='login-description'>
              Welcome to your own personal medical symptom recorder.
            Upon signup, enter any symptoms you are experiencing into your own private medical profile.</p>
            <p className='login-description'>
              Using our Symptom Charting Technology, you can view your logged symptoms and their severity as they progress. You can also print medical information and symptom history in order to bring to your
              next visit to a medical professional. </p>
            <p className='login-description'>
              Let Symptom Tracker help you!
            </p>
          </section>
        </article>

        <article className="transparent-gray-background form-background">
          {/* USER LOGIN */}
          <section className='space-for-error'>
          <div>
            <h4 className='h4 user'>User Log In</h4>
            <form className='form-group'>
              <input
                type='email'
                name='userEmail'
                placeholder='Email'
                id='email'
                value={userEmail}
                onChange={onSignInChange}
              />
              <br />

              <input
                type='password'
                name='userPassword'
                placeholder='Password'
                id='password'
                value={userPassword}
                onChange={onSignInChange}
              />
              <br />
              <button onClick={onSignIn} className='logbutton'>
                Log In
              </button>
            </form>
          </div>
          {/* USER REGISTRATION */}
        </section>
          {isSignInError.error ? 
              <div className="alert alert-danger sign-in-error" role="alert">
                {isSignInError.message}
              </div> : null}
        
          <section className="space-for-error">
          <div>
          <h4 className='h4 user'>User Registration</h4>
            <form className='form-group UserInput'>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={firstName}
                onChange={onSignUpChange}
              />
              <br />

              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={lastName}
                onChange={onSignUpChange}
              />
              <br />

              <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onSignUpChange}
              />
              <br />

              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onSignUpChange}
              />
              <br />

              <button onClick={onSignUp} className='logbutton'>
                Sign Up
              </button>
            </form>
          </div>
        </section>
          {isRegistrationError.error ? 
              <div className="alert alert-danger sign-in-error" role="alert">
                {isRegistrationError.message}
              </div> : null}
        </article>
      </div>
    </div>
  );
}

export default CreateAccountPage;
