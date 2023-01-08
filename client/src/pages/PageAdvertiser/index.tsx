import { AdvertiserMotorcyclesList } from "../../components/AdvertiserMotorcyclesList";
import { AdvertiserAuctionsList } from "../../components/AdvertiserAuctionsList";
import { AdvertiserCarsList } from "../../components/AdvertiserCarsList";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { IAuctionProps, IProductProps } from "../../interfaces";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const PageAdvertiser = () => {
  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setCars(
          res.data.filter(
            (product: IProductProps) => product.vehicle_type == "car"
          )
        );

        setMotorcycles(
          res.data.filter(
            (product: IProductProps) => product.vehicle_type == "motorbike"
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
    <Container>
      <Header />

      <div className="divBlue"></div>
      <div className="divWhite">
        <div>
          <ShowAdvertiser />
          <AdvertiserAuctionsList auctions={auctions} />
          <AdvertiserCarsList products={cars} />
          <AdvertiserMotorcyclesList products={motorcycles} />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export { PageAdvertiser };
