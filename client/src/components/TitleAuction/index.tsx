import { ITitleProduct } from "../../interfaces";
import { Container } from "./style";

const TitleAuction = ({ title }: ITitleProduct) => (
  <Container>{title}</Container>
);

export { TitleAuction };
