import { IOpenModal } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";

const ModalSucessNewPassword = ({ setOpenModal }: IOpenModal) => {
  return (
    <Container>
      <HeaderModal title="Sucesso!" setCloseModal={setOpenModal} />

      <div>
        <h5>Link enviado para seu email com sucesso!</h5>

        <p>Acabamos de enviar um link para alterar a senha no seu email.</p>
      </div>
    </Container>
  );
};

export { ModalSucessNewPassword };
