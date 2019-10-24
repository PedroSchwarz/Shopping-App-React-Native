import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Center, WarningMessage, EmptyList } from "./styles";

import ProductItem from "../../../components/shop/ProductItem/ProductItem";
import FloatingButton from "../../../components/general/FloatingButton/FloatingButton";
import CustomHeaderButton from "../../../components/general/HeaderButton";

import useToggleState from "../../../hooks/useToggleState";

import * as ProductsActions from "../../../store/actions/products";

import Colors from "../../../constants/Colors";

const Products = ({ navigation }) => {
  const [isLoading, toggleIsLoading] = useToggleState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const fetchProducts = useCallback(async () => {
    setError(null);
    toggleIsLoading();
    try {
      await dispatch(ProductsActions.setProducts());
    } catch (error) {
      setError(error.message);
    }
    toggleIsLoading();
  }, [dispatch]);

  useEffect(() => {
    const fecthSub = navigation.addListener("willFocus", fetchProducts);
    return () => {
      fecthSub.remove();
    };
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [dispatch, fetchProducts]);

  const availableProducts = useSelector(
    state => state.products.availableProducts
  );

  const onEmptyList = () => (
    <EmptyList>
      <WarningMessage textColor={Colors.info}>
        No products added yet!
      </WarningMessage>
    </EmptyList>
  );

  const renderList = ({ item }) => (
    <ProductItem {...item} navigation={navigation} editable={false} />
  );

  if (isLoading) {
    return (
      <Center>
        <ActivityIndicator size="large" color={Colors.accent} />
      </Center>
    );
  }

  if (!isLoading && error) {
    return (
      <Center>
        <WarningMessage textColor={Colors.error}>{error}</WarningMessage>
        <FloatingButton
          size={24}
          color={Colors.success}
          icon="refresh"
          iconSize={12}
          iconColor={Colors.light}
          onPress={fetchProducts}
        />
      </Center>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={availableProducts}
        keyExtractor={product => product.id}
        renderItem={renderList}
        ListEmptyComponent={onEmptyList}
        onRefresh={fetchProducts}
        refreshing={isLoading}
      />
    </View>
  );
};

Products.navigationOptions = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate("Cart");
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return {
    title: "Products Screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="menu" onPress={toggleDrawer} />
      </HeaderButtons>
    ),
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
