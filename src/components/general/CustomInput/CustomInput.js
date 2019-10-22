import React, { useState } from "react";
import { InputContainer, Label, Input } from "./styles";
import InputValidation from "../InputValidation/InputValidation";

const CustomInput = props => {
  const { label, validation } = props;
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched(true);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input {...props} onKeyPress={handleTouch} />
      <InputValidation validation={validation} touched={touched} />
    </InputContainer>
  );
};

export default CustomInput;
