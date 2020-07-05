import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// import { Container } from './styles';

function Location() {
  return <View />;
}

Location.navigationOptions = {
  title: '',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="location-on" size={30} color={tintColor} />
  ),
};

export default Location;
