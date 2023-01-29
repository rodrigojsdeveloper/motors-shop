import { IListProducts, IProductProps } from "../../interfaces";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Container } from "./style";

const AdvertiserMotorcyclesList = ({
  products,
  listCarsFunc,
  listMotorcyclesFunc,
}: IListProducts) => {
  return (
    <Container id="cars">
      <TitleList title="Motos" />

      <menu>
        {products.length > 0 ? (
          products.map((product: IProductProps) => (
            <AdvertiserProduct
              listCarsFunc={listCarsFunc}
              listMotorcyclesFunc={listMotorcyclesFunc}
              product={product}
            />
          ))
        ) : (
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { AdvertiserMotorcyclesList };
