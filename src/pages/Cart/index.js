import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, Image, View } from "react-native";
import Box from '../../components/Box'
import {Produtos} from '../../assets/dados/Produtos';
import { Flat,Container, Button, BarImage, ContentBox, TitleProd, Title, ContentPag,TitlePag,Content} from './styles';
import Background from '../../components/Background';


function Cart({navigation}) {
  return(
    <Background>
      <Container>
        <Content>
      <Flat
      data={Produtos}
      keyExtractor={(item) => String(item.id)}
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return(
          <Button>
            <ContentBox>
              <BarImage source={{ uri: item.url }}/>
              <Title>{item.title}</Title>
              <Title>{item.valor}</Title>
            </ContentBox>
          </Button>
        );
      }}/>
          <Box>
            <Title>Bar: Bar Do Beto</Title>
            <Title>Endereço: Rua Das Flores n ° 90</Title>
            <Title>Nome: João Paulo</Title>
            <Title>CPF: 999.999.999-99</Title>
          </Box>
          </Content>
          <Button>
            <ContentPag>
              <TitleProd>Total: R$16.50</TitleProd>
              <TitlePag><Icon name="cart-outline" size={20} />(3)</TitlePag>
            </ContentPag>
          </Button>
      </Container>
    </Background>
  );
}

Cart.navigationOptions = {
  title: "Carrinho",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="cart-outline" size={25} color={tintColor} />
  ),
};

export default Cart;
