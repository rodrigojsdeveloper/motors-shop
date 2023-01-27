import { IDescriptionProduct } from "../../interfaces";
import { Container } from "./style";

const DescriptionProduct = ({ description }: IDescriptionProduct) => (
  <Container>{description}</Container>
);

export { DescriptionProduct };
