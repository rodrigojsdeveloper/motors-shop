import { IAuctionProps, IProductProps } from "../../interfaces";
import { createContext, useState } from "react";
import { api } from "../../services/api";

interface IHomeContextData {
  cars: IProductProps[];
  motorcycles: IProductProps[];
  auctions: IAuctionProps[];
  isLoading: boolean;
  loadProducts: () => Promise<void>;
  loadAuctions: () => Promise<void>;
}

interface IHomeContextProvider {
  children: React.ReactNode;
}

export const HomeContext = createContext({} as IHomeContextData);

export const HomeContextProvider = ({
  children,
}: IHomeContextProvider) => {
  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadProducts = async () => {
    try {
      const { data } = await api.get("/products");
      const products = data.filter(
        (product: IProductProps) =>
          product.ad_type === "sale" && product.is_published === true
      );

      setCars(
        products.filter(
          (product: IProductProps) => product.vehicle_type === "car"
        )
      );

      setMotorcycles(
        products.filter(
          (product: IProductProps) => product.vehicle_type === "motorcycle"
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
      setIsLoading(false);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        cars,
        motorcycles,
        auctions,
        isLoading,
        loadProducts,
        loadAuctions,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
