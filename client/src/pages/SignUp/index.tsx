import { ModalSucessRegister } from "../../components/ModalSucessRegister";
import { ModalBackground } from "../../components/ModalBackground";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormSignUp } from "../../components/FormSignUp";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const SignUp = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (token) return navigate("/");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Cadastro | Motors Shop" />
      </HelmetProvider>
      {openModalSuccess ? (
        <ModalBackground>
          <ModalSucessRegister setOpenModalSuccess={setOpenModalSuccess} />
        </ModalBackground>
      ) : null}
      <Container>
        <Header />

        <main>
          <FormSignUp setOpenModalSuccess={setOpenModalSuccess} />
        </main>

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { SignUp };
