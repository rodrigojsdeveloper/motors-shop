import { ModalCreateAnnouncement } from "../ModalCreateAnnouncement";
import { ModalBackground } from "../ModalBackground";
import { IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

interface IShowAdvertiser {
  user: IUserProps;
}

const ShowAdvertiser = ({ user }: IShowAdvertiser) => {
  const [openModalCreateAnnouncement, setOpenModalCreateAnnouncement] =
    useState<boolean>(false);

  return (
    <>
      {openModalCreateAnnouncement && (
        <ModalBackground>
          <ModalCreateAnnouncement
            setCloseModalCreateAnnouncement={setOpenModalCreateAnnouncement}
          />
        </ModalBackground>
      )}
      <Container>
        <AvatarUser userName={user?.name} />

        <div>
          <h3>{user?.name}</h3>
          <p>{user?.is_seller && "Anunciante"}</p>
        </div>

        <p>{user?.description}</p>

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
