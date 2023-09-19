import { ModalResetPassword } from "../Modals/modalResetPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalBackground } from "../ModalBackground";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";

const FormSignIn = () => {
  const navigate = useNavigate();

  const [load, setLoad] = useState<boolean>(false);

  const [openModalResetPassword, setOpenModalResetPassword] =
    useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required("Usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    api
      .post("/signin", data)
      .then((res) => {
        sessionStorage.setItem("Motors shop: token", res.data.token);

        navigate("/");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <>
      {openModalResetPassword && (
        <ModalBackground>
          <ModalResetPassword setOpenModal={setOpenModalResetPassword} />
        </ModalBackground>
      )}
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <Input
          label="Email"
          name="email"
          register={register}
          placeholder="Digitar email"
          type="text"
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          name="password"
          register={register}
          placeholder="Digitar senha"
          type="password"
          error={errors.password?.message}
        />

        <p
          className="resetPassword"
          onClick={() => setOpenModalResetPassword(true)}
        >
          Esqueci minha senha
        </p>

        <Button size="315px" color="blue" type="submit" disabled={load}>
          {load ? "Entrando..." : "Entrar"}
        </Button>
        <small>Ainda não possui conta?</small>
        <Link className="buttonSignUp" to="/signup">
          Cadastrar
        </Link>
      </Container>
    </>
  );
};

export { FormSignIn };
