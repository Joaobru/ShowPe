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
  Recentes,
  BoxRecente,
  TitlePrincipal,
} from "./styles";
import { Bar } from "../../assets/dados/Bar";
import HeartOutline from "../Evaluation/Button";

export default function Location({ navigation }) {
  return (
    <Background>
      <Container>
        <Search size={25} icon="search" color="#ba0c2f" />
        <TitlePrincipal>Buscas Recentes:</TitlePrincipal>
        <Recentes>
          <BoxRecente>
            <Icon name="history" size={25} color="#000" />
            <Title>Bar do Bruno</Title>
          </BoxRecente>
          <BoxRecente>
            <Icon name="history" size={25} color="#000" />
            <Title>Bar do João</Title>
          </BoxRecente>
          <BoxRecente>
            <Icon name="history" size={25} color="#000" />
            <Title>Rock Bar</Title>
          </BoxRecente>
        </Recentes>
        <TitlePrincipal>Bares próximos a você:</TitlePrincipal>
        <Content
          data={Bar}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <Button onPress={() => navigation.navigate("Bar", item)}>
                <BarImage source={{ uri: item.url }} />
                <Title>{item.title}</Title>
                <HeartOutline />
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
