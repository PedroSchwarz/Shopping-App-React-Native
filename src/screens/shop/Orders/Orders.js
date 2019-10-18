import React from "react";
import { useSelector } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Divider } from "./styles";

import OrderItem from "../../../components/shop/OrderItem/OrderItem";
import CustomHeaderButton from "../../../components/general/HeaderButton";
import Colors from "../../../constants/Colors";

const Orders = () => {
  const orders = useSelector(state => state.orders.orders);

  const onEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListWarning}>No orders made yet!</Text>
    </View>
  );

  const renderList = ({ item }) => (
    <OrderItem {...item} date={item.convertedDate} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={order => order.id}
        renderItem={renderList}
        ItemSeparatorComponent={() => <Divider color={Colors.grey} />}
        ListEmptyComponent={onEmptyList}
      />
    </View>
  );
};

Orders.navigationOptions = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return {
    title: "Your Orders",
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

export default Orders;
