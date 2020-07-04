import React from "react";
import Background from "../../components/Background";

import { Container, Form, FormatButton } from "./styles";

function Sing({ navigation }) {
  return (
    <Background>
      <Container>
        <Form>
          <FormatButton
            color="#ba0c2f"
            onPress={() => navigation.navigate("SignUp")}
          >
            Crie sua conta
          </FormatButton>
          
          <FormatButton
            color="#ba0c2f"
            onPress={() => navigation.navigate("SignIn")}
          >
            Login
          </FormatButton>
        </Form>
      </Container>
    </Background>
  );
}

export default Sing;
