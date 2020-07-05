import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  margin-top: 40px;
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
