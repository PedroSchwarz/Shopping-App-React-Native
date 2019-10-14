import React from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, ProductImage, Content, Title, Price } from "./styles";
import PriceTag from "../PriceTag/PriceTag";
import FloatingButton from "../FloatingButton/FloatingButton";
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
      <View>
        <ProductImage source={{ uri: imageUrl }} />
        <FloatingButton size={32} color={Colors.accent} onPress={() => {}}>
          <MaterialIcons name="add" size={26} color={Colors.light} />
        </FloatingButton>
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
