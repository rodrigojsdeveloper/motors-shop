import { IListProducts, IProductProps } from "../../interfaces";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";

const AdvertiserListCars = ({ products }: IListProducts) => {
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

export { AdvertiserListCars };
