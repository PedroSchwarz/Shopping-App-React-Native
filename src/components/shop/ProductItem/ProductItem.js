import React from "react";
import { TouchableNativeFeedback } from "react-native";

import { Container, ProductImage, Content, Title, Price } from "./styles";
import PriceTag from "../PriceTag/PriceTag";
import Colors from "../../../constants/Colors";

const ProductItem = ({ id, title, imageUrl, price, navigation }) => {
  const goToDetails = () => {
    navigation.navigate("ProductDetails", {
      productId: id,
      productTitle: title
    });
  };

  return (
    <Container color={Colors.grey} borderColor={Colors.grey}>
      <ProductImage source={{ uri: imageUrl }} />
      <TouchableNativeFeedback onPress={goToDetails}>
        <Content>
          <Title textColor={Colors.accent}>{title}</Title>
          <PriceTag color={Colors.success}>
            <Price textColor={Colors.light}>{`$${price.toFixed(2)}`}</Price>
          </PriceTag>
        </Content>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default ProductItem;
