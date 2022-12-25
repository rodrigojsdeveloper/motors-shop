import { useState } from "react";
import { Footer } from "../../components/Footer";
import { FormSignUp } from "../../components/FormSignUp";
import { Header } from "../../components/Header";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalSucessUser } from "../../components/ModalSucessUser";
import { Container } from "./style";

const SignUp = () => {

  const [ openModalSuccess, setOpenModalSuccess ] = useState<boolean>(false)

  return (
    <>
      {
        openModalSuccess &&
        <ModalBackground>
          <ModalSucessUser setOpenModalSuccess={ setOpenModalSuccess } />
        </ModalBackground>
      }
      <Container>
        <Header />

        <div>
          <FormSignUp setOpenModalSuccess={ setOpenModalSuccess } />
        </div>

        <Footer />
      </Container>
    </>
  );
};

export { SignUp };
