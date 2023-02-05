import { IDescription } from "../../interfaces";
import { Container } from "./style";

const DescriptionProduct = ({ description }: IDescription) => (
  <Container>{description}</Container>
);

export { DescriptionProduct };
