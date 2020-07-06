import styled from "styled-components/native";
import { FlatList } from "react-native";
import { BaseButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  margin: 0;
`;
export const Flat = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    marginBottom: 40,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
  },
})``;
export const Text = styled.Text`
  font-weight: bold;
  font-size:16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
export const Button = styled(BaseButton)`
  align-items: center;
  border-radius: 4px;
  width: 300px;
  margin: 5px 15px;
  padding:20px;
  background:#ccc;
`;
export const Box = styled.View`
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: #ededed;
`;