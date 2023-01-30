import { ModalCreateAnnouncement } from "../ModalCreateAnnouncement";
import { ModalBackground } from "../ModalBackground";
import { IProductProps, IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import { DescriptionProduct } from "../DescriptionProduct";

interface IShowAdvertiser {
  user: IUserProps;
  listMotorcyclesFunc: (motorcycle: IProductProps) => void;
  listCarsFunc: (car: IProductProps) => void;
}

const ShowAdvertiser = ({ user, listCarsFunc, listMotorcyclesFunc }: IShowAdvertiser) => {
  const [openModalCreateAnnouncement, setOpenModalCreateAnnouncement] =
    useState<boolean>(false);

  return (
    <>
      {openModalCreateAnnouncement && (
        <ModalBackground>
          <ModalCreateAnnouncement
            setCloseModalCreateAnnouncement={setOpenModalCreateAnnouncement}
            listMotorcyclesFunc={ listMotorcyclesFunc }
            listCarsFunc={ listCarsFunc }
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
