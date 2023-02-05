import { IListProducts, IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Product } from "../Product";
import { Container } from "./style";

const ListCars = ({ products }: IListProducts) => {
  return (
    <Container id="cars">
      <TitleList title="Carros" />

      <menu>
        {products.length > 0 ? (
          products.map((product: IProductProps) => (
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
