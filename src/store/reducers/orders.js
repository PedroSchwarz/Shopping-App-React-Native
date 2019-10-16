import { ADD_ORDER } from "../actions/orders";
import Order from "../../models/Order";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const {
        orderData: { cartItems, total }
      } = action;
      const newOrder = new Order(
        new Date().toString(),
        cartItems,
        total,
        new Date()
      );
      return { ...state, orders: [...state.orders, newOrder] };
  }
  return state;
};
