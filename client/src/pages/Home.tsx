import { ModalBackground } from "../components/ModalBackground";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Loaded } from "../components/Loaded";
import { List } from "../components/List";
import React, { useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Motors Shop" />
      </HelmetProvider>
      {isLoading ? (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      ) : null}
      <Header />
      <Banner />
      <List />
      <Footer />
    </React.Fragment>
  );
};

export { Home };
