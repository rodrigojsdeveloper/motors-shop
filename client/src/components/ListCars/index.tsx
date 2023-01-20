import { IListProducts } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Product } from "../Product";
import { Container } from "./style";

const ListCars = ({ products }: IListProducts) => {
  return (
    <Container id="cars">
      <h2>Carros</h2>

      <menu>
        {products.length > 0 ? (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <EmptyMessage message="Não há carros" />
        )}
      </menu>
    </Container>
  );
};

export { ListCars };
