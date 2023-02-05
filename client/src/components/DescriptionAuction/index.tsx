import { IDescription } from "../../interfaces";
import { Container } from "./style";

const DescriptionAuction = ({ description }: IDescription) => (
  <Container>{description}</Container>
);

export { DescriptionAuction };
