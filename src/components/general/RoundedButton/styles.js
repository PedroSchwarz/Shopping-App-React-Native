import styled from "styled-components";

export const Container = styled.View`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 32px;
  elevation: 5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const Background = styled.View`
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.color};
`;
