import React from "react";
import { View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

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
import FloatingButton from "../../../components/general/FloatingButton/FloatingButton";
import Colors from "../../../constants/Colors";

import * as CartActions from "../../../store/actions/cart";

const ProductDetails = ({ navigation }) => {
  const productId = navigation.getParam("productId");

  const product = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  const dispatch = useDispatch();

  const addToCart = () => {
    const { id, title, price } = product;
    dispatch(CartActions.addToCart({ id, title, price }));
  };

  return (
    <ScrollView>
      <Container>
        <View>
          <ProductImage source={{ uri: product.imageUrl }} />
          <FloatingButton
            size={48}
            color={Colors.accent}
            icon="add-shopping-cart"
            iconSize={24}
            iconColor={Colors.light}
            onPress={addToCart}
          />
        </View>
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
    </ScrollView>
  );
};

ProductDetails.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam("productTitle");
  return {
    title
  };
};

export default ProductDetails;
