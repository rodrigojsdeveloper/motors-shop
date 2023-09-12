import { ImageProductProps } from "../../interfaces";
import { Container } from "./style";

const ImageProduct = ({ src, alt }: ImageProductProps) => (
  <Container src={src} alt={alt} />
);

export { ImageProduct };
