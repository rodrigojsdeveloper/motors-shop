import { IProductProps } from "../../interfaces";
import { createContext, useState } from "react";
import { api } from "../../services/api";

interface IProductContextData {
  cars: IProductProps[];
  motorcycles: IProductProps[];
  isLoadingProducts: boolean;
  loadProducts: () => Promise<void>;
}

interface IProductContextProvider {
  children: React.ReactNode;
}

export const ProductContext = createContext({} as IProductContextData);

export const ProductContextProvider = ({
  children,
}: IProductContextProvider) => {
  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(true);

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
      setIsLoadingProducts(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        cars,
        motorcycles,
        isLoadingProducts,
        loadProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
