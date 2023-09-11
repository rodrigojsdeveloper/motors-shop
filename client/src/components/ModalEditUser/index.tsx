import { formatBirthdate } from "../../utils/formatBirthdate";
import { UserContext } from "../../contexts/user.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { IModalEditUser } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalEditUser = ({ setOpenModalEditUser }: IModalEditUser) => {
  const { user } = useContext(UserContext);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required("Name obrigatório"),
    email: yup.string().required("Email obrigatória").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Minimum 8 caracters")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must contain uppercase and lowercase letters, numbers and special characters"
      ),
    cpf: yup.string().required("CPF obrigatória"),
    cellphone: yup.string().required("Celular obrigatória"),
    birthdate: yup.string().required("Data obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    api
      .patch(`/users/${user.id}`, data)
      .then((_) => setOpenModalEditUser(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <HeaderModal title="Editar perfil" setCloseModal={setOpenModalEditUser} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Infomações pessoais</h3>

        <Input
          label="Nome"
          name="name"
          register={register}
          placeholder="Ex: Rodrigo Silva"
          defaultValue={user.name}
        />
        <Input
          label="Email"
          name="email"
          register={register}
          placeholder="Ex: rodrigo@gmail.com"
          type="email"
          defaultValue={user.email}
        />
        <Input
          label="CPF"
          name="cpf"
          register={register}
          placeholder="000.000.000-00"
          type="number"
          defaultValue={user.cpf}
        />
        <Input
          label="Celular"
          name="cellphone"
          register={register}
          placeholder="(DDD) 99999-9999"
          defaultValue={user.cellphone}
        />
        <Input
          label="Data de nascimento"
          name="birthdate"
          register={register}
          type="date"
          defaultValue={formatBirthdate(user.birthdate)}
        />
        <TextArea
          name="description"
          register={register}
          defaultValue={user.description}
        />

        <div className="divButtons">
          <Button
            color="grey-6"
            size="126px"
            type="button"
            onClick={() => setOpenModalEditUser(false)}
          >
            Cancelar
          </Button>
          <Button color="blue" size="193px" type="submit" disabled={load}>
            {load ? "Salvando..." : "Salvar alteração"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalEditUser };
