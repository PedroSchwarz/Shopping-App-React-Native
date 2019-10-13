import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem/ProductItem";

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

Products.navigationOptions = {
  title: "Products Screen"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Products;
