import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Background } from "./styles";

const FloatingButton = ({
  size,
  onPress,
  color,
  icon,
  iconSize,
  iconColor
}) => (
  <Container size={size}>
    <TouchableNativeFeedback onPress={onPress}>
      <Background color={color}>
        <MaterialIcons name={icon} size={iconSize} color={iconColor} />
      </Background>
    </TouchableNativeFeedback>
  </Container>
);

export default FloatingButton;
