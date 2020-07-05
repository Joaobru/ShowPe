import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import Box from "../../../components/Box";

import { Container, Text, Title } from "./styles";

function Recentes() {
  return (
    <Box size={200}>
      <Title>Recentes:</Title>
      <Container>
        <Text>
          Você ainda não frequentou nenhum bar...
          <Icon name="sad-cry" size={15} color="black" />
        </Text>
      </Container>
    </Box>
  );
}

export default Recentes;
