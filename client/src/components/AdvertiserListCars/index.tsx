import { AdvertiserContext } from "../../contexts/AdvertiserContext";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";
import { useContext } from "react";

const AdvertiserListCars = () => {
  const { cars } = useContext(AdvertiserContext);

  return (
    <Container id="cars">
      <TitleList title="Carros" />

      <menu>
        {cars.length > 0 ? (
          cars.map((product: IProductProps) => (
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
