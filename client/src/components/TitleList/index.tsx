import { ITitleProduct } from "../../interfaces";
import { Container } from "./style";

const TitleList = ({ title }: ITitleProduct) => <Container>{title}</Container>;

export { TitleList };
