import { UserProductsProduct } from "../UserProductsProduct";
import { IUserProductsList } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../List/style";
import { TitleList } from "../TitleList";

const UserProductsList = ({ products, user }: IUserProductsList) => {
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

export { UserProductsList };
