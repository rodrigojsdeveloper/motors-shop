import { IOpenModal } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { Link } from "react-router-dom";
import { Container } from "./style";

const ModalSucessRegister = ({ setOpenModal }: IOpenModal) => {
  return (
    <Container>
      <HeaderModal title="Sucesso!" setCloseModal={setOpenModal} />

      <div>
        <h3>Seu anúncio foi criado com sucesso!</h3>

        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

        <Link to="/signin" onClick={() => setOpenModal(false)}>
          Ir para o login
        </Link>
      </div>
    </Container>
  );
};

export { ModalSucessRegister };
