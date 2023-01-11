import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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

  const [showOutlineShow, setShowOutlineShow] = useState<boolean>(true);

  const [typeInput, setTypeInput] = useState<boolean>(false);

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
        autoComplete="off"
        type="text"
        error={errors.email?.message}
        required={true}
        size="inputSignIn"
      />

      <div>
        <label>
          Senha{" "}
          {!!errors.password && (
            <span> - {errors.password?.message as string}</span>
          )}
        </label>
        <div className="inputPassword">
          <input
            {...register("password")}
            placeholder="Digitar senha"
            required={true}
            type={typeInput ? "text" : "password"}
            onChange={(e: any) => {
              if (e.target.value == "") {
                setShowOutlineShow(true);

                setTypeInput(false);
              }
            }}
          />
          {showOutlineShow ? (
            <AiOutlineEyeInvisible
              className="biShow"
              onClick={() => {
                setTypeInput(true);

                setShowOutlineShow(false);
              }}
            />
          ) : (
            <AiOutlineEye
              className="biShow"
              onClick={() => {
                setTypeInput(false);

                setShowOutlineShow(true);
              }}
            />
          )}
        </div>
      </div>

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
      <Button
        size="buttonSizeLogin"
        color="buttonColorWhiteHeader"
        type="button"
        onClick={() => navigate("/signup")}
      >
        Cadastrar
      </Button>
    </Container>
  );
};

export { FormSignIn };
