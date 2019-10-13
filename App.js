import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { useScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppContainer from "./src/routes";
import ProductReducer from "./src/store/reducers/products";

useScreens();

const rootRed = combineReducers({ products: ProductReducer });

const store = createStore(rootRed);

const fetchFonts = () => {
  return Font.loadAsync({
    "raleway-light": require("./assets/fonts/Raleway/Raleway-Light.ttf"),
    "raleway-regular": require("./assets/fonts/Raleway/Raleway-Regular.ttf"),
    "raleway-semi-bold": require("./assets/fonts/Raleway/Raleway-SemiBold.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway/Raleway-Bold.ttf")
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};

export default App;
