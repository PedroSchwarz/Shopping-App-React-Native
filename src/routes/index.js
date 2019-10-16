import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Products from "../screens/shop/Products";
import ProductDetails from "../screens/shop/ProductDetail/ProductDetails";
import Cart from "../screens/shop/Cart/Cart";

import Colors from "../constants/Colors";

const productsStackNavigator = createStackNavigator(
  {
    Products: { screen: Products },
    ProductDetails: { screen: ProductDetails },
    Cart: { screen: Cart }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: Colors.light
    }
  }
);

const AppContainer = createAppContainer(productsStackNavigator);

export default AppContainer;
