import { Container } from "./style";

interface IPhoto {
  image: string;
}

const Photo = ({ image }: IPhoto) => {
  return (
    <Container>
      <img src={image} />
    </Container>
  );
};

export { Photo };
