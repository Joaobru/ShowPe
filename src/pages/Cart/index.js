import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Fontisto";
import Box from "../../components/Box";
import { Produtos } from "../../assets/dados/Produtos";
import {
  Flat,
  Container,
  Button,
  BarImage,
  TitleProd,
  TitleValor,
  Title,
  ContentPag,
  TitlePag,
  Content,
  TitlePrincipal,
  Icone,
  TitleSecundario,
  Info,
  Pagamento,
  CartoesCadastrados,
  NumeracaoCard,
  TextTrocar,
  IconeF,
  NotaFiscal,
  Cpf,
  TitleNF,
} from "./styles";

import ButtonInput from "../../components/Button";
import Background from "../../components/Background";

function Cart({ navigation }) {
  return (
    <Background>
      <Container>
        <Content>
          <TitlePrincipal>Pedidos entregues</TitlePrincipal>
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
              return (
                <Button>
                  <BarImage source={{ uri: item.url }} />
                  <Title>{item.title}</Title>
                  <TitleValor>{item.valor}</TitleValor>
                </Button>
              );
            }}
          />
          <TitleSecundario>Informações Sobre o Bar</TitleSecundario>
          <Box>
            <Info>Bar: Bar Do Beto</Info>
            <Info>Endereço: Rua Das Flores n ° 90</Info>
            <Info>Proprietário: João Paulo</Info>
            <Info>CPNJ: 00.000.000/0000-00</Info>
          </Box>

          <TitleSecundario>Pagamento</TitleSecundario>
          <Pagamento>
            <CartoesCadastrados>
              <Title>Cartão Mastro</Title>
              <NumeracaoCard>Cartão Mastro **** 9706</NumeracaoCard>
              <IconeF>
                <IconF name="mastercard" size={20} color="#000" />
              </IconeF>
              <TextTrocar>Trocar</TextTrocar>
            </CartoesCadastrados>
            <NotaFiscal>
              <TitleNF>CPF/CNPJ na nota</TitleNF>
              <Cpf>99.999.999-56</Cpf>
              <TextTrocar>Trocar</TextTrocar>
            </NotaFiscal>

            <ButtonInput>
              <Text>Fechar a Conta</Text>
            </ButtonInput>
          </Pagamento>
        </Content>
        <ContentPag>
          <TitleProd>Total: R$ 16.50</TitleProd>
          <Icone>
            <Icon name="cart-outline" size={25} color="#fff" />
            <TitlePag>(3)</TitlePag>
          </Icone>
        </ContentPag>
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
