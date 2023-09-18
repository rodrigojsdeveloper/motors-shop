import { UserContext } from "../../contexts/user.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { IOpenModal } from "../../interfaces";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalResetPassword = ({ setOpenModal }: IOpenModal) => {
  let { userId } = useParams();

  const { handleResetPassword } = useContext(UserContext);

  const [loaded, setLoaded] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required().email(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) =>
    handleResetPassword(setLoaded, data, setOpenModal, userId);

  return (
    <Container>
      <HeaderModal title="Esqueceu sua senha?" setCloseModal={setOpenModal} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <p>
          Preencha o campo com seu e-mail e receba as instruções necessárias
          para redefinir a sua senha.
        </p>

        <Input
          label="Email"
          name="email"
          register={register}
          placeholder="Digite seu email"
          type="email"
        />

        <div className="divButtons">
          <Button
            color="grey-6"
            size="262px"
            type="button"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </Button>
          <Button color="blue" size="193px" type="submit" disabled={loaded}>
            {loaded ? "Salvando..." : "Salvar alterações"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalResetPassword };
