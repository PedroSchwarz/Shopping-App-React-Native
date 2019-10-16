import React from "react";
import { Container, Content, Title, TotalPrice } from "./styles";
import { useDispatch } from "react-redux";

import RoundedButton from "../../general/RoundedButton/RoundedButton";
import PriceTag from "../PriceTag/PriceTag";
import Colors from "../../../constants/Colors";

import * as CartActions from "../../../store/actions/cart";

const CartItem = ({ itemId, quantity, itemTitle, total }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(CartActions.removeFromCart(itemId));
  };

  return (
    <Container>
      <Content>
        <Title textColor={Colors.accent}>{`${itemTitle}/${quantity}`}</Title>
        <PriceTag color={Colors.success}>
          <TotalPrice textColor={Colors.light}>{`$${total.toFixed(
            2
          )}`}</TotalPrice>
        </PriceTag>
      </Content>
      <RoundedButton
        size={48}
        onPress={removeFromCart}
        color={Colors.light}
        icon="delete"
        iconSize={24}
        iconColor={Colors.error}
      />
    </Container>
  );
};

export default CartItem;
