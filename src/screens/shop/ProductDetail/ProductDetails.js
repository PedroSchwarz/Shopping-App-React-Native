import React from "react";
import { useSelector } from "react-redux";

import {
  Container,
  ProductImage,
  Content,
  Header,
  Title,
  Price,
  Divider,
  Description
} from "./styles";
import PriceTag from "../../../components/shop/PriceTag/PriceTag";
import Colors from "../../../constants/Colors";

const ProductDetails = ({ navigation }) => {
  const productId = navigation.getParam("productId");
  const product = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  return (
    <Container>
      <ProductImage source={{ uri: product.imageUrl }} />
      <Content>
        <Header>
          <Title textColor={Colors.accent}>{product.title}</Title>
          <PriceTag color={Colors.success}>
            <Price textColor={Colors.light}>{`$${product.price.toFixed(
              2
            )}`}</Price>
          </PriceTag>
        </Header>
        <Divider color={Colors.grey} />
        <Description>{product.description}</Description>
      </Content>
    </Container>
  );
};

ProductDetails.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam("productTitle");
  return {
    title
  };
};

export default ProductDetails;
