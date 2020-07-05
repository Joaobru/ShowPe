import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconC from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../../components/Background";
import {
  Container,
  Image,
  Voltar,
  Topo,
  Body,
  Content,
  Button,
  ImageContent,
  Title,
  AddIcons,
  Text,
  TitlePrincipal,
  NameBar,
  Footer,
  Pagar,
  TextFooter,
  Itens,
} from "./styles";
import { Bebidas, Porcoes } from "../../assets/dados/Cardapio";

function Bar({ navigation }) {
  return (
    <Background>
      <Container>
        <Topo>
          <Image
            source={{
              uri:
                "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/18/2019/06/bares-vila-madalena.jpg",
            }}
          />
          <Voltar
            onPress={() => {
              navigation.navigate("Location");
            }}
          >
            <Icon name="chevron-left" size={35} color="#fff" />
          </Voltar>
        </Topo>
        <Body>
          <NameBar>Bar do Beto</NameBar>
          <TitlePrincipal>Bebidas</TitlePrincipal>
          <Content
            data={Bebidas}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return (
                <Button>
                  <ImageContent source={{ uri: item.url }} />
                  <Title>{item.title}</Title>
                  <AddIcons>
                    <Icon name="remove" size={20} color="#ba0c2f" />
                    <Text>1</Text>
                    <Icon name="add" size={20} color="#ba0c2f" />
                  </AddIcons>
                </Button>
              );
            }}
          />
          <TitlePrincipal>Porções</TitlePrincipal>
          <Content
            data={Porcoes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return (
                <Button>
                  <ImageContent source={{ uri: item.url }} />
                  <Title>{item.title}</Title>
                  <AddIcons>
                    <Icon name="remove" size={20} color="#ba0c2f" />
                    <Text>1</Text>
                    <Icon name="add" size={20} color="#ba0c2f" />
                  </AddIcons>
                </Button>
              );
            }}
          />
        </Body>

        <Footer onPress={() => navigation.navigate('Cart')}>
          <Pagar>
            <IconC name="cart-outline" size={25} color={"#fff"} />
            <TextFooter>Ver Carrinho</TextFooter>
          </Pagar>
          <Itens>
            <TextFooter>3 Itens</TextFooter>
          </Itens>
        </Footer>
      </Container>
    </Background>
  );
}

export default Bar;
