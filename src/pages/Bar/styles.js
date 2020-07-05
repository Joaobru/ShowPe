import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  margin: 40px 0 0;
`;

export const Image = styled.Image`
  height: 200px;
`;

export const Voltar = styled(BaseButton)`
  position: absolute;
  top: 20px;
`;

export const Topo = styled.View`
  align-self: stretch;
  margin: 10px 0;
`;

export const Body = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px;
  flex: 1;
`;

export const Content = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
  },
})``;

export const ImageContent = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
`;

export const Title = styled.Text`
  margin-left: 15px;
  font-weight: bold;
`;

export const Button = styled(BaseButton)`
  border: 0;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 20px;
  background: #ddd;
  border-radius: 4px;
`;

export const AddIcons = styled.View`
  flex-direction: row;
  position: absolute;
  right: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  margin: 0 10px;
`;

export const TitlePrincipal = styled.Text`
  font-weight: bold;
  margin-left: 15px;
  font-size: 18px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const NameBar = styled.Text`
  font-weight: bold;
  align-self: stretch;
  text-align: center;
  font-size: 25px;
  margin-bottom: 5px;
  border-bottom-width: 2px;
  padding-bottom: 15px;
`;

export const Footer = styled(BaseButton)`
  bottom: 0;
  background: #ba0c2f;
  align-self: stretch;
  color: #fff;
  flex-direction: row;
  align-items: center;
  height: 45px;
`;

export const Pagar = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 15px;
`;

export const TextFooter = styled.Text`
  color: #fff;
  right: 0;
  font-size: 20px;
  margin-left: 10px;
`;

export const Itens = styled.View`
  position: absolute;
  right: 15px;
`;
