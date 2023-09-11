import { AdvertiserList } from "../../components/AdvertiserListCars";
import { ModalBackground } from "../../components/ModalBackground";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const PageAdvertiser = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
            <ShowAdvertiser />
            <AdvertiserList />
          </div>
        </div>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageAdvertiser };
