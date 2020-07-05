import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

function Menu() {
  return <View />;
}

Menu.navigationOptions = {
  title: "",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="bookmark-outline" size={30} color={tintColor} />
  ),
};

export default Menu;
