import { AuctionContext } from "../../contexts/AuctionContext";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";
import { useContext } from "react";

const ModalPhoto = () => {
  const { setOpenModalPhoto, auctionRequest } = useContext(AuctionContext);

  return (
    <Container>
      <HeaderModal
        title="Imagem de veículo"
        setCloseModal={setOpenModalPhoto}
      />

      <img
        src={auctionRequest.product.cover_image}
        alt={auctionRequest.product.title}
      />
    </Container>
  );
};

export { ModalPhoto };
