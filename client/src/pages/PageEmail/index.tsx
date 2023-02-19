import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormEmail } from "../../components/FormEmail";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Container } from "./style";

const PageEmail = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Recuperação de senha - Motors Shop" />
      </HelmetProvider>
      <Container>
        <Header />

        <main>
          <FormEmail />
        </main>

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageEmail };
