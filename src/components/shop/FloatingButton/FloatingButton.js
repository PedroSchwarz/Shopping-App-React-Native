import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { Container, Background } from "./styles";

const FloatingButton = props => (
  <Container size={props.size}>
    <TouchableNativeFeedback onPress={props.onPress}>
      <Background color={props.color}>{props.children}</Background>
    </TouchableNativeFeedback>
  </Container>
);

export default FloatingButton;
