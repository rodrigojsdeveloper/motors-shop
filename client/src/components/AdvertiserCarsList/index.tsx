import { IListProducts, IProductProps } from "../../interfaces";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { Container } from "./style";

const AdvertiserCarsList = ({ products }: IListProducts) => {

  return (
    <Container id="cars">
      <h2>Carros</h2>

      <menu>
        {
          products.map(product => <AdvertiserProduct product={ product } />)
        }
      </menu>
    </Container>
  );
};

export { AdvertiserCarsList };
