import { UserProductsMotorcyclesList } from "../../components/UserProductsMotorcyclesList";
import { UserProductsCarsList } from "../../components/UserProductsCarsList";
import { IProductProps, IUserProps } from "../../interfaces";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ShowUser } from "../../components/ShowUser";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const PageProductsUser = () => {
  const { userProductId } = useParams();

  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [user, setUser] = useState<IUserProps>({
    name: "",
  } as IUserProps);

  useEffect(() => {
    api
      .get(`/users/products/${userProductId}`)
      .then((res) => {
        setUser(res.data);

        const products = res.data.products.filter(
          (product: IProductProps) => product.ad_type == "sale"
        );

        setCars(
          products.filter(
            (product: IProductProps) => product.vehicle_type == "car"
          )
        );

        setMotorcycles(
          products.filter(
            (product: IProductProps) => product.vehicle_type == "motorbike"
          )
        );
      })
      .catch((error) => console.error(error));
  });

  return (
    <HelmetProvider>
      <Helmet title={`${user.name} | Motors shop`} />
      <Container>
        <Header />

        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ShowUser user={user} />
            <UserProductsCarsList products={cars} />
            <UserProductsMotorcyclesList products={motorcycles} />
          </div>
        </div>
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { PageProductsUser };
