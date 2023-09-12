import { IPhoto } from "../../interfaces";
import { Container } from "./style";

const Photo = ({ image, setOpenModal }: IPhoto) => {
  return (
    <Container>
      <img src={image} onClick={() => setOpenModal(true)} />
    </Container>
  );
};

export { Photo };
