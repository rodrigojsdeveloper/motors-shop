import { IPriceProduct } from "../../interfaces";
import { Container } from "./style";

const PriceProduct = ({ price }: IPriceProduct) => (
  <Container>R$ {price ? price.toLocaleString("pt-BR") : 0.0}</Container>
);

export { PriceProduct };
