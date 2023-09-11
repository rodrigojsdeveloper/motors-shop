import { UserProductsList } from "../../components/UserProductsList";
import { ModalBackground } from "../../components/ModalBackground";
import { IProductProps, IUserProps } from "../../interfaces";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ShowUser } from "../../components/ShowUser";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./style";

const PageProductsUser = () => {
  const { userProductId } = useParams();

  const [products, setProducts] = useState<IProductProps[]>([]);

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoaded(true);

      try {
        const { data } = await api.get(`/users/products/${userProductId}`);
        setUser(data);

        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoaded(false);
      }
    };

    fetchUser();
  }, [userProductId]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title={`${user.name} | Motors Shop`} />
      </HelmetProvider>
      {loaded ? (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      ) : null}
      <Container>
        <Header />

        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ShowUser user={user} />
            <UserProductsList products={products} user={user} />
          </div>
        </div>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageProductsUser };
