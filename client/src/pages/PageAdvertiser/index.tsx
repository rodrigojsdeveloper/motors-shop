import { AdvertiserListMotorcycles } from "../../components/AdvertiserListMotorcycles";
import { AdvertiserListAuctions } from "../../components/AdvertiserListAuctions";
import { AdvertiserListCars } from "../../components/AdvertiserListCars";
import { AdvertiserContext } from "../../contexts/AdvertiserContext";
import { ModalBackground } from "../../components/ModalBackground";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const PageAdvertiser = () => {
  const { getUserData, isLoading } = useContext(AdvertiserContext);

  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) getUserData();
  }, [token]);

  useEffect(() => {
    if (!token) return navigate("/");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Meus Anúncios - Motors Shop" />
      </HelmetProvider>
      {isLoading ? (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      ) : null}
      <Container>
        <Header />

        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ShowAdvertiser />
            <AdvertiserListAuctions />
            <AdvertiserListCars />
            <AdvertiserListMotorcycles />
          </div>
        </div>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageAdvertiser };
