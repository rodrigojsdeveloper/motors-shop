import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListAuction } from "../../components/ListAuction";
import { ListCars } from "../../components/ListCars";
import { ListMotorcycles } from "../../components/ListMotorcycles";
import { IAuctionProps, IProductProps } from "../../interfaces";
import { api } from "../../services/api";
import { Container } from "./style";

const Home = () => {

  const [ cars, setCars ] = useState<IProductProps[]>([])

  const [ motorcycles, setMotorcycles ] = useState<IProductProps[]>([])

  const [ auctions, setAuctions ] = useState<IAuctionProps[]>([])

  useEffect(() => {

    api.get("/products")
    .then(res => {

      setCars(res.data.filter((product: IProductProps) => product.vehicle_type == "car"))

      setMotorcycles(res.data.filter((product: IProductProps) => product.vehicle_type == "motorbike"))
    })
    .catch(error => console.error(error))

  }, [])

  useEffect(() => {

    api.get("/auctions")
    .then(res => setAuctions(res.data))
    .catch(error => console.error(error))

  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <ListAuction auctions={ auctions } />
      <ListCars products={ cars } />
      <ListMotorcycles products={ motorcycles } />
      <Footer />
    </Container>
  );
};

export { Home };
