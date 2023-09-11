import { IPriceProduct } from "../../interfaces";
import { Container } from "./style";

const PriceProduct = ({ price }: IPriceProduct) => (
  <Container>R$ {price.toFixed(1)}</Container>
);

export { PriceProduct };
