import React from "react";
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

function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <ImageS source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome"
          />
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

          <SubmitButton
            color="#ba0c2f"
            onPress={() => navigation.navigate("Dashboard")}
          >
            Cadastrar
          </SubmitButton>
          <SignLink onPress={() => navigation.navigate("SignIn")}>
            <SignLinkText>Já possui uma conta? Clique aqui...</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

export default SignUp;
