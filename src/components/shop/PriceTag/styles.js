import styled from "styled-components";

export const Tag = styled.View`
  padding: 8px;
  background-color: ${props => props.color};
  border-radius: 20;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  elevation: 5;
`;
