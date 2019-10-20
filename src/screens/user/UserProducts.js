import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem/ProductItem";
import CustomHeaderButton from "../../components/general/HeaderButton";

const UserProducts = ({ navigation }) => {
  const userProducts = useSelector(state => state.products.userProducts);

  const onEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListWarning}>
        You have no products added yet!
      </Text>
    </View>
  );

  const renderList = ({ item }) => (
    <ProductItem {...item} navigation={navigation} editable={true} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userProducts}
        keyExtractor={product => product.id}
        renderItem={renderList}
        ListEmptyComponent={onEmptyList}
      />
    </View>
  );
};

UserProducts.navigationOptions = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const goToNewProduct = () => {
    navigation.navigate("NewProduct");
  };

  return {
    title: "Your Products",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="menu" onPress={toggleDrawer} />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Add" iconName="add" onPress={goToNewProduct} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyList: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16
  },
  emptyListWarning: {
    fontSize: 18,
    fontFamily: "raleway-regular"
  }
});

export default UserProducts;
