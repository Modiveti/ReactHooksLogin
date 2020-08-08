import React, { useState } from 'react';
import './Sign.scss';
//import Spinner from "../../../../assets/Icons/spinner/Spinner";
//import BannerImage from "../../../../components/Banner/BannerImg";
import useCustomForm from '../validations/useCustomForm';
import validate from '../validations/FormValidations';
//import firebase from "../../../../firebaseConfig";
import { withRouter } from 'react-router-dom';

const SignInForm = (props) => {
  const { inputs, handleInputChange, errors } = useCustomForm(validate); // setInputs
  const [formType, setFormType] = useState('Sign In'); // Create Account and Forgot Password
  const [inActiveFormButtons, setInActiveFormButtons] = useState([
    'Create Account',
    'Forgot Password',
  ]);
  const [formStatusError, setFormStatusError] = useState('');
  const [showFormError, setShowFormError] = useState(false);
  const [showLoader, setLoader] = useState(false);

  const SubmitButtonenable = () => {
    let status = true;
    if (Object.keys(errors).length === 0) {
      status = false;
    }
    if (Object.keys(inputs).length < 2) {
      status = true;
    }
    return status;
  };

  function handleFormSubmitBtn(event) {
      event.preventDefault();
      props.history.push('/dashboard')
    //   setLoader((showLoader) => true);
    //   const getButtonText = event.target.name;
    //   var self = props;
    //   let { email, password, verifyPassword } = inputs;
    //   switch (getButtonText) {
    //     case "Sign In":
    //       firebase
    //         .auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then((user) => {
    //           setLoader(false);
    //           self.history.push("/ResumePage");
    //         })
    //         .catch((error) => {
    //           const errorInfo = getAuthError(error);
    //           setFormStatusError(errorInfo);
    //           setShowFormError(true);
    //           setLoader(false);
    //         });
    //       break;
    //     case "Create Account":
    //       if (password === verifyPassword) {
    //         firebase
    //           .auth()
    //           .createUserWithEmailAndPassword(email, password)
    //           .then((user) => {
    //             setLoader(false);
    //             self.history.push("/ResumePage");
    //           })
    //           .catch((error) => {
    //             setFormStatusError(getAuthError(error));
    //             setShowFormError(true);
    //             setLoader(false);
    //           });
    //       } else {
    //         setFormStatusError("Passwords do not match");
    //         setShowFormError(true);
    //         setLoader(false);
    //       }
    //       break;
    //     case "Submit": // Forgot Password
    //       firebase
    //         .auth()
    //         .sendPasswordResetEmail(email, { url: "https://xyz.com/" })
    //         .then((res) => {
    //           console.log(res);
    //         })
    //         .catch((error) => {
    //           // An error happened.
    //           console.log(error);
    //         });
    //       setLoader(false);
    //       break;
    //     default:
    //       break;
    //   }
  }

  function renderActiveForm(event) {
    event.preventDefault();
    const buttonText = event.target.name;
    const getIndex = inActiveFormButtons.indexOf(buttonText);
    inActiveFormButtons[getIndex] = formType;
    setInActiveFormButtons(inActiveFormButtons);
    setFormType(buttonText);
  }

  return (
    <div className="gog_page_container signin_main">
      <div className="signIn_page">
        <form className="signIn_page_form">
          <p className="text-center">{formType}</p>
          <div className="form-group">
            <label htmlFor="signInemail">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email || ''}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="help validation_error">{errors.email}</p>
            )}
          </div>
          {formType !== 'Forgot Password' && (
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                onChange={handleInputChange}
                value={inputs.password || ''}
              />
              {errors.password && (
                <p className="help validation_error">{errors.password}</p>
              )}
            </div>
          )}
          {formType === 'Create Account' && (
            <div>
              <div className="form-group">
                <label htmlFor="verifyPassword">Verify New Password</label>
                <input
                  type="password"
                  name="verifyPassword"
                  className="form-control"
                  id="verifyPassword"
                  placeholder="verify new password"
                  onChange={handleInputChange}
                  value={inputs.verifyPassword || ''}
                />
                {errors.verifyPassword && (
                  <p className="help validation_error">
                    {errors.verifyPassword}
                  </p>
                )}
              </div>
              <div className="form-check terms_conditions">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Yes, I have read and consent to the terms and conditions
                </label>
              </div>
            </div>
          )}
          {showFormError && (
            <label className="error_info form_status_error">
              {formStatusError}
            </label>
          )}
          <div className="button" id="button-2">
            <button
              className="btn"
              disabled={SubmitButtonenable()}
              onClick={(e) => handleFormSubmitBtn(e)}
            >
              {formType === 'Forgot Password' ? 'Submit' : formType}
            </button>
          </div>
        </form>
        <div className="account_buttons">
          {inActiveFormButtons.map((item, index) => {
            return (
              <button
                className="w-100 border-right"
                name={item}
                key={index.toString()}
                onClick={(e) => renderActiveForm(e)}
              >
                {item}
              </button>
            );
          })}
        </div>
        {/* {showLoader &&
         <Spinner />} */}
      </div>
    </div>
  );
};

export default withRouter(SignInForm);

const getAuthError = (error) => {
  let errorInfo = '';
  switch (error.code) {
    case 'auth/user-not-found':
      errorInfo = 'Invalid mail id. please enter correct id';
      break;
    case 'auth/wrong-password':
      errorInfo = 'Invalid password. please enter correct password';
      break;
    case 'auth/email-already-in-use':
      errorInfo = 'Email is already in use. please enter new mail id';
      break;
    default:
      break;
  }
  return errorInfo;
};
