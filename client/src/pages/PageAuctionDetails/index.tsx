import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionDetails } from "../../components/AuctionDetails";
import { CreateBid } from "../../components/CreateBid";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListBids } from "../../components/ListBids";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalPhoto } from "../../components/ModalPhoto";
import { IAuctionProps, IBid, IUserProps } from "../../interfaces";
import { api } from "../../services/api";
import { Container } from "./style";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PageAuctionDetails = () => {
  const { auctionId } = useParams();

  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [auctionRequest, setAuctionRequest] = useState<IAuctionProps>({
    bids: [],
    user: {
      name: "rodrigo",
      email: "rodrigonohype@gmail.com",
      password: "Johndoe@123",
      cellphone: "99 99999-9999",
      cpf: "99999999999",
      birthdate: "99/99/9999",
      is_seller: true,
      description: "description",
      country: "United State",
      state: "Califórnia",
      city: "Mountain View",
      district: "Amphitheatre Pkwy",
      street: "Amphitheatre Pkwy",
      number: 1600,
      complement: "Googleplex",
      zip_code: "9098",
    },
  } as IAuctionProps);

  const [bidsList, setBidsList] = useState<IBid[]>([]);

  const [openModalPhoto, setOpenModalPhoto] = useState<boolean>(false);

  const [loaded, setLoaded] = useState<boolean>(false);

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
    api
      .get(`/auctions/${auctionId}`)
      .then((res) => setAuctionRequest(res.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
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
  }, []);

  const ListBidsFunc = (bid: IBid) => setBidsList([bid, ...bidsList]);

  return (
    <>
      <Helmet title={`${auctionRequest.product.title} | Motors shop`} />
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
              <ListBids bids={bidsList} loaded={loaded} />
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
    </>
  );
};

export { PageAuctionDetails };
