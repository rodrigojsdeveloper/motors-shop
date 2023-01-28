import { IDescriptionProduct } from "../../interfaces";
import { Container } from "./style";

const DescriptionAuction = ({ description }: IDescriptionProduct) => (
  <Container>{description}</Container>
);

export { DescriptionAuction };
