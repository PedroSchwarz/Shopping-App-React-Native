import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from "../actions/products";

import Product from "../../models/Product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.userId === "u1")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const { title, description, imageUrl, price } = action.productData;
      const newProduct = new Product(
        new Date().toString(),
        "u1",
        title,
        imageUrl,
        description,
        Number(price)
      );
      return {
        ...state,
        availableProducts: [...state.availableProducts, newProduct],
        userProducts: [...state.userProducts, newProduct]
      };
    case UPDATE_PRODUCT: {
      const { id, title, description, imageUrl } = action.productData;
      const updatedAvailProducts = state.availableProducts.map(product => {
        if (product.id === id)
          return new Product(
            id,
            product.userId,
            title,
            imageUrl,
            description,
            product.price
          );
        else return product;
      });
      const updatedUserProducts = state.userProducts.map(product => {
        if (product.id === id)
          return new Product(
            id,
            product.userId,
            title,
            imageUrl,
            description,
            product.price
          );
        else return product;
      });
      return {
        ...state,
        availableProducts: updatedAvailProducts,
        userProducts: updatedUserProducts
      };
    }
    case DELETE_PRODUCT:
      return {
        ...state,
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.productId
        ),
        userProducts: state.userProducts.filter(
          product => product.id !== action.productId
        )
      };
  }
  return state;
};
