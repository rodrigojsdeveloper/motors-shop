import { IAuctionProps } from "../../interfaces";
import { createContext, useState } from "react";
import { api } from "../../services/api";

interface IAuctionContextData {
  auctions: IAuctionProps[];
  isLoadingAuctions: boolean;
  loadAuctions: () => Promise<void>;
}

interface IAuctionContextProvider {
  children: React.ReactNode;
}

export const AuctionContext = createContext({} as IAuctionContextData);

export const AuctionContextProvider = ({
  children,
}: IAuctionContextProvider) => {
  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [isLoadingAuctions, setIsLoadingAuctions] = useState<boolean>(true);

  const loadAuctions = async () => {
    try {
      const { data } = await api.get("/auctions");
      const auctions = data.filter(
        (auction: IAuctionProps) => auction.product?.is_published === true
      );

      setAuctions(auctions);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingAuctions(false);
    }
  };

  return (
    <AuctionContext.Provider
      value={{
        auctions,
        isLoadingAuctions,
        loadAuctions,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};
