import styled from "styled-components";

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Content = styled.View`
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: "raleway-regular";
  color: ${props => props.textColor};
  margin-right: 16px;
  margin-bottom: 8px;
`;

export const TotalPrice = styled.Text`
  font-size: 16px;
  font-family: "raleway-regular";
  color: ${props => props.textColor};
`;
