import { ModalBackground } from "../../components/ModalBackground";
import { AuctionDetails } from "../../components/AuctionDetails";
import { AuctionContext } from "../../contexts/AuctionContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ModalPhoto } from "../../components/ModalPhoto";
import { Container } from "../PageProductDetails/style";
import { CreateBid } from "../../components/CreateBid";
import { ListBids } from "../../components/ListBids";
import React, { useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useParams } from "react-router-dom";

const PageAuctionDetails = () => {
  const {
    fetchAuction,
    fetchBids,
    fetchUser,
    auctionRequest,
    loadingAuction,
    openModalPhoto,
    user,
    setOpenModalPhoto,
  } = useContext(AuctionContext);

  const { auctionId } = useParams();

  const token = sessionStorage.getItem("Motors shop: token");

  useEffect(() => {
    fetchAuction();
    fetchBids();
  }, [auctionId, token]);

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet
          title={`${auctionRequest?.product?.title ?? ""} | Motors Shop`}
        />
      </HelmetProvider>
      {loadingAuction ? (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      ) : null}
      {openModalPhoto ? (
        <ModalBackground>
          <ModalPhoto
            setOpenModalPhoto={setOpenModalPhoto}
            cover_image={auctionRequest.product.cover_image}
            title={auctionRequest.product.title}
          />
        </ModalBackground>
      ) : null}
      <Container>
        <Header />

        <div>
          <div className="divBlue"></div>
          <div className="divWhite">
            <div>
              <AuctionDetails />
              <ListBids />
              {user.id == auctionRequest.user.id ? null : <CreateBid />}
            </div>
          </div>
        </div>

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageAuctionDetails };
