import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ILayout } from "../../interfaces";
import { Container } from "./style";
import React from "react";

const Layout = ({ children, title }: ILayout) => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title={`${title} | Motors Shop`} />
      </HelmetProvider>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export { Layout };
