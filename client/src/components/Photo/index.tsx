import { IPhoto } from "../../interfaces";
import { Container } from "./style";

const Photo = ({ image, setOpenModalPhoto }: IPhoto) => {
  return (
    <Container>
      <img src={image} onClick={() => setOpenModalPhoto(true)} />
    </Container>
  );
};

export { Photo };
