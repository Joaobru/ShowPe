import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../../components/Background";
import { Container } from "./styles";

function Payments() {
  return (
    <Background>
      <Container>
        <Text>Pay</Text>
      </Container>
    </Background>
  );
}

Payments.navigationOptions = {
  title: "",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="payment" size={30} color={tintColor} />
  ),
};

export default Payments;
