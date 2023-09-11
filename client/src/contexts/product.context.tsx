import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProductProps, IProductContextData, IChildren } from "../interfaces";

export const ProductContext = createContext({} as IProductContextData);

export const ProductContextProvider = ({ children }: IChildren) => {
  const token = sessionStorage.getItem("NG.CASH: token");

  const [products, setProducts] = useState<IProductProps[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  const addProduct = (product: IProductProps) =>
    setProducts([...products, product]);

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
