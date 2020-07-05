import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

function Evaluation() {
  return <View />;
}

Evaluation.navigationOptions = {
  title: "",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="heart-outline" size={30} color={tintColor} />
  ),
};
export default Evaluation;
