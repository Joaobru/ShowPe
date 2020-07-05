import React from "react";
import { Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Box from '../../components/Box';
import {Bar} from '../../assets/dados/Bar';
import { Flat,Container } from './style';
import Background from '../../components/Background/index';

function Evaluation() {
  return(
    <Background>
      <Container>
      <Text>Favoritos:</Text>

      <Flat
      data={Bar}
      keyExtractor={(item) => String(item)}
      renderItem={({ item }) => {
        return(
          <Box>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Image source={{ uri: item.url }}/>
          </Box>
        );
      }}/>
      </Container>
    </Background>
  );
}

Evaluation.navigationOptions = {
  title: "",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="heart-outline" size={30} color={tintColor} />
  ),
};
export default Evaluation;
