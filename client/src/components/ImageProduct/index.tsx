import { IimageProduct } from "../../interfaces";
import { Container } from "./style";

const ImageProduct = ({ src, alt }: IimageProduct) => (
  <Container src={src} alt={alt} />
);

export { ImageProduct };
