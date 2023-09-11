import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProductProps, IProductContextData, IChildren } from "../interfaces";

export const ProductContext = createContext({} as IProductContextData);

export const ProductContextProvider = ({ children }: IChildren) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [products, setProducts] = useState<IProductProps[]>([]);

  const [advertiserProducts, setAdvertiserProducts] = useState<IProductProps[]>(
    []
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isLoadingAdvertiser, setIsLoadingAdvertiser] = useState<boolean>(true);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  token &&
    useEffect(() => {
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setAdvertiserProducts(res.data.products))
        .catch((error) => console.error(error))
        .finally(() => setIsLoadingAdvertiser(false));
    }, []);

  const addProduct = (product: IProductProps) =>
    setProducts([...products, product]);

  return (
    <ProductContext.Provider
      value={{
        products,
        advertiserProducts,
        addProduct,
        isLoading,
        isLoadingAdvertiser,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
