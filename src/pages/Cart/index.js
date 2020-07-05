import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, Image, View } from "react-native";
import {Produtos} from '../../assets/dados/Produtos';
import { Flat,Container, Button, BarImage, ContentBox, TitleProd, Title, ContentPag,TitlePag} from './styles';
import Background from '../../components/Background';


function Cart({navigation}) {
  return(
    <Background>
      <Container>
          <Button>
            <ContentPag>
              <TitleProd>Total: R$16.50</TitleProd>
            </ContentPag>
          </Button>
      <Flat
      data={Produtos}
      keyExtractor={(item) => String(item.id)}
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
          <Button>
            <ContentPag>
              <TitleProd onPress = { () => navigation.navigate('Payments')}>Pagamento</TitleProd>
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
