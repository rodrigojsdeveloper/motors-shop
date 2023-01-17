import { AdvertiserMotorcyclesList } from "../../components/AdvertiserMotorcyclesList";
import { AdvertiserAuctionsList } from "../../components/AdvertiserAuctionsList";
import { IAuctionProps, IProductProps, IUserProps } from "../../interfaces";
import { AdvertiserCarsList } from "../../components/AdvertiserCarsList";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import Helmet from "react-helmet";

const PageAdvertiser = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [user, setUser] = useState<IUserProps>({
    name: "",
  } as IUserProps);

  token &&
    useEffect(() => {
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);

          const products = res.data.products.filter(
            (product: IProductProps) => product.ad_type == "sale"
          );

          setCars(
            products.filter(
              (product: IProductProps) => product.vehicle_type == "car"
            )
          );

          setMotorcycles(
            products.filter(
              (product: IProductProps) => product.vehicle_type == "motorbike"
            )
          );

          setAuctions(res.data.auctions);
        })
        .catch((error) => console.error(error));
    });

  return (
    <Container>
      <Helmet title="Meus Anúncios - Motors shop" />
      <Header />

      <div className="divBlue"></div>
      <div className="divWhite">
        <div>
          <ShowAdvertiser user={user} />
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
