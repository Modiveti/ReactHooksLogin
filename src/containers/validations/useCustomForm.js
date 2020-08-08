import { useState, useEffect } from 'react';

function useCustomForm(validate, callback) {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(inputs));
    // if (event) {
    //     event.preventDefault();
    // }
    // callback();
  };

  const handleInputChange = (event, objKey, selectedValue) => {
    if (event) {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    } else if ((objKey, selectedValue)) {
      setInputs((inputs) => ({ ...inputs, [objKey]: selectedValue }));
    }
  };

  useEffect(() => {
    if (Object.keys(inputs).length > 0) {
      setErrors(validate(inputs));
    }
  }, [inputs, validate]);

  return {
    handleInputChange,
    handleSubmit,
    inputs,
    setInputs,
    errors,
  };
}

export default useCustomForm;
