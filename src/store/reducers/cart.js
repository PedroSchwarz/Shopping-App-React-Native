import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/CartItem";

const initialState = {
  items: {},
  total: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title, price } = action.product;
      let newItem;
      if (state.items[id]) {
        const { quantity, sum } = state.items[id];
        newItem = new CartItem(quantity + 1, price, title, sum + price);
      } else {
        newItem = new CartItem(1, price, title, price);
      }
      return {
        ...state,
        items: { ...state.items, [id]: newItem },
        total: state.total + price
      };
  }
  return state;
};
