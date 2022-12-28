import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListAuction } from "../../components/ListAuction";
import { ListProducts } from "../../components/ListProducts";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalCreateAnnouncement } from "../../components/ModalCreateAnnouncement";
import { IAuctionProps, IProductProps } from "../../interfaces";
import { api } from "../../services/api";
import { Container } from "./style";

const Home = () => {

  const [ cars, setCars ] = useState<IProductProps[]>([])

  const [ motorcycles, setMotorcycles ] = useState<IProductProps[]>([])

  const [ auctions, setAuctions ] = useState<IAuctionProps[]>([])

  useEffect(() => {

    api.get("/products", {
      onDownloadProgress: (progressEvent: any) => {
          let progress: number = Math.round (
            (progressEvent.loaded * 100) / progressEvent.total
          )

          console.log(`está sendo carregado em ${ progress }`)
      },
    })
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
    <>
    <ModalBackground>
      <ModalCreateAnnouncement/>
    </ModalBackground>
    <Container>
      <Header />
      <Banner />
      <ListAuction auctions={ auctions } />
      <ListProducts listName="Carros" products={ cars } />
      <ListProducts listName="Motos" products={ motorcycles } />
      <Footer />
    </Container>
    </>

  );
};

export { Home };
