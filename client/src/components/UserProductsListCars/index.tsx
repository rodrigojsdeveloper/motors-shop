import { UserProductsProduct } from "../UserProductsProduct";
import { IUserProductsListCars } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";

const UserProductsListCars = ({ products, user }: IUserProductsListCars) => {
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
