import styled from "styled-components";

export const Container = styled.View`
  margin: 8px 16px;
  background-color: ${props => props.color};
  border-color: ${props => props.borderColor};
  border-width: 1px;
  border-radius: 10;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  elevation: 5;
`;

export const ProductImage = styled.Image`
  height: 300px;
`;

export const Content = styled.View`
  padding: 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${props => props.textColor};
  font-family: "raleway-regular";
`;

export const Price = styled.Text`
  color: ${props => props.textColor};
  font-family: "raleway-regular";
`;
