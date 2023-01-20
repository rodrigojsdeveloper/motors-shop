import { UserProductsProduct } from "../UserProductsProduct";
import { IListProducts } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "./style";

const UserProductsMotorcyclesList = ({ products }: IListProducts) => {
  return (
    <Container>
      <h2>Motos</h2>

      <menu>
        {products.length > 0 ? (
          products.map((product) => (
            <UserProductsProduct product={product} key={product.id} />
          ))
        ) : (
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { UserProductsMotorcyclesList };
