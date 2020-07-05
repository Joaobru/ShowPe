import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Background from "../../components/Background";
import { Container, Content } from "./styles";
import Promos from "./Promos";
import Recentes from "./Recentes";
import Pontos from "./Pontos";
import { Data } from "../../assets/dados/Data";

const data = [1, 2];

function Dashboard() {
  return (
    <Background>
      <Container>
        <Promos data={Data} />
        <Content
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => {
            switch (item) {
              case 1:
                return <Recentes />;
              case 2:
                return <Pontos />;
              default:
                return null;
            }
          }}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  title: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={25} color={tintColor} />
  ),
};

export default Dashboard;
