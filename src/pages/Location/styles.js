import styled from "styled-components/native";
import Input from "../../components/Input";
import { FlatList } from "react-native";
import { BaseButton } from "react-native-gesture-handler";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 50px 10px;
`;

export const Search = styled(Input)`
  margin-bottom: 20px;
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

export const BarImage = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
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

export const BoxRecente = styled(BaseButton)`
  border: 0;
  padding: 15px;
  flex-direction: row;
`;

export const Recentes = styled.View`
  margin-bottom: 20px;
  border-color: #333;
  opacity: 0.4;
`;

export const TitlePrincipal = styled.Text`
  font-weight: bold;
  margin-left: 15px;
  font-size: 18px;
  margin-bottom: 5px;
`;
