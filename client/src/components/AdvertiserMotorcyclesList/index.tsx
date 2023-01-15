import { AdvertiserProduct } from "../AdvertiserProduct";
import { IListProducts, IProductProps } from "../../interfaces";
import { Container } from "./style";

const AdvertiserMotorcyclesList = ({ products }: IListProducts) => {
  return (
    <Container id="cars">
      <h2>Motos</h2>

      <menu>
        {products.map((product: IProductProps) => (
          <AdvertiserProduct product={product} />
        ))}
      </menu>
    </Container>
  );
};

export { AdvertiserMotorcyclesList };
