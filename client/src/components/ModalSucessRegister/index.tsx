import { IModalSuccess } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { Link } from "react-router-dom";
import { Container } from "./style";

const ModalSucessRegister = ({ setOpenModalSuccess }: IModalSuccess) => {
  return (
    <Container>
      <HeaderModal title="Sucesso!" setCloseModal={setOpenModalSuccess} />

      <div>
        <h3>Seu anúncio foi criado com sucesso!</h3>

        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

        <Link to="/signin" onClick={() => setOpenModalSuccess(false)}>
          Ir para o login
        </Link>
      </div>
    </Container>
  );
};

export { ModalSucessRegister };
