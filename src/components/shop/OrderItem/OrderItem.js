import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Header, InfoText, Divider } from "./styles";

import CartItem from "../CartItem/CartItem";
import RoundedButton from "../../general/RoundedButton/RoundedButton";
import Colors from "../../../constants/Colors";

const OrderItem = ({ items, total, date }) => {
  const [isShowingItems, setIsShowingItems] = useState(false);

  const toggleShowingItems = () => {
    setIsShowingItems(!isShowingItems);
  };

  const renderList = ({ item }) => <CartItem {...item} editable={false} />;

  const renderHeader = () => (
    <Header color={Colors.info}>
      <InfoText textColor={Colors.light}>
        The total amount for this order is:
      </InfoText>
      <InfoText textColor={Colors.light} bold>{`$${total.toFixed(
        2
      )}`}</InfoText>
      <InfoText textColor={Colors.light}>Order Made in:</InfoText>
      <InfoText textColor={Colors.light} bold>
        {date}
      </InfoText>
      <InfoText textColor={Colors.light}>
        Details about the order
        <RoundedButton
          size={48}
          color={Colors.light}
          icon={arrow - down}
          iconSize={24}
          iconColor={Colors.info}
          onPress={toggleShowingItems}
        />
      </InfoText>
    </Header>
  );

  return (
    <View>
      <Header color={Colors.info}>
        <InfoText textColor={Colors.light}>
          The total amount for this order is:
        </InfoText>
        <InfoText textColor={Colors.light} bold>{`$${total.toFixed(
          2
        )}`}</InfoText>
        <InfoText textColor={Colors.light}>
          Order Made in:
          <InfoText textColor={Colors.light} bold>
            {date}
          </InfoText>
        </InfoText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <InfoText textColor={Colors.light}>Details about the order</InfoText>
          <RoundedButton
            size={40}
            color={Colors.light}
            icon={isShowingItems ? "arrow-drop-up" : "arrow-drop-down"}
            iconSize={24}
            iconColor={Colors.info}
            onPress={toggleShowingItems}
          />
        </View>
      </Header>
      {isShowingItems && (
        <FlatList
          data={items}
          keyExtractor={item => item.itemId}
          // ListHeaderComponent={renderHeader}
          renderItem={renderList}
          ItemSeparatorComponent={() => <Divider color={Colors.grey} />}
        />
      )}
    </View>
  );
};

export default OrderItem;
