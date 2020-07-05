import styled from "styled-components/native";
import Input from "../../components/Input";
import { FlatList } from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import Box from "../../components/Box";

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

export const ContentBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 20px;
  background: #ddd;
  border-radius: 4px;
`;

export const BarImage = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
`;

export const Title = styled.Text`
  margin-left: 15px;
`;

export const Button = styled(BaseButton)`
  border: 0;
`;