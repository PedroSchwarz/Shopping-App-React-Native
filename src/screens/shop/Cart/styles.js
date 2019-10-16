import styled from "styled-components";

export const Summary = styled.View`
  margin: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.View`
  border-bottom-color: ${props => props.color};
  border-bottom-width: 1;
`;
