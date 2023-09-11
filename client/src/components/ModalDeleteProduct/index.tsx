import { ProductContext } from "../../contexts/product.context";
import { IModalDelete } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useContext, useState } from "react";
import { Container } from "./style";
import { Button } from "../Button";

const ModalDeleteProduct = ({
  setOpenModalDelete,
  productId,
}: IModalDelete) => {
  const { handleDeleteProduct } = useContext(ProductContext);

  const [load, setLoad] = useState<boolean>(false);

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
            size="126px"
            color="grey-6"
            type="button"
            onClick={() => setOpenModalDelete(false)}
          >
            Cancelar
          </Button>
          <Button
            size="211px"
            color="red"
            type="button"
            onClick={() =>
              handleDeleteProduct(setLoad, productId, setOpenModalDelete)
            }
            disabled={load}
          >
            {load ? "Excluindo..." : "Sim, excluir anúncio"}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { ModalDeleteProduct };
