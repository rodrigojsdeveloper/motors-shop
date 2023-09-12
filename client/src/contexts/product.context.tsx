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

  const handlePostProduct = (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    data: any,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLoad(true);

    api
      .post("/products", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        addProduct(res.data);

        setOpenModal(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  const handleEditProduct = (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    isPublished: boolean,
    data: any,
    product: IProductProps,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLoad(true);

    api
      .patch(`/products/${product.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setOpenModal(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));

    if (isPublished) {
      api
        .post(`/products/${product.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => setOpenModal(false))
        .catch((error) => console.error(error))
        .finally(() => setLoad(false));
    }
  };

  const handleDeleteProduct = (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    productId: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLoad(true);

    api
      .delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setOpenModal(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  const handleGetProduct = (productId: string) => {
    let product: any;

    api
      .get(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => (product = res.data))
      .catch((error) => console.error(error));

    return product;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        advertiserProducts,
        isLoading,
        isLoadingAdvertiser,
        handlePostProduct,
        handleEditProduct,
        handleDeleteProduct,
        handleGetProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
