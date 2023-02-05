import { IModalDelete } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";

const ModalDeleteProduct = ({
  setOpenModalDelete,
  productId,
}: IModalDelete) => {
  const token = sessionStorage.getItem("Motors shop: token");

  return (
    <Container>
      <HeaderModal title="Excluir anúncio" setCloseModal={setOpenModalDelete} />

      <div>
        <h3>Tem certeza que deseja remover este anúncio?</h3>

        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          anúncio e removerá esse produto do seu servidor.
        </p>

        <div>
          <Button
            size="buttonSizeUserDetailsMedium"
            color="buttonColorGrayModalEditAddress"
            type="button"
            onClick={() => setOpenModalDelete(false)}
          >
            Cancelar
          </Button>
          <Button
            size="buttonSizeModalDeleteProduct"
            color="buttonColorRedModalDeleteProduct"
            type="button"
            onClick={() => {
              api
                .delete(`/products/${productId}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then((_) => setOpenModalDelete(false))
                .catch((error) => console.error(error));
            }}
          >
            Sim, excluir anúncio
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { ModalDeleteProduct };
