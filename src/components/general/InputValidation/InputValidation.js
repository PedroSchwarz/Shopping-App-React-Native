import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Divider, Content, Message } from "./styles";

import Colors from "../../../constants/Colors";

const InputValidation = ({ validation }) => {
  const { valid, message } = validation;

  return (
    <Container>
      <Divider color={valid ? Colors.success : Colors.error} />
      {!valid && (
        <Content>
          <MaterialIcons name="error-outline" size={30} color={Colors.info} />
          <Message textColor={Colors.warning}>{message}</Message>
        </Content>
      )}
    </Container>
  );
};

export default InputValidation;
