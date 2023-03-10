import { ListMotorcycles } from "../../components/ListMotorcycles";
import { ModalBackground } from "../../components/ModalBackground";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ListAuction } from "../../components/ListAuctions";
import { HomeContext } from "../../contexts/HomeContext";
import { ListCars } from "../../components/ListCars";
import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Loaded } from "../../components/Loaded";

const Home = () => {
  const { loadProducts, loadAuctions, isLoading } = useContext(HomeContext);

  useEffect(() => {
    loadProducts();
    loadAuctions();
  }, []);

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
      <ListAuction />
      <ListCars />
      <ListMotorcycles />
      <Footer />
    </React.Fragment>
  );
};

export { Home };
