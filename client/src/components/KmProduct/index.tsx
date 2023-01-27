import { IKmProduct } from "../../interfaces";
import { Container } from "./style";

const KmProduct = ({ km }: IKmProduct) => <Container>{km} KM</Container>;

export { KmProduct };
