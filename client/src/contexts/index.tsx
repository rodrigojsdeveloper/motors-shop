import { AdvertiserContextProvider } from "./AdvertiserContext";
import { AuctionContextProvider } from "./AuctionContext";
import { HomeContextProvider } from "./HomeContext";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <HomeContextProvider>
      <AdvertiserContextProvider>
        <AuctionContextProvider>{children}</AuctionContextProvider>
      </AdvertiserContextProvider>
    </HomeContextProvider>
  );
};

export { Providers };
