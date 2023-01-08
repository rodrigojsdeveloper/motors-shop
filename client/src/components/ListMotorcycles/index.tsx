import { IListProducts } from "../../interfaces";
import { Product } from "../Product";
import { Container } from "./style";

const ListMotorcycles = ({ products }: IListProducts) => {
  return (
    <Container id="motorcycles">
      <h2>Motos</h2>

      <menu>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </menu>
    </Container>
  );
};

export { ListMotorcycles };
