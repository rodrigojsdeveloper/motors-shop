import { FormNewPassword } from "../../components/FormNewPassword";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";
import React from "react";

const PageNewPassword = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Recuperação de senha | Motors Shop" />
      </HelmetProvider>
      <Container>
        <Header />

        <main>
          <FormNewPassword />
        </main>

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageNewPassword };
