import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";

interface IFormSignUp {
  setOpenModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormSignUp = ({ setOpenModalSuccess }: IFormSignUp) => {
  const [changeColorBuyer, setChangeColorBuyer] = useState<boolean>(true);

  const [changeColorAdvertiser, setChangeColorAdvertiser] =
    useState<boolean>(false);

  const [buyerOrAdvertiser, setBuyerOrAdvertiser] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
      ),
    cpf: yup.string().required("CPF obrigatório"),
    cellphone: yup.string().required("Celular obrigatório"),
    birthdate: yup.string().required("Data obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
    zip_code: yup
      .string()
      .required("CEP obrigatório")
      .max(8, "Máximo 8 caracteres"),
    country: yup.string().required("País obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    district: yup.string().required("Bairro obrigatório"),
    street: yup.string().required("Rua obrigatória"),
    number: yup.number().required("Número obrigatório"),
    complement: yup.string(),
    repeat_password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
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
    setLoad(true);

    data.is_seller = buyerOrAdvertiser;

    const address = {
      zip_code: data.zip_code,
      country: data.country,
      state: data.state,
      city: data.city,
      district: data.district,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };

    data.address = address;

    Reflect.deleteProperty(data, "repeat_password");

    api
      .post("/users/signup", data)
      .then(() => setOpenModalSuccess(true))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Cadastro</h2>

      <h3>Informações pessoais</h3>

      <Input
        label="Nome"
        name="name"
        register={register}
        placeholder="Ex: Rodrigo Silva"
        autoComplete="off"
        type="text"
        error={errors.name?.message}
        required={true}
        size="inputSignIn"
      />
      <Input
        label="Email"
        name="email"
        register={register}
        placeholder="Ex: rodrigo@gmail.com"
        autoComplete="off"
        type="email"
        error={errors.email?.message}
        required={true}
        size="inputSignIn"
      />
      <Input
        label="CPF"
        name="cpf"
        register={register}
        placeholder="000.000.000-00"
        autoComplete="off"
        type="text"
        error={errors.cpf?.message}
        required={true}
        size="inputSignIn"
      />
      <Input
        label="Celular"
        name="cellphone"
        register={register}
        placeholder="(DDD) 90000-0000"
        autoComplete="off"
        type="text"
        error={errors.cellphone?.message}
        required={true}
        size="inputSignIn"
      />
      <Input
        label="Data de nascimento"
        name="birthdate"
        register={register}
        placeholder="00/00/0000"
        autoComplete="off"
        type="text"
        error={errors.birthdate?.message}
        required={true}
        size="inputSignIn"
      />
      <TextArea
        register={register}
        name="description"
        error={errors.description?.message}
      />

      <h3>Informações de endereço</h3>

      <Input
        label="CEP"
        name="zip_code"
        register={register}
        placeholder="00000-000"
        autoComplete="off"
        type="number"
        error={errors.zip_code?.message}
        required={true}
        size="inputSignIn"
      />
      <Input
        label="País"
        name="country"
        register={register}
        placeholder="Ex: Brasil"
        autoComplete="off"
        type="text"
        error={errors.country?.message}
        required={true}
        size="inputSignIn"
      />
      <div className="divInputs">
        <Input
          label="Estado"
          name="state"
          register={register}
          placeholder="Digitar estado"
          autoComplete="off"
          type="text"
          required={true}
          size="inputSignUpSmall"
          className="changeInput"
        />
        <Input
          label="Cidade"
          name="city"
          register={register}
          placeholder="Digitar cidade"
          autoComplete="off"
          type="text"
          required={true}
          size="inputSignUpSmall"
          className="changeInput"
        />
      </div>
      <Input
        label="Bairro"
        name="district"
        register={register}
        placeholder="Digitar bairro"
        autoComplete="off"
        type="text"
        error={errors.district?.message}
        required={true}
        size="inputSignIn"
      />
      <Input
        label="Rua"
        name="street"
        register={register}
        placeholder="Digitar rua"
        autoComplete="off"
        type="text"
        error={errors.street?.message}
        required={true}
        size="inputSignIn"
      />
      <div className="divInputs">
        <Input
          className="inputNumber"
          label="Número"
          name="number"
          register={register}
          placeholder="Digitar número"
          autoComplete="off"
          type="number"
          required={true}
          size="inputSignUpSmall"
        />
        <Input
          className="inputComplement"
          label="Complemento"
          name="complement"
          register={register}
          placeholder="Ex: apart 307"
          autoComplete="off"
          type="text"
          required={true}
          size="inputSignUpSmall"
        />
      </div>

      <h3>Tipo de conta</h3>

      <div className="divInputs">
        <Button
          onClick={() => {
            setChangeColorBuyer(true);
            setChangeColorAdvertiser(false);
            setBuyerOrAdvertiser(false);
          }}
          style={
            changeColorBuyer
              ? {
                  background: "#4529E6",
                  color: "#FFF",
                  borderColor: "#4529E6",
                  borderWidth: 2,
                }
              : {
                  background: "#FFF",
                  color: "#0B0D0D",
                  borderColor: "#ADB5BD",
                  borderWidth: 2,
                }
          }
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
          type="button"
          className="changeButton"
        >
          Comprador
        </Button>
        <Button
          onClick={() => {
            setChangeColorBuyer(false);
            setChangeColorAdvertiser(true);
            setBuyerOrAdvertiser(true);
          }}
          style={
            changeColorAdvertiser
              ? {
                  background: "#4529E6",
                  color: "#FFF",
                  borderColor: "#4529E6",
                  borderWidth: 2,
                }
              : {
                  background: "#FFF",
                  color: "#0B0D0D",
                  borderColor: "#ADB5BD",
                  borderWidth: 2,
                }
          }
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
          type="button"
          className="changeButton"
        >
          Anunciante
        </Button>
      </div>

      <Input
        label="Senha"
        name="password"
        register={register}
        placeholder="Digitar senha"
        autoComplete="off"
        type="password"
        required={true}
        size="inputSignIn"
      />
      <Input
        label="Repetir a senha"
        name="repeat_password"
        register={register}
        placeholder="Repetir senha"
        autoComplete="off"
        type="password"
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
        {load ? "Finalizando..." : "Finalizar cadastro"}
      </Button>
    </Container>
  );
};

export { FormSignUp };
