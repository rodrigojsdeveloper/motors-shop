import { IAuctionProps, IBidProps, IUserProps } from "../../interfaces";
import { ModalBackground } from "../../components/ModalBackground";
import { AuctionDetails } from "../../components/AuctionDetails";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ModalPhoto } from "../../components/ModalPhoto";
import { Container } from "../PageProductDetails/style";
import { CreateBid } from "../../components/CreateBid";
import { ListBids } from "../../components/ListBids";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

const PageAuctionDetails = () => {
  const { auctionId } = useParams();

  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [auctionRequest, setAuctionRequest] = useState<IAuctionProps>({
    bids: [],
    user: {
      name: "",
    },
  } as IAuctionProps);

  const [bidsList, setBidsList] = useState<IBidProps[]>([]);

  const [openModalPhoto, setOpenModalPhoto] = useState<boolean>(false);

  const [loadingAuction, setLoadingAuction] = useState<boolean>(false);

  const [loadingBids, setLoadingBids] = useState<boolean>(false);

  useEffect(() => {
    const fetchAuction = async () => {
      setLoadingAuction(true);

      try {
        const { data } = await api.get(`/auctions/${auctionId}`);
        setAuctionRequest(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingAuction(false);
      }
    };

    const fetchBids = async () => {
      setLoadingBids(true);

      try {
        const { data } = await api.get(`/bids/${auctionId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBidsList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingBids(false);
      }
    };

    fetchAuction();
    fetchBids();
  }, [auctionId, token]);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const { data } = await api.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchUser();
  }, [token]);

  const handleListBids = (bid: IBidProps) => setBidsList([bid, ...bidsList]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet
          title={`${auctionRequest?.product?.title ?? ""} - Motors Shop`}
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
            title={auctionRequest.product.title}
            cover_image={auctionRequest.product.cover_image}
          />
        </ModalBackground>
      ) : null}
      <Container>
        <Header />

        <div>
          <div className="divBlue"></div>
          <div className="divWhite">
            <div>
              <AuctionDetails
                auction={auctionRequest}
                setOpenModalPhoto={setOpenModalPhoto}
              />
              <ListBids
                bids={bidsList}
                loaded={loadingBids}
                auction={auctionRequest}
              />
              {user.id == auctionRequest.user.id ? null : (
                <CreateBid
                  ListBidsFunc={handleListBids}
                  auction={auctionRequest}
                />
              )}
            </div>
          </div>
        </div>

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageAuctionDetails };
