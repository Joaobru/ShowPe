import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../../components/Background";
import { Container, Search } from "./styles";

export default function Location() {
  return (
    <Background>
      <Container>
        <Search size={25} icon="search" color="#ba0c2f" />
      </Container>
    </Background>
  );
}

Location.navigationOptions = {
  title: "Busca",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="location-on" size={25} color={tintColor} />
  ),
};
