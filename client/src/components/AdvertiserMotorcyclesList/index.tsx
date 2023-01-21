import { IListProducts, IProductProps } from "../../interfaces";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "./style";

const AdvertiserMotorcyclesList = ({
  products,
  listCarsFunc,
  listMotorcyclesFunc,
}: IListProducts) => {
  return (
    <Container id="cars">
      <h2>Motos</h2>

      <menu>
        {products.length > 0 ? (
          products.map((product: IProductProps) => (
            <AdvertiserProduct listCarsFunc={listCarsFunc} listMotorcyclesFunc={listMotorcyclesFunc} product={product} />
          ))
        ) : (
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { AdvertiserMotorcyclesList };
