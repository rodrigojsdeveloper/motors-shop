import { IPhoto } from "../../interfaces";
import { Container } from "./style";

const Photo = ({ image, alt, setOpenModal }: IPhoto) => {
  return (
    <Container>
      <img src={image} alt={alt} onClick={() => setOpenModal(true)} />
    </Container>
  );
};

export { Photo };
