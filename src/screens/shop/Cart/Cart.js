import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Summary, Divider } from "./styles";
import CartItem from "../../../components/shop/CartItem/CartItem";
import RoundedButton from "../../../components/general/RoundedButton/RoundedButton";

import Colors from "../../../constants/Colors";

const Cart = () => {
  const cartTotal = useSelector(state => state.cart.total);
  const cartItems = useSelector(state => {
    const itemsList = [];
    for (const key in state.cart.items) {
      itemsList.push({ itemId: key, ...state.cart.items[key] });
    }
    return itemsList.sort((itemA, itemB) =>
      itemA.itemId > itemB.itemId ? 1 : -1
    );
  });

  const onEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListWarning}>
        No item added to your cart yet!
      </Text>
    </View>
  );

  const renderList = ({ item }) => <CartItem {...item} />;

  return (
    <View style={styles.container}>
      <Summary>
        <Text
          style={styles.totalText}
        >{`Total Cart Amount is: $${cartTotal.toFixed(2)}`}</Text>
        {cartItems.length > 0 && (
          <RoundedButton
            size={40}
            color={Colors.accent}
            icon="check"
            iconSize={20}
            iconColor={Colors.light}
          />
        )}
      </Summary>
      <Divider color={Colors.grey} />
      <FlatList
        data={cartItems}
        keyExtractor={cartItem => cartItem.itemId}
        renderItem={renderList}
        ItemSeparatorComponent={() => <Divider color={Colors.grey} />}
        ListEmptyComponent={onEmptyList}
      />
    </View>
  );
};

Cart.navigationOptions = {
  title: "Your Cart"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  totalText: {
    fontFamily: "raleway-regular"
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

export default Cart;
