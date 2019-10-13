import React from "react";
import { useScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppContainer from "./src/routes";
import ProductReducer from "./src/store/reducers/products";

useScreens();

const rootRed = combineReducers({ products: ProductReducer });

const store = createStore(rootRed);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
