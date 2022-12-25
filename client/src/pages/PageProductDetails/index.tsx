import { CreateComment } from "../../components/CreateComment";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListComments } from "../../components/ListComments";
import { ProductDetails } from "../../components/ProductDetails";
import { Container } from "./style";

const PageProductDetails = () => {
  return (
    <Container>
      <Header />

      <div>
        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ProductDetails />
            <ListComments />
            <CreateComment />
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export { PageProductDetails };
