import { UserProductsProduct } from "../UserProductsProduct";
import { IListProducts } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "./style";
import { TitleList } from "../TitleList";

const UserProductsCarsList = ({ products, user }: IListProducts) => {
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

export { UserProductsCarsList };
