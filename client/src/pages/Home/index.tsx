import { ListMotorcycles } from "../../components/ListMotorcycles";
import { ModalBackground } from "../../components/ModalBackground";
import { ProductContext } from "../../contexts/ProductContext";
import { AuctionContext } from "../../contexts/AuctionContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ListAuction } from "../../components/ListAuctions";
import { ListCars } from "../../components/ListCars";
import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Loaded } from "../../components/Loaded";

const Home = () => {
  const { loadProducts, isLoadingProducts } = useContext(ProductContext);
  const { loadAuctions, isLoadingAuctions } = useContext(AuctionContext);

  useEffect(() => {
    loadProducts();
    loadAuctions();
  }, []);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Motors Shop" />
      </HelmetProvider>
      {isLoadingAuctions && isLoadingProducts ? (
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
