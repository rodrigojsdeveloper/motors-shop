import { ITitleProduct } from "../../interfaces";
import { Container } from "./style";

const TitleProduct = ({ title }: ITitleProduct) => (
  <Container>{title}</Container>
);

export { TitleProduct };
