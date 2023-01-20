import { UserProductsProduct } from "../UserProductsProduct";
import { IListProducts } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "./style";

const UserProductsCarsList = ({ products }: IListProducts) => {
  return (
    <Container>
      <h2>Carros</h2>

      <menu>
        {products.length > 0 ? (
          products.map((product) => (
            <UserProductsProduct product={product} key={product.id} />
          ))
        ) : (
          <EmptyMessage message="Não há carros" />
        )}
      </menu>
    </Container>
  );
};

export { UserProductsCarsList };
