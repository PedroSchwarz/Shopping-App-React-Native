import styled from "styled-components";

export const Container = styled.View`
  margin-top: 8px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${props => props.color};
`;

export const Content = styled.View`
  width: 95%;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const Message = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  font-family: "raleway-regular";
  color: ${props => props.textColor};
`;
