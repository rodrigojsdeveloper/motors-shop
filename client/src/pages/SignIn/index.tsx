import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormSignIn } from "../../components/FormSignIn";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Container } from "./style";

const SignIn = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Iniciar Sessão - Motors Shop" />
      </HelmetProvider>
      <Container>
        <Header />

        <main>
          <FormSignIn />
        </main>

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { SignIn };
