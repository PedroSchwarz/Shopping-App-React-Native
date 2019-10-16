import React from "react";
import { View, Text, FlatList } from "react-native";
import { Divider } from "./styles";

import CartItem from "../CartItem/CartItem";
import Colors from "../../../constants/Colors";

const OrderItem = ({ items, total, date }) => {
  const renderList = ({ item }) => <CartItem {...item} editable={false} />;

  const renderHeader = () => (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: Colors.success,
        paddingVertical: 16,
        paddingHorizontal: 16
      }}
    >
      <Text
        style={{
          color: Colors.light,
          fontSize: 18,
          fontFamily: "raleway-regular"
        }}
      >{`The total amount for this order is: $${total.toFixed(2)}`}</Text>
      <Text
        style={{
          color: Colors.light,
          fontSize: 18,
          fontFamily: "raleway-regular"
        }}
      >{`Order Made in: ${date.toTimeString()}`}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.itemId}
        ListHeaderComponent={renderHeader}
        renderItem={renderList}
        ItemSeparatorComponent={() => <Divider color={Colors.grey} />}
      />
    </View>
  );
};

export default OrderItem;
