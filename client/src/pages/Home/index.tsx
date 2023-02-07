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

const Home = () => {
  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const getProducts = () => {
    api
      .get("/products")
      .then((res) => {
        const products = res.data.filter(
          (product: IProductProps) => product.ad_type == "sale"
        );

        const productsActives = products.filter(
          (product: IProductProps) => product.is_published == true
        );

        setCars(
          productsActives.filter(
            (product: IProductProps) => product.vehicle_type == "car"
          )
        );

        setMotorcycles(
          productsActives.filter(
            (product: IProductProps) => product.vehicle_type == "motorcycle"
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const getAuctions = () => {
    api
      .get("/auctions")
      .then((res) => {
        const auctionsActives = res.data.filter(
          (auction: IAuctionProps) => auction.product.is_published == true
        );

        setAuctions(auctionsActives);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getAuctions();
  }, []);

  return (
    <HelmetProvider>
      <Helmet title="Motors shop" />
      <>
        <Header />
        <Banner />
        <ListAuction auctions={auctions} />
        <ListCars products={cars} />
        <ListMotorcycles products={motorcycles} />
        <Footer />
      </>
    </HelmetProvider>
  );
};

export { Home };
