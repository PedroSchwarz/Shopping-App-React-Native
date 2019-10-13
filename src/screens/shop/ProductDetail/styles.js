import styled from "styled-components";

export const Container = styled.View`
  flex-grow: 1;
`;

export const ProductImage = styled.Image`
  height: 400px;
`;

export const Content = styled.View`
  margin: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.textColor};
  font-family: "raleway-regular";
`;

export const Price = styled.Text`
  font-size: 20px;
  color: ${props => props.textColor};
  font-family: "raleway-regular";
`;

export const Divider = styled.View`
  border-bottom-color: ${props => props.color};
  border-bottom-width: 1px;
  margin: 16px 0;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: "raleway-regular";
`;
