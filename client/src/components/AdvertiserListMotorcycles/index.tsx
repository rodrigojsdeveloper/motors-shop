import { AdvertiserContext } from "../../contexts/AdvertiserContext";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";
import { useContext } from "react";

const AdvertiserListMotorcycles = () => {
  const { motorcycles } = useContext(AdvertiserContext);

  return (
    <Container id="cars">
      <TitleList title="Motos" />

      <menu>
        {motorcycles.length > 0 ? (
          motorcycles.map((product: IProductProps) => (
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
