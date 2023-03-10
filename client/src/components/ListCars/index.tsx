import { HomeContext } from "../../contexts/HomeContext";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Product } from "../Product";
import { Container } from "./style";
import { useContext } from "react";

const ListCars = () => {
  const { cars } = useContext(HomeContext);

  return (
    <Container id="cars">
      <TitleList title="Carros" />

      <menu>
        {cars.length > 0 ? (
          cars.map((car: IProductProps) => (
            <Product product={car} key={car.id} />
          ))
        ) : (
          <EmptyMessage message="Não há carros" />
        )}
      </menu>
    </Container>
  );
};

export { ListCars };
