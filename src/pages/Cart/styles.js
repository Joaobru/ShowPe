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
    marginBottom: 40,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
  },
})``;

export const ContentBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  margin-left:15px;
  padding: 20px;
  background: #ddd;
  border-radius: 4px;
  height:100px;
`;
export const ContentPag = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 20px;
  background: #ba0c2f;
  border-radius: 4px;
`;

export const BarImage = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
`;

export const Button = styled(BaseButton)`
  border: 0;
`;
export const TitleProd = styled.Text`
  font-size:16pt;
  margin-left:10px;
  color:white;
`;
export const Title = styled.Text`
  margin-left: 15px;
  font-size: 14pt;
`;
export const TitlePag = styled.Text`
  margin-left: 35%;
  font-size:18pt;
  color:white;
`;
export const Content = styled.ScrollView`
  flex:1;
`;