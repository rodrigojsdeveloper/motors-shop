import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Input } from "../Input";
import { ModalBackground } from "../ModalBackground";
import { ModalSucessNewPassword } from "../ModalSucessNewPassword";
import { Container } from "./style";

const FormEmail = () => {
  let { userId } = useParams();

  const [load, setLoad] = useState<boolean>(false);

  const [openModalSucess, setOpenModalSucess] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email invalido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunc = (data: any) => {
    setLoad(true);

    api
      .get(`/users/email/${data.email}`)
      .then((res) => {
        userId = res.data.id;
        setOpenModalSucess(true);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <>
      {openModalSucess && (
        <ModalBackground>
          <ModalSucessNewPassword setOpenModalSuccess={setOpenModalSucess} />
        </ModalBackground>
      )}
      <Container onSubmit={handleSubmit(onSubmitFunc)}>
        <h2>Insira seu email</h2>

        <Input
          label="Email"
          name="email"
          register={register}
          placeholder="Digitar email"
          autoComplete="off"
          type="email"
          error={errors.email?.message}
          required={true}
          size="inputSignIn"
        />

        <Button
          className="buttonSubmit"
          size="buttonSizeLogin"
          color="buttonColorBlueLogin"
          type="submit"
          disabled={load}
        >
          {load ? "Enviando..." : "Enviar"}
        </Button>
      </Container>
    </>
  );
};

export { FormEmail };
