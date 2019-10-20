import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";
import { DELETE_PRODUCT } from "../actions/products";
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
        const { quantity, total } = state.items[id];
        newItem = new CartItem(quantity + 1, price, title, total + price);
      } else {
        newItem = new CartItem(1, price, title, price);
      }
      return {
        ...state,
        items: { ...state.items, [id]: newItem },
        total: state.total + price
      };
    case REMOVE_FROM_CART:
      const { itemId } = action;
      const { quantity, itemPrice, itemTitle, total } = state.items[itemId];
      let updatedItems;
      if (quantity > 1) {
        const updatedItem = new CartItem(
          quantity - 1,
          itemPrice,
          itemTitle,
          total - itemPrice
        );
        updatedItems = { ...state.items, [itemId]: updatedItem };
      } else {
        updatedItems = { ...state.items };
        delete updatedItems[itemId];
      }
      return {
        ...state,
        items: updatedItems,
        total: state.total - itemPrice
      };
    case ADD_ORDER:
      return initialState;
    case DELETE_PRODUCT:
      const { productId } = action;
      if (!state.items[productId]) return state;
      const updatedCartItems = { ...state.items };
      const itemTotal = updatedCartItems[productId].total;
      delete updatedCartItems[productId];
      return {
        ...state,
        items: updatedCartItems,
        total: state.total - itemTotal
      };
  }
  return state;
};
