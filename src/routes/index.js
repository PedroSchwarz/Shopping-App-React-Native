import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Products from "../screens/shop/Products";
import ProductDetails from "../screens/shop/ProductDetail/ProductDetails";
import Cart from "../screens/shop/Cart/Cart";
import Orders from "../screens/shop/Orders/Orders";
import UserProducts from "../screens/user/UserProducts";
import NewProduct from "../screens/user/NewProduct/NewProduct";
import EditProduct from "../screens/user/EditProduct/EditProduct";

import Colors from "../constants/Colors";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: Colors.light
};

const productsStackNavigator = createStackNavigator(
  {
    Products: { screen: Products },
    ProductDetails: { screen: ProductDetails },
    Cart: { screen: Cart }
  },
  {
    defaultNavigationOptions,
    navigationOptions: {
      drawerIcon: drawerInfo => (
        <MaterialIcons
          name="shopping-cart"
          size={25}
          color={drawerInfo.tintColor}
        />
      )
    }
  }
);

const ordersStackNavigator = createStackNavigator(
  { Orders: { screen: Orders } },
  {
    defaultNavigationOptions,
    navigationOptions: {
      drawerIcon: drawerInfo => (
        <MaterialIcons name="list" size={25} color={drawerInfo.tintColor} />
      )
    }
  }
);

const userProductsStackNavigator = createStackNavigator(
  {
    UserProducts: { screen: UserProducts },
    NewProduct: { screen: NewProduct },
    EditProduct: { screen: EditProduct }
  },
  {
    defaultNavigationOptions,
    navigationOptions: {
      drawerIcon: drawerInfo => (
        <MaterialIcons name="create" size={25} color={drawerInfo.tintColor} />
      )
    }
  }
);

const shopDrawerNavigatior = createDrawerNavigator(
  {
    Products: productsStackNavigator,
    Orders: ordersStackNavigator,
    Admin: userProductsStackNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent
    },
    drawerType: "back"
  }
);

const AppContainer = createAppContainer(shopDrawerNavigatior);

export default AppContainer;
