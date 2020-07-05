import React from "react";
import Box from "../../../components/Box";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, Title, Text } from "./styles";

function Pontos() {
  return (
    <Box size={200}>
      <Title>Seus Pontos:</Title>
      <Container>
        <Icon name="star" size={50} color="#ffcd3c" />
        <Text>9000</Text>
      </Container>
    </Box>
  );
}

export default Pontos;
