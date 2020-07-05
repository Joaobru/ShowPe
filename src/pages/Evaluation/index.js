import React from "react";
import { Text, Image, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Bar} from '../../assets/dados/Bar';
import { Flat,Container, Button, BarImage, ContentBox, TitleBar, Icone, Title} from './style';
import Background from '../../components/Background/index';

function Evaluation() {
  return(
    <Background>
      <Container>
      <Flat
      data={Bar}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => {
        return(
          <Button>
            <ContentBox>
              <BarImage source={{ uri: item.url }}/>
              <TitleBar>{item.title}</TitleBar>
              <Icone>
                <Icon name="heart-outline" size={30}/>
              </Icone>
            </ContentBox>
          </Button>
        );
      }}/>
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
