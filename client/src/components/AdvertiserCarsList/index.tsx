import { IListProducts, IProductProps } from "../../interfaces";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Container } from "./style";

const AdvertiserCarsList = ({ products }: IListProducts) => {
  return (
    <Container id="cars">
    <TitleList title="Carros" />

      <menu>
        {products.length > 0 ? (
          products.map((product: IProductProps) => (
            <AdvertiserProduct product={product} />
          ))
        ) : (
          <EmptyMessage message="Não há carros" />
        )}
      </menu>
    </Container>
  );
};

export { AdvertiserCarsList };
