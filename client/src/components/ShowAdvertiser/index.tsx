import { ModalCreateAnnouncement } from "../ModalCreateAnnouncement";
import { AdvertiserContext } from "../../contexts/AdvertiserContext";
import { DescriptionProduct } from "../DescriptionProduct";
import { ModalBackground } from "../ModalBackground";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { useContext } from "react";
import { Button } from "../Button";

const ShowAdvertiser = () => {
  const { user, openModalCreateAnnouncement, setOpenModalCreateAnnouncement } =
    useContext(AdvertiserContext);

  return (
    <>
      {openModalCreateAnnouncement && (
        <ModalBackground>
          <ModalCreateAnnouncement />
        </ModalBackground>
      )}
      <Container>
        <AvatarUser username={user?.name} />

        <div>
          <h3>{user?.name}</h3>
          <p>{user?.is_seller && "Anunciante"}</p>
        </div>

        <DescriptionProduct description={user?.description} />

        <Button
          color="buttonColorWhiteUserDetails"
          size="buttonSizeShowAdvertiser"
          type="button"
          onClick={() => setOpenModalCreateAnnouncement(true)}
        >
          Criar anúncio
        </Button>
      </Container>
    </>
  );
};

export { ShowAdvertiser };
