import { ModalBackground } from "../../components/ModalBackground";
import { AdvertiserList } from "../../components/Lists/AdvertiserList";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { ProductContext } from "../../contexts/product.context";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const PageAdvertiser = () => {
  const { isLoadingAdvertiser } = useContext(ProductContext);

  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Meus Anúncios | Motors Shop" />
        {isLoadingAdvertiser ? (
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
