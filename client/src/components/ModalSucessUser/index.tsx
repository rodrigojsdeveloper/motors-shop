import { IModalSuccess } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";
import { Button } from "../Button";

const ModalSucessUser = ({ setOpenModalSuccess }: IModalSuccess) => {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderModal title="Sucesso!" setCloseModal={setOpenModalSuccess} />

      <div>
        <h5>Seu anúncio foi criado com sucesso!</h5>

        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

        <Button
          size="buttonSizeSuccessModal"
          color="buttonColorBlueLogin"
          type="button"
          onClick={() => {
            setOpenModalSuccess(false);
            navigate("/signin");
          }}
        >
          Ir para o login
        </Button>
      </div>
    </Container>
  );
};

export { ModalSucessUser };
