import { ModalCreateAnnouncement } from "../ModalCreateAnnouncement";
import { DescriptionProduct } from "../DescriptionProduct";
import { ModalBackground } from "../ModalBackground";
import { IShowAdvertiser } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

const ShowAdvertiser = ({
  user,
  listCarsFunc,
  listMotorcyclesFunc,
}: IShowAdvertiser) => {
  const [openModalCreateAnnouncement, setOpenModalCreateAnnouncement] =
    useState<boolean>(false);

  return (
    <>
      {openModalCreateAnnouncement && (
        <ModalBackground>
          <ModalCreateAnnouncement
            setCloseModalCreateAnnouncement={setOpenModalCreateAnnouncement}
            listMotorcyclesFunc={listMotorcyclesFunc}
            listCarsFunc={listCarsFunc}
          />
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
