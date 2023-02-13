import { AdvertiserListMotorcycles } from "../../components/AdvertiserListMotorcycles";
import { AdvertiserListAuctions } from "../../components/AdvertiserListAuctions";
import { IAuctionProps, IProductProps, IUserProps } from "../../interfaces";
import { AdvertiserListCars } from "../../components/AdvertiserListCars";
import { ModalBackground } from "../../components/ModalBackground";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const PageAdvertiser = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [loaded, setLoaded] = useState<boolean>(false);

  const getUser = () => {
    setLoaded(true);

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
      .catch((error) => console.error(error))
      .finally(() => setLoaded(false));
  };

  token && useEffect(() => getUser(), []);

  const listAuctionsFunc = (auction: IAuctionProps) =>
    setAuctions([auction, ...auctions]);

  const listCarsFunc = (car: IProductProps) => setCars([car, ...cars]);

  const listMotorcyclesFunc = (motorcycle: IProductProps) =>
    setMotorcycles([motorcycle, ...motorcycles]);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <HelmetProvider>
      <Helmet title="Meus Anúncios - Motors Shop" />
      {loaded && (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      )}
      <Container>
        <Header />

        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ShowAdvertiser
              listCarsFunc={listCarsFunc}
              listMotorcyclesFunc={listMotorcyclesFunc}
              listAuctionsFunc={listAuctionsFunc}
              user={user}
            />
            <AdvertiserListAuctions auctions={auctions} />
            <AdvertiserListCars products={cars} />
            <AdvertiserListMotorcycles products={motorcycles} />
          </div>
        </div>
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { PageAdvertiser };
