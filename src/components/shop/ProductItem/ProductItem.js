import React from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { useDispatch } from "react-redux";

import { Container, ProductImage, Content, Title, Price } from "./styles";
import * as CartActions from "../../../store/actions/cart";
import PriceTag from "../PriceTag/PriceTag";
import FloatingButton from "../../general/FloatingButton/FloatingButton";
import Colors from "../../../constants/Colors";

const ProductItem = ({ id, title, imageUrl, price, navigation }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(CartActions.addToCart({ id, title, price }));
  };

  const goToDetails = () => {
    navigation.navigate("ProductDetails", {
      productId: id,
      productTitle: title
    });
  };

  return (
    <Container color={Colors.grey} borderColor={Colors.grey}>
      <View>
        <ProductImage source={{ uri: imageUrl }} />
        <FloatingButton
          size={40}
          color={Colors.accent}
          icon="add-shopping-cart"
          iconSize={20}
          iconColor={Colors.light}
          onPress={addToCart}
        />
      </View>
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
