import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";


import { RecentesInfo } from "../../../assets/dados/RecentesInfo";

import { Container, Text, Title, Button, Flat, Box } from "./styles";

function Recentes() {
  return (
    <Box size={200}>
      <Title>Recentes:</Title>
      <Container>
        <Flat
          data={RecentesInfo}
          keyExtractor={(item) => String(item.id)}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Button>
                <Text>{item.bar}</Text>
                <Text>{item.endereco}</Text>
                <Text>{item.total}</Text>
              </Button>
            );
          }}
        />
      </Container>
    </Box>
  );
}

export default Recentes;
