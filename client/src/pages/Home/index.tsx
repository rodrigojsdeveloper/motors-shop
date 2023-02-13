import { ListMotorcycles } from "../../components/ListMotorcycles";
import { ModalBackground } from "../../components/ModalBackground";
import { IAuctionProps, IProductProps } from "../../interfaces";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ListAuction } from "../../components/ListAuctions";
import { ListCars } from "../../components/ListCars";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Loaded } from "../../components/Loaded";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Home = () => {
  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [loadedProducts, setLoadedProducts] = useState<boolean>(false);

  const [loadedAuctions, setLoadedAuctions] = useState<boolean>(false);

  const getProducts = () => {
    setLoadedProducts(true);

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
      .catch((error) => console.error(error))
      .finally(() => setLoadedProducts(false));
  };

  const getAuctions = () => {
    setLoadedAuctions(true);

    api
      .get("/auctions")
      .then((res) => {
        const auctionsActives = res.data.filter(
          (auction: IAuctionProps) => auction.product.is_published == true
        );

        setAuctions(auctionsActives);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadedAuctions(false));
  };

  useEffect(() => {
    getProducts();
    getAuctions();
  }, []);

  return (
    <HelmetProvider>
      <Helmet title="Motors Shop" />
      {loadedProducts && loadedAuctions && (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      )}
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
