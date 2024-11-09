// Email validator
export const VALIDATOR_EMAIL = () => ({
    type: 'EMAIL'
  });
  
  // Required field validator
  export const VALIDATOR_REQUIRE = () => ({
    type: 'REQUIRE'
  });
  
  // Validator for minimum length
  export const VALIDATOR_MINLENGTH = minLength => ({
    type: 'MINLENGTH',
    minLength: minLength
  });
  
  // Password validator (min 8 characters and at least 1 special character)
  export const VALIDATOR_PASSWORD = () => ({
    type: 'PASSWORD'
  });
  
  // Regular expressions for validation
  const rfcEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
  // Validation function
  export const validate = (value, validators) => {
    let isValid = true;
  
    for (const validator of validators) {
      if (validator.type === 'EMAIL') {
        isValid = isValid && rfcEmailRegex.test(value);
      }
      if (validator.type === 'REQUIRE') {
        isValid = isValid && value.trim().length > 0;
      }
      if (validator.type === 'MINLENGTH') {
        isValid = isValid && value.trim().length >= validator.minLength;
      }
      if (validator.type === 'PASSWORD') {
        isValid = isValid && passwordRegex.test(value);
      }
    }
  
    return isValid;
  };