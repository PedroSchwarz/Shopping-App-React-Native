import Product from "../../models/Product";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const setProducts = () => {
  return async dispatch => {
    try {
      const products = [];
      const response = await fetch(
        "https://shopping-app-react-nativ-5359c.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      const data = await response.json();
      for (const key in data) {
        const product = data[key];
        products.push(
          new Product(
            key,
            "u1",
            product.title,
            product.imageUrl,
            product.description,
            Number(product.price)
          )
        );
      }
      dispatch({ type: SET_PRODUCTS, products });
    } catch (error) {
      throw error;
    }
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async dispatch => {
    const response = await fetch(
      "https://shopping-app-react-nativ-5359c.firebaseio.com/products.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, imageUrl, price })
      }
    );

    const data = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: { id: data.name, title, description, imageUrl, price }
    });
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return async dispatch => {
    await fetch(
      `https://shopping-app-react-nativ-5359c.firebaseio.com/products/${id}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, imageUrl })
      }
    );

    dispatch({
      type: UPDATE_PRODUCT,
      productData: { id, title, description, imageUrl }
    });
  };
};

export const deleteProduct = productId => {
  return async dispatch => {
    await fetch(
      `https://shopping-app-react-nativ-5359c.firebaseio.com/products/${productId}.json`,
      { method: "DELETE" }
    );
    dispatch({ type: DELETE_PRODUCT, productId });
  };
};
