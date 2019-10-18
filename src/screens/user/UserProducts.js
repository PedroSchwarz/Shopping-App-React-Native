import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem/ProductItem";
import CustomHeaderButton from "../../components/general/HeaderButton";

const UserProducts = ({ navigation }) => {
  const userProducts = useSelector(state => state.products.userProducts);

  const renderList = ({ item }) => (
    <ProductItem {...item} navigation={navigation} editable={true} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userProducts}
        renderItem={renderList}
        keyExtractor={product => product.id}
      />
    </View>
  );
};

UserProducts.navigationOptions = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return {
    title: "Your Products",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="menu" onPress={toggleDrawer} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default UserProducts;
