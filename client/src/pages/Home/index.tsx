import { ListMotorcycles } from "../../components/ListMotorcycles";
import { IAuctionProps, IProductProps } from "../../interfaces";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ListAuction } from "../../components/ListAuctions";
import { ListCars } from "../../components/ListCars";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const Home = () => {
  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        const products = res.data.filter(
          (product: IProductProps) => product.ad_type == "sale"
        );

        setCars(
          products.filter(
            (product: IProductProps) => product.vehicle_type == "car"
          )
        );

        setMotorcycles(
          products.filter(
            (product: IProductProps) => product.vehicle_type == "motorcycle"
          )
        );
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    api
      .get("/auctions")
      .then((res) => setAuctions(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <HelmetProvider>
      <Helmet title="Motors shop" />
      <Container>
        <Header />
        <Banner />
        <ListAuction auctions={auctions} />
        <ListCars products={cars} />
        <ListMotorcycles products={motorcycles} />
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { Home };
