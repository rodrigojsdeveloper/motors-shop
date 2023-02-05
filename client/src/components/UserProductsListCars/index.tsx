import { UserProductsProduct } from "../UserProductsProduct";
import { IListProducts } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Container } from "../ListCars/style";

const UserProductsListCars = ({ products, user }: IListProducts) => {
  return (
    <Container>
      <TitleList title="Carros" />

      <menu>
        {products.length > 0 ? (
          products.map((product) => (
            <UserProductsProduct
              product={product}
              key={product.id}
              user={user}
            />
          ))
        ) : (
          <EmptyMessage message="Não há carros" />
        )}
      </menu>
    </Container>
  );
};

export { UserProductsListCars };
