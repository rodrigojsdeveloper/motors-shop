import { ProductContext } from "../../contexts/product.context";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Product } from "../Product";
import { Container } from "./style";
import { useContext } from "react";

const List = () => {
  const { products } = useContext(ProductContext);

  const publishedProducts = products.filter(
    (product) => product.is_published === true
  );

  return (
    <Container>
      <TitleList title="Veículos" />

      <menu>
        {publishedProducts.length > 0 ? (
          publishedProducts.map((product: IProductProps) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <EmptyMessage message="Não há veículos" />
        )}
      </menu>
    </Container>
  );
};

export { List };
