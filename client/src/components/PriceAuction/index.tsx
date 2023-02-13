import { IPriceProduct } from "../../interfaces";
import { Container } from "./style";

const PriceAuction = ({ price }: IPriceProduct) => {
  const formatPrice = price.includes("R$") ? price : `R$ ${price}`;

  return (
    <Container>
      {formatPrice.includes(",00")
        ? formatPrice
        : formatPrice.includes(",")
        ? formatPrice.concat("00")
        : formatPrice.concat(",00")}
    </Container>
  );
};

export { PriceAuction };
