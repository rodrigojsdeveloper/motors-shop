import { ProductContext } from "../../contexts/product.context";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../List/style";
import { TitleList } from "../TitleList";
import { useContext } from "react";

const AdvertiserList = () => {
  const { advertiserProducts } = useContext(ProductContext);

  return (
    <Container>
      <TitleList title="Veículos" />

      <menu>
        {advertiserProducts.length > 0 ? (
          advertiserProducts.map((product: IProductProps) => (
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
