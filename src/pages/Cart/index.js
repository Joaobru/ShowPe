import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

function Cart() {
  return <View />;
}

Cart.navigationOptions = {
  title: "",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="cart-outline" size={30} color={tintColor} />
  ),
};

export default Cart;
