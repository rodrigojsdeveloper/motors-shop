import { UserProductsProduct } from "../UserProductsProduct";
import { IUserProductsListCars } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";

const UserProductsListMotorcycles = ({
  products,
  user,
}: IUserProductsListCars) => {
  return (
    <Container>
      <TitleList title="Motos" />

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
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { UserProductsListMotorcycles };
