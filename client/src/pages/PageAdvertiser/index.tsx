import { AdvertiserMotorcyclesList } from "../../components/AdvertiserMotorcyclesList";
import { AdvertiserAuctionsList } from "../../components/AdvertiserAuctionsList";
import { IAuctionProps, IProductProps, IUserProps } from "../../interfaces";
import { AdvertiserCarsList } from "../../components/AdvertiserCarsList";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

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
              (product: IProductProps) => product.vehicle_type == "motorcycle"
            )
          );

          setAuctions(res.data.auctions);
        })
        .catch((error) => console.error(error));
    }, []);

  const listCarsFunc = (car: IProductProps) => setCars([car, ...cars]);

  const listMotorcyclesFunc = (motorcycle: IProductProps) =>
    setMotorcycles([motorcycle, ...motorcycles]);

  return (
    <HelmetProvider>
      <Helmet title="Meus Anúncios - Motors shop" />
      <Container>
        <Header />

        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ShowAdvertiser
              listCarsFunc={listCarsFunc}
              listMotorcyclesFunc={listMotorcyclesFunc}
              user={user}
            />
            <AdvertiserAuctionsList auctions={auctions} />
            <AdvertiserCarsList 
            products={cars}
            listCarsFunc={ listCarsFunc }
            listMotorcyclesFunc={ listMotorcyclesFunc }
            />
            <AdvertiserMotorcyclesList
            products={motorcycles}
            listCarsFunc={ listCarsFunc }
            listMotorcyclesFunc={ listMotorcyclesFunc }
            />
          </div>
        </div>
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { PageAdvertiser };
