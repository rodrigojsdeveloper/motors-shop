import { yupResolver } from "@hookform/resolvers/yup";
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
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Login</h2>

      <Input
        label="Usuário"
        name="email"
        register={register}
        placeholder="Digitar usuário"
        type="text"
        error={errors.email?.message}
        size="inputSignIn"
      />
      <Input
        label="Senha"
        name="password"
        register={register}
        placeholder="Digitar senha"
        type="password"
        error={errors.password?.message}
        size="inputSignIn"
      />

      <Link to="/resetpassword">Esqueci minha senha</Link>

      <Button
        size="buttonSizeLogin"
        color="buttonColorBlueLogin"
        type="submit"
        disabled={load}
      >
        {load ? "Entrando..." : "Entrar"}
      </Button>
      <small>Ainda não possui conta?</small>
      <Link to="/signup">Cadastrar</Link>
    </Container>
  );
};

export { FormSignIn };
