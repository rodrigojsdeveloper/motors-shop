import { UserProductsProduct } from "../UserProductsProduct";
import { IListProducts } from "../../interfaces";
import { Container } from "./style";

const UserProductsMotorcyclesList = ({ products }: IListProducts) => {
  return (
    <Container>
      <h2>Motos</h2>

      <menu>
        {products.map((product) => (
          <UserProductsProduct product={product} key={product.id} />
        ))}
      </menu>
    </Container>
  );
};

export { UserProductsMotorcyclesList };
