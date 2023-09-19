import { ModalCreateProduct } from "../Modals/modalCreateProduct";
import { DescriptionProduct } from "../DescriptionProduct";
import { UserContext } from "../../contexts/user.context";
import { ModalBackground } from "../ModalBackground";
import { useContext, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";

const ShowAdvertiser = () => {
  const { user } = useContext(UserContext);

  const [openModalCreateProduct, setOpenModalCreateProduct] =
    useState<boolean>(false);

  return (
    <>
      {openModalCreateProduct && (
        <ModalBackground>
          <ModalCreateProduct setOpenModal={setOpenModalCreateProduct} />
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
          color="light-blue"
          size="160px"
          type="button"
          onClick={() => setOpenModalCreateProduct(true)}
        >
          Criar anúncio
        </Button>
      </Container>
    </>
  );
};

export { ShowAdvertiser };
