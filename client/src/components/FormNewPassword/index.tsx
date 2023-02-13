import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const FormNewPassword = () => {
  const { userId } = useParams();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Minimum 8 caracters")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must contain uppercase and lowercase letters, numbers and special characters"
      ),
    repeat_password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Minimum 8 caracters")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must contain uppercase and lowercase letters, numbers and special characters"
      )
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    Reflect.deleteProperty(data, "repeat_password");

    api
      .patch(`/users/${userId}`, data)
      .then((_) => navigate("/signin"))
      .catch((error) => console.error(error));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Nova Senha</h2>

      <div>
        <Input
          label="Senha"
          name="password"
          register={register}
          placeholder="Digitar senha"
          autoComplete="off"
          type="password"
          error={errors.password?.message}
          required={true}
          size="inputSignIn"
        />
        <Input
          label="Repetir senha"
          name="repeat_password"
          register={register}
          placeholder="Digitar senha"
          autoComplete="off"
          type="password"
          error={errors.repeat_password?.message}
          required={true}
          size="inputSignIn"
        />
      </div>

      <Button
        className="buttonSubmit"
        size="buttonSizeLogin"
        color="buttonColorBlueLogin"
        type="submit"
      >
        Alterar senha
      </Button>
    </Container>
  );
};

export { FormNewPassword };
