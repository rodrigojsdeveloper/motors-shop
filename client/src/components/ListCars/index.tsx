import { IListProducts } from "../../interfaces";
import { Product } from "../Product";
import { Container } from "./style";

const ListCars = ({ products }: IListProducts) => {
  return (
    <Container id="cars">
      <h2>Carros</h2>

      <menu>
        {products.map((product) => (
          <Product product={product} key={ product.id } />
        ))}
      </menu>
    </Container>
  );
};

export { ListCars };
