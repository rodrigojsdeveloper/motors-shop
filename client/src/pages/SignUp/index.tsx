import { ModalBackground } from "../../components/ModalBackground";
import { ModalSucessUser } from "../../components/ModalSucessUser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormSignUp } from "../../components/FormSignUp";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./style";
import { useState } from "react";

const SignUp = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);

  return (
    <HelmetProvider>
      <Helmet title="Cadastro - Motors shop" />
      {openModalSuccess && (
        <ModalBackground>
          <ModalSucessUser setOpenModalSuccess={setOpenModalSuccess} />
        </ModalBackground>
      )}
      <Container>
        <Header />

        <main>
          <FormSignUp setOpenModalSuccess={setOpenModalSuccess} />
        </main>

        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { SignUp };
