import { IAuctionProps, IBidProps, IUserProps } from "../../interfaces";
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

interface IAuctionContextData {
  user: IUserProps;
  auctionRequest: IAuctionProps;
  openModalPhoto: boolean;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
  loadingAuction: boolean;
  loadingBids: boolean;
  fetchAuction: () => Promise<void>;
  fetchBids: () => Promise<void>;
  fetchUser: () => Promise<void>;
  handleListBids: (bid: IBidProps) => void;
  bidsList: IBidProps[];
}

interface IAuctionContextProvider {
  children: React.ReactNode;
}

export const AuctionContext = createContext({} as IAuctionContextData);

export const AuctionContextProvider = ({
  children,
}: IAuctionContextProvider) => {
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

  const handleListBids = (bid: IBidProps) => setBidsList([bid, ...bidsList]);

  return (
    <AuctionContext.Provider
      value={{
        auctionRequest,
        fetchAuction,
        fetchBids,
        fetchUser,
        handleListBids,
        loadingAuction,
        loadingBids,
        openModalPhoto,
        setOpenModalPhoto,
        user,
        bidsList,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};
