import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import { ModalBackground } from "../ModalBackground";
import { ModalCreateAnnouncement } from "../ModalCreateAnnouncement";

const ShowAdvertiser = () => {

  const [ openModalCreateAnnouncement, setOpenModalCreateAnnouncement ] = useState<boolean>(false)

  return (
    <>
    {
      openModalCreateAnnouncement &&
      <ModalBackground>
        <ModalCreateAnnouncement setCloseModalCreateAnnouncement={ setOpenModalCreateAnnouncement } />
      </ModalBackground>
    }
    <Container>
      <AvatarUser userName="Rodrigo Silva" />

      <div>
        <h3>Rodrigo Silva</h3>
        <p>Anunciante</p>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <Button
        color="buttonColorWhiteUserDetails"
        size="buttonSizeShowAdvertiser"
        type="button"
        onClick={ () => setOpenModalCreateAnnouncement(true) }
      >
        Criar anúncio
      </Button>
    </Container>
    </>
  );
};

export { ShowAdvertiser };
