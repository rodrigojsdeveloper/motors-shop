import { IAuctionProps, IBidProps, IUserProps } from "../../interfaces";
import { ModalBackground } from "../../components/ModalBackground";
import { AuctionDetails } from "../../components/AuctionDetails";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ModalPhoto } from "../../components/ModalPhoto";
import { Container } from "../PageProductDetails/style";
import { CreateBid } from "../../components/CreateBid";
import { ListBids } from "../../components/ListBids";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const [loaded, setLoaded] = useState<boolean>(false);

  const [loadedAuction, setLoadedAuction] = useState<boolean>(false);

  const getAucton = () => {
    setLoadedAuction(true);

    api
      .get(`/auctions/${auctionId}`)
      .then((res) => setAuctionRequest(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoadedAuction(false));
  };

  const getBids = () => {
    setLoaded(true);

    api
      .get(`/bids/${auctionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setBidsList(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoaded(false));
  };

  token &&
    useEffect(() => {
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((error) => console.error(error));
    }, []);

  useEffect(() => {
    getAucton();
    getBids();
  }, []);

  const ListBidsFunc = (bid: IBidProps) => setBidsList([bid, ...bidsList]);

  return (
    <HelmetProvider>
      <Helmet title={`${auctionRequest.product?.title} | Motors Shop`} />
      {loadedAuction && (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      )}
      {openModalPhoto && (
        <ModalBackground>
          <ModalPhoto
            setOpenModalPhoto={setOpenModalPhoto}
            title={auctionRequest.product.title}
            cover_image={auctionRequest.product.cover_image}
          />
        </ModalBackground>
      )}
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
                loaded={loaded}
                auction={auctionRequest}
              />
              {user.id == auctionRequest.user.id ? null : (
                <CreateBid
                  ListBidsFunc={ListBidsFunc}
                  auction={auctionRequest}
                />
              )}
            </div>
          </div>
        </div>

        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { PageAuctionDetails };
