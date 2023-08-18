import { AdvertiserListMotorcycles } from "../../components/AdvertiserListMotorcycles";
import { AdvertiserListCars } from "../../components/AdvertiserListCars";
import { ModalBackground } from "../../components/ModalBackground";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { IProductProps, IUserProps } from "../../interfaces";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./style";

const PageAdvertiser = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUserData = () => {
    setIsLoading(true);

    api
      .get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);

        setCars(
          res.data.products.filter(
            (product: IProductProps) => product.vehicle_type === "car"
          )
        );

        setMotorcycles(
          res.data.products.filter(
            (product: IProductProps) => product.vehicle_type === "motorcycle"
          )
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (token) getUserData();
  }, [token]);

  const handleListCars = (car: IProductProps) => setCars([car, ...cars]);

  const handleListMotorcycles = (motorcycle: IProductProps) =>
    setMotorcycles([motorcycle, ...motorcycles]);

  useEffect(() => {
    if (!token) return navigate("/");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Meus Anúncios - Motors Shop" />
        {isLoading ? (
          <ModalBackground>
            <Loaded />
          </ModalBackground>
        ) : null}
      </HelmetProvider>
      <Container>
        <Header />

        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ShowAdvertiser
              listCarsFunc={handleListCars}
              listMotorcyclesFunc={handleListMotorcycles}
              user={user}
            />
            <AdvertiserListCars products={cars} />
            <AdvertiserListMotorcycles products={motorcycles} />
          </div>
        </div>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageAdvertiser };
