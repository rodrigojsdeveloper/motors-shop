import { IListProducts, IProductProps } from "../../interfaces";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";

const AdvertiserListMotorcycles = ({ products }: IListProducts) => {
  return (
    <Container id="cars">
      <TitleList title="Motos" />

      <menu>
        {products.length > 0 ? (
          products.map((product: IProductProps) => (
            <AdvertiserProduct product={product} />
          ))
        ) : (
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { AdvertiserListMotorcycles };
