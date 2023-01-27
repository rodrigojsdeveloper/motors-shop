import { IPriceProduct } from "../../interfaces";
import { Container } from "./style";

const PriceProduct = ({ price }: IPriceProduct) => (
  <Container>{price.includes("R$") ? price : `R$ ${price}`}</Container>
);

export { PriceProduct };
