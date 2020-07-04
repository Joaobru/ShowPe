import { Platform } from "react-native";
import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";
import Button from "../../components/Button";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormatButton = styled(Button)`
  margin-top: 20px;
`;