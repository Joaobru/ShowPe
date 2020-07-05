import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../../components/Background";
import logo from "../../assets/img/beer.png";
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  ImageS,
  FormatButton,
} from "./styles";

function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <ImageS source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha"
          />

          <SubmitButton color="#ba0c2f" onPress={() => navigation.navigate("Dashboard")}>
            Acessar
          </SubmitButton>
          <SignLink onPress={() => navigation.navigate("SignUp")}>
            <SignLinkText>Crie sua conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

export default SignIn;
