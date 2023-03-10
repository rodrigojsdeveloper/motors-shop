import { AdvertiserContextProvider } from "./AdvertiserContext";
import { HomeContextProvider } from "./HomeContext";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <HomeContextProvider>
      <AdvertiserContextProvider>{children}</AdvertiserContextProvider>
    </HomeContextProvider>
  );
};

export { Providers };
