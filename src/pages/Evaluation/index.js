import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Bar } from "../../assets/dados/Bar";
import { Flat, Container, Button, BarImage, TitleBar } from "./style";
import Background from "../../components/Background/index";
import HeartOutline from "./Button";
function Evaluation() {
  return (
    <Background>
      <Container>
        <Flat
          data={Bar}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <Button>
                <BarImage source={{ uri: item.url }} />
                <TitleBar>{item.title}</TitleBar>
                <HeartOutline />
              </Button>
            );
          }}
        />
      </Container>
    </Background>
  );
}

Evaluation.navigationOptions = {
  title: "Favoritos",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="heart-outline" size={30} color={tintColor} />
  ),
};
export default Evaluation;
