import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Box from '../../components/Box';
import {Bar} from '../../assets/dados/Bar';
import { Flat,Container } from './style';

function Evaluation() {
  return(
    <Container>
    <Text>Favoritos:</Text>

    <Flat
    data={Bar}
    keyExtractor={(item) => String(item)}
    renderItem={({ item }) => {
      return(
        <Box>
          <Text>Hello</Text>
        </Box>
      );
    }}/>
    </Container>
  );
}

Evaluation.navigationOptions = {
  title: "Favoritos",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="heart-outline" size={25} color={tintColor} />
  ),
};
export default Evaluation;
