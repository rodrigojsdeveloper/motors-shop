import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCardAuction } from "../../components/ListCardsAuction";
import { ListProducts } from "../../components/ListProducts";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <ListCardAuction />
      <ListProducts listName="Carros" />
      <ListProducts listName="Motos" />
      <Footer />
    </Container>
  );
};

export { Home };
