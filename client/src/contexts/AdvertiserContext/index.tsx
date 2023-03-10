import { IAuctionProps, IProductProps, IUserProps } from "../../interfaces";
import { createContext, useState } from "react";
import { api } from "../../services/api";

interface IAdvertiserContextData {
  cars: IProductProps[];
  motorcycles: IProductProps[];
  auctions: IAuctionProps[];
  user: IUserProps;
  isLoading: boolean;
  getUserData: () => void;
  handleListAuctions: (auction: IAuctionProps) => void;
  handleListCars: (car: IProductProps) => void;
  handleListMotorcycles: (motorcycle: IProductProps) => void;
  openModalCreateAnnouncement: boolean;
  setOpenModalCreateAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAdvertiserContextProvider {
  children: React.ReactNode;
}

export const AdvertiserContext = createContext({} as IAdvertiserContextData);

export const AdvertiserContextProvider = ({
  children,
}: IAdvertiserContextProvider) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [openModalCreateAnnouncement, setOpenModalCreateAnnouncement] =
    useState<boolean>(false);

  const getUserData = () => {
    setIsLoading(true);

    api
      .get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);

        const products = res.data.products.filter(
          (product: IProductProps) => product.ad_type === "sale"
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

        setAuctions(res.data.auctions);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const handleListAuctions = (auction: IAuctionProps) =>
    setAuctions([auction, ...auctions]);

  const handleListCars = (car: IProductProps) => setCars([car, ...cars]);

  const handleListMotorcycles = (motorcycle: IProductProps) =>
    setMotorcycles([motorcycle, ...motorcycles]);

  return (
    <AdvertiserContext.Provider
      value={{
        cars,
        motorcycles,
        auctions,
        user,
        isLoading,
        getUserData,
        handleListAuctions,
        handleListCars,
        handleListMotorcycles,
        openModalCreateAnnouncement,
        setOpenModalCreateAnnouncement,
      }}
    >
      {children}
    </AdvertiserContext.Provider>
  );
};
