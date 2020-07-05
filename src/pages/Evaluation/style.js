import styled from "styled-components/native";
import { FlatList } from "react-native";
import { BaseButton } from "react-native-gesture-handler";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  margin-top: 40px;
`;

export const Flat = styled(FlatList).attrs({
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
  border: 2px solid #fff;
`;

export const Button = styled(BaseButton)`
  border: 0;
  border: 0;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 20px;
  background: #ddd;
  border-radius: 4px;
`;
export const TitleBar = styled.Text`
  margin-left: 15px;
  font-weight: bold;
`;
export const Title = styled.Text`
  font-size: 15px;
`;
export const Icone = styled.Text`
  position: absolute;
  right: 15px;
  flex: 1;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
`;
