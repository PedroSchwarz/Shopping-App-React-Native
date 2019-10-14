import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem/ProductItem";
import CustomHeaderButton from "../../components/general/HeaderButton";

const Products = ({ navigation }) => {
  const availableProducts = useSelector(
    state => state.products.availableProducts
  );

  const renderList = ({ item }) => (
    <ProductItem {...item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={availableProducts}
        renderItem={renderList}
        keyExtractor={product => product.id}
      />
    </View>
  );
};

Products.navigationOptions = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate("Cart");
  };
  return {
    title: "Products Screen",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Cart" iconName="shopping-cart" onPress={goToCart} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Products;
