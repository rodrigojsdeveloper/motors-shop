import { Container } from "./style";
import { Button } from "../Button";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderModal } from "../HeaderModal";

interface IFormSignUp {
  setOpenModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSucessNewPassword = ({ setOpenModalSuccess }: IFormSignUp) => {
  const { userId } = useParams()

  const navigate = useNavigate();

  return (
    <Container>
      <HeaderModal title="Sucesso!" setCloseModal={setOpenModalSuccess} />

      <div>
        <h5>Link enviado para seu email com sucesso!</h5>

        <p>Acabamos de enviar um link para alterar a senha no seu email.</p>
      </div>
    </Container>
  );
};

export { ModalSucessNewPassword };
