import { IListProducts, IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";
import { Product } from "../Product";

const ListMotorcycles = ({ products }: IListProducts) => {
  return (
    <Container id="motorcycles">
      <TitleList title="Motos" />

      <menu>
        {products.length > 0 ? (
          products.map((product: IProductProps) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { ListMotorcycles };
