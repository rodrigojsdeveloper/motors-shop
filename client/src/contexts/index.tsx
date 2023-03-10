import { AuctionContextProvider } from "./AuctionContext";
import { ProductContextProvider } from "./ProductContext";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <ProductContextProvider>
      <AuctionContextProvider>{children}</AuctionContextProvider>
    </ProductContextProvider>
  );
};

export { Providers };
