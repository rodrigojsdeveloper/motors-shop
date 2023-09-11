import { ModalSucessNewPassword } from "../ModalSucessNewPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalBackground } from "../ModalBackground";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";

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
          type="email"
          error={errors.email?.message}
        />

        <Button
          className="buttonSubmit"
          size="315px"
          color="blue"
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
