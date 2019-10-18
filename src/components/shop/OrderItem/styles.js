import styled from "styled-components";

export const Header = styled.View`
  flex-wrap: wrap;
  background-color: ${props => props.color};
  padding: 16px;
`;

export const InfoText = styled.Text`
  color: ${props => props.textColor};
  font-size: 18px;
  font-family: ${props => (props.bold ? "raleway-bold" : "raleway-regular")};
  margin: 4px 0px;
`;

export const Divider = styled.View`
  border-bottom-color: ${props => props.color};
  border-bottom-width: 1;
`;
