import styled from "styled-components";

export const Center = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const WarningMessage = styled.Text`
  font-size: 18px;
  font-family: "raleway-regular";
  color: ${props => props.textColor};
`;

export const EmptyList = styled.View`
  justify-content: center;
  margin: 16px 0;
`;
