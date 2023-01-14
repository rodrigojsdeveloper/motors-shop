import { Container } from "./style";

interface IPhoto {
  image: string;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>
}

const Photo = ({ image, setOpenModalPhoto }: IPhoto) => {
  return (
    <Container>
      <img src={image} onClick={ () => setOpenModalPhoto(true) } />
    </Container>
  );
};

export { Photo };
