import { AdvertiserProduct } from "../AdvertiserProduct";
import { IListProducts } from "../../interfaces";
import { Container } from "./style";

const AdvertiserMotorcyclesList = ({ products }: IListProducts) => {
  return (
    <Container id="cars">
      <h2>Motos</h2>

      <menu>
        {products.map((product) => (
          <AdvertiserProduct product={product} />
        ))}
      </menu>
    </Container>
  );
};

export { AdvertiserMotorcyclesList };
