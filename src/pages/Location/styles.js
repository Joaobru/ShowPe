import styled from 'styled-components/native';
import Input from "../../components/Input";
import { FlatList } from "react-native";


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
