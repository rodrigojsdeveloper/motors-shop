import { UserProductsProduct } from "../UserProductsProduct";
import { IListProducts } from "../../interfaces";
import { Container } from "./style";

const UserProductsCarsList = ({ products }: IListProducts) => {
  return (
    <Container>
      <h2>Carros</h2>

      <menu>
        {products.map((product) => (
          <UserProductsProduct product={product} key={product.id} />
        ))}
      </menu>
    </Container>
  );
};

export { UserProductsCarsList };
