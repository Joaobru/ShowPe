import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

function Dashboard() {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

Dashboard.navigationOptions = {
  title: "",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={20} color={tintColor} />
  ),
};

export default Dashboard;
