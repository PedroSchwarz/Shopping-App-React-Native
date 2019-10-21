export default (value, required, minLength, maxLength) => {
  if (required && value.trim().length === 0) {
    return { valid: false, message: "This field is required!" };
  } else if (minLength && value.length < minLength) {
    return {
      valid: false,
      message: `Field value is too short. It must be at least ${minLength} characters long!`
    };
  } else if (maxLength && value.length > maxLength) {
    return {
      valid: false,
      message: `Field value is too long. It must be shorter than ${maxLength} characters long!.`
    };
  } else {
    return { valid: true, message: null };
  }
};
