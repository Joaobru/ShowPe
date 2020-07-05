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

export const Button = styled(BaseButton)`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  margin-left: 10px;
  margin-right: 10px;
  padding: 30px;
  background: #ddd;
  border-radius: 4px;
  height: 100px;
  width: 350px;
`;
export const ContentPag = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0 0;
  padding: 20px;
  background: #ba0c2f;
`;

export const BarImage = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
`;

export const TitleProd = styled.Text`
  font-size: 18px;
  margin-left: 15px;
  color: white;
  font-weight: bold;
`;
export const Title = styled.Text`
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
`;
export const TitlePag = styled.Text`
  font-size: 18px;
  color: white;
`;
export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 10px;
`;

export const TitleValor = styled.Text`
  position: absolute;
  right: 15px;
  font-weight: bold;
  top: 15px;
  font-size: 15px;
`;

export const TitlePrincipal = styled.Text`
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const TitleSecundario = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  border-top-width: 2px;
  border-top-color: rgba(0, 0, 0, 0.4);
  padding-top: 15px;
`;

export const Info = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const Icone = styled.View`
  position: absolute;
  right: 15px;
  flex-direction: row;
`;

export const Pagamento = styled.View`
  background: #ededed;
  height: 200px;
`;

export const CartoesCadastrados = styled.View`
  flex: 1;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;
export const NumeracaoCard = styled.Text`
  position: absolute;
  top: 35px;
  left: 15px;
  opacity: 0.6;
`;
export const IconeF = styled.View`
  margin-top: 10px;
`;
export const TextTrocar = styled.Text`
  font-weight: bold;
  color: #ba0c2f;
  font-size: 16px;
  margin-top: 10px;
`;

export const NotaFiscal = styled.View`
  flex: 1;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;
export const TitleNF = styled.Text`
  font-weight: bold;
  position: absolute;
  margin-left: 5px;
  font-size: 18px;
  top: 0;
`;
export const Cpf = styled.Text`
  margin-top: 15px;
  opacity: 0.6;
  margin-left: 15px;
`;
