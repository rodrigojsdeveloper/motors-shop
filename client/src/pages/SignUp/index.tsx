import { ModalBackground } from "../../components/ModalBackground";
import { ModalSucessUser } from "../../components/ModalSucessUser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormSignUp } from "../../components/FormSignUp";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "./style";

const SignUp = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);

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
