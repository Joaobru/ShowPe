import React from "react";
import Background from "../../components/Background";

import { Container, Form, FormatButton } from "./styles";

function Sing() {
  return (
    <Background>
      <Container>
        <Form>
          <FormatButton color="#a3f7bf">Crie sua conta</FormatButton>
          <FormatButton color="#4267b2">Continue com o Facebook</FormatButton>
          <FormatButton color="#fa1616">Continue com o Gmail</FormatButton>
          <FormatButton>Login</FormatButton>
        </Form>
      </Container>
    </Background>
  );
}

export default Sing;
