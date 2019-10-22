import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Divider, Content, Message } from "./styles";

import Colors from "../../../constants/Colors";

const InputValidation = ({ validation, touched }) => {
  const { valid, message } = validation;

  const setStatus = () => {
    if (!touched) {
      return Colors.info;
    } else if (touched && !valid) {
      return Colors.error;
    } else if (touched && valid) {
      return Colors.success;
    }
  };

  return (
    <Container>
      <Divider color={setStatus()} />
      {touched && !valid && (
        <Content>
          <MaterialIcons name="error-outline" size={30} color={Colors.info} />
          <Message textColor={Colors.warning}>{message}</Message>
        </Content>
      )}
    </Container>
  );
};

export default InputValidation;
