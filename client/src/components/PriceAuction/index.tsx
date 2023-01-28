import { IPriceProduct } from "../../interfaces";
import { Container } from "./style";

const PriceAuction = ({ price }: IPriceProduct) => (
  <Container>{price.includes("R$") ? price : `R$ ${price}`}</Container>
);

export { PriceAuction };
