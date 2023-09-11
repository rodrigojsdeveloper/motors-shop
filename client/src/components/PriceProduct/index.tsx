import { IPriceProduct } from "../../interfaces";
import { Container } from "./style";

const PriceProduct = ({ price }: IPriceProduct) => (
  <Container>R$ {price ? price.toFixed(2) : 0.0}</Container>
);

export { PriceProduct };
