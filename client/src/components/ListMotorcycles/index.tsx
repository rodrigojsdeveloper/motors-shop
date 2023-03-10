import { HomeContext } from "../../contexts/HomeContext";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "../ListCars/style";
import { TitleList } from "../TitleList";
import { Product } from "../Product";
import { useContext } from "react";

const ListMotorcycles = () => {
  const { motorcycles } = useContext(HomeContext);

  return (
    <Container id="motorcycles">
      <TitleList title="Motos" />

      <menu>
        {motorcycles.length > 0 ? (
          motorcycles.map((motorcycle: IProductProps) => (
            <Product product={motorcycle} key={motorcycle.id} />
          ))
        ) : (
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { ListMotorcycles };
