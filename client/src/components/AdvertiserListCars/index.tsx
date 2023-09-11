import { ProductContext } from "../../contexts/product.context";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";
import { useContext } from "react";

const AdvertiserList = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <TitleList title="Veículos" />

      <menu>
        {products.length > 0 ? (
          products.map((product: IProductProps) => (
            <AdvertiserProduct product={product} />
          ))
        ) : (
          <EmptyMessage message="Não há veículos" />
        )}
      </menu>
    </Container>
  );
};

export { AdvertiserList };
