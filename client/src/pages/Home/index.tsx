import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCardAuction } from "../../components/ListCardsAuction";
import { ListProducts } from "../../components/ListProducts";
import { IProductProps } from "../../components/Product";
import { api } from "../../services/api";
import { Container } from "./style";

const Home = () => {

  const [ cars, setCars ] = useState<IProductProps[]>([])

  const [ motorcycles, setMotorcycles ] = useState<IProductProps[]>([])

  useEffect(() => {

    api.get("/products")
    .then(res => {

      setCars(res.data.filter((product: IProductProps) => product.ad_type == "car"))

      setMotorcycles(res.data.filter((product: IProductProps) => product.ad_type == "motorbike"))
    })
    .catch(error => console.error(error))

  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <ListCardAuction />
      <ListProducts listName="Carros" products={ cars } />
      <ListProducts listName="Motos" products={ motorcycles } />
      <Footer />
    </Container>
  );
};

export { Home };
