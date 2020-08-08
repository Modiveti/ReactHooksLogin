export default function validate(inputs) {
  let errors = {};
  const errorObjKeys = Object.keys(inputs);
  if (errorObjKeys.length > 0) {
    let validatedErrors = errorObjKeys.map((item, index) => {
      switch (item.toString()) {
        case 'email':
        case 'signInemail':
          if (!inputs[item]) {
            errors[item] = `${item} address is required`;
          } else if (!/\S+@\S+\.\S+/.test(inputs[item])) {
            errors[item] = `${item} address is invalid`;
          }
          break;
        case 'firstName':
        case 'lastName':
        case 'middleName':
          var letters = /^[A-Za-z]+$/;
          if (!inputs[item]) {
            errors[item] = `${item} is required`;
          } else if (!inputs[item].match(letters)) {
            // add strong validation
            errors[item] = `${item} should contain only characters`;
          }
          break;
        case 'fullName':
          if (!inputs.fullName) {
            errors.fullName = 'Full  Name is required';
          } else if (inputs.fullName.length < 6) {
            errors.fullName = 'Full Name should be minimum 6 characters';
          }
          break;
        case 'message':
          if (!inputs.message) {
            errors.message = 'Message is required';
          } else if (inputs.message.length < 10) {
            errors.message = 'Message should be minimum 10 characters';
          }
          break;
        case 'signInemail':
          if (!inputs.signInemail) {
            errors.signInemail = 'Email address is required';
          } else if (!/\S+@\S+\.\S+/.test(inputs.signInemail)) {
            errors.signInemail = 'Email address is invalid';
          }
          break;
        case 'password':
        case 'verifyPassword':
          let validatePwd = /[`!%^&*()_+\-=\[\]{};'"\\|<>\/?~]/;
          if (!inputs[item]) {
            errors[item] = 'password should not be empty';
          } else if (inputs[item].length < 5) {
            errors[item] = 'password length should be greater than 5';
          } else if (inputs[item].match(validatePwd)) {
            errors[item] =
              'password should contain special characters @#$ only';
          }
          break;
        default:
          break;
      }
      return errors;
    });
    const returnObj = validatedErrors.reduce(
      (finalObj, formFieldObj) => Object.assign(finalObj, formFieldObj),
      {}
    );
    return returnObj;
  }
  return errors;
}
