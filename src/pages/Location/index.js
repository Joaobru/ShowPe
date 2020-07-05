import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../../components/Background";
import {
  Container,
  Search,
  Content,
  ContentBox,
  BarImage,
  Title,
  Button,
} from "./styles";
import { Bar } from "../../assets/dados/Bar";

export default function Location() {
  return (
    <Background>
      <Container>
        <Search size={25} icon="search" color="#ba0c2f" />
        <Content
          data={Bar}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <Button>
                <ContentBox>
                  <BarImage source={{ uri: item.url }} />
                  <Title>{item.title}</Title>
                </ContentBox>
              </Button>
            );
          }}
        />
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
