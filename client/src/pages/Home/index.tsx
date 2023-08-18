import { ListMotorcycles } from "../../components/ListMotorcycles";
import { ModalBackground } from "../../components/ModalBackground";
import { IAuctionProps, IProductProps } from "../../interfaces";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ListCars } from "../../components/ListCars";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Loaded } from "../../components/Loaded";
import { api } from "../../services/api";

const Home = () => {
  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadProducts = async () => {
    try {
      const { data } = await api.get("/products");
      const products = data.filter(
        (product: IProductProps) =>
          product.ad_type === "sale" && product.is_published === true
      );

      setCars(
        products.filter(
          (product: IProductProps) => product.vehicle_type === "car"
        )
      );

      setMotorcycles(
        products.filter(
          (product: IProductProps) => product.vehicle_type === "motorcycle"
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadAuctions = async () => {
    try {
      const { data } = await api.get("/auctions");
      const auctions = data.filter(
        (auction: IAuctionProps) => auction.product?.is_published === true
      );

      setAuctions(auctions);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
      <ListCars products={cars} />
      <ListMotorcycles products={motorcycles} />
      <Footer />
    </React.Fragment>
  );
};

export { Home };
