import React from "react";
import { View, TouchableNativeFeedback, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { Container, ProductImage, Content, Title, Price } from "./styles";

import PriceTag from "../PriceTag/PriceTag";
import FloatingButton from "../../general/FloatingButton/FloatingButton";
import Colors from "../../../constants/Colors";

import * as CartActions from "../../../store/actions/cart";
import * as ProductsActions from "../../../store/actions/products";

const ProductItem = ({
  id,
  title,
  imageUrl,
  description,
  price,
  navigation,
  editable
}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(CartActions.addToCart({ id, title, price }));
  };

  const removeProduct = () => {
    Alert.alert("Are You Sure?", "This product will be delete forever.", [
      { text: "No" },
      {
        text: "Yes",
        onPress: () => {
          dispatch(ProductsActions.deleteProduct(id));
        }
      }
    ]);
  };

  const goToDetails = () => {
    navigation.navigate("ProductDetails", {
      productId: id,
      productTitle: title
    });
  };

  const goToEdit = () => {
    navigation.navigate("EditProduct", {
      productData: { id, title, imageUrl, description }
    });
  };

  return (
    <Container color={Colors.grey} borderColor={Colors.grey}>
      <View>
        <ProductImage source={{ uri: imageUrl }} />
        {!editable ? (
          <FloatingButton
            size={40}
            color={Colors.accent}
            icon="add-shopping-cart"
            iconSize={20}
            iconColor={Colors.light}
            onPress={addToCart}
          />
        ) : (
          <FloatingButton
            size={40}
            color={Colors.error}
            icon="cancel"
            iconSize={20}
            iconColor={Colors.light}
            onPress={removeProduct}
          />
        )}
      </View>
      <TouchableNativeFeedback onPress={editable ? goToEdit : goToDetails}>
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
