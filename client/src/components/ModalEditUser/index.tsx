import { IModalEditUser, IUserProps } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderModal } from "../HeaderModal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalEditUser = ({ setOpenModalEditUser }: IModalEditUser) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  token &&
    useEffect(() => {
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((error) => console.error(error));
    }, []);

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    api
      .patch(`/users/${user.id}`, data)
      .then((_) => setOpenModalEditUser(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  const formatBirthdate = (birthdate: any) => {
    const date = new Date(birthdate);
    const year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let day:  any = date.getDate();
  
    if (month < 10) {
      month = `0${month}`;
    }
  
    if (day < 10) {
      day = `0${day}`;
    }
  
    return `${year}-${month}-${day}`;
  };
  

  return (
    <Container>
      <HeaderModal title="Editar perfil" setCloseModal={setOpenModalEditUser} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Infomações pessoais</h3>

        <div>
          <Input
            label="Nome"
            name="name"
            register={register}
            placeholder="Ex: Rodrigo Silva"
            type="text"
            error={errors.name?.message}
            size="inputModalEditAddressLarge"
            value={user?.name}
          />
          <Input
            label="Email"
            name="email"
            register={register}
            placeholder="Ex: rodrigo@gmail.com"
            type="email"
            error={errors.email?.message}
            size="inputModalEditAddressLarge"
            value={user?.email}
          />
          <Input
            label="CPF"
            name="cpf"
            register={register}
            placeholder="000.000.000-00"
            type="number"
            error={errors.cpf?.message}
            size="inputModalEditAddressLarge"
            value={user?.cpf}
          />
          <Input
            label="Celular"
            name="cellphone"
            register={register}
            placeholder="(DDD) 99999-9999"
            type="text"
            error={errors.cellphone?.message}
            size="inputModalEditAddressLarge"
            value={user?.cellphone}
          />
          <Input
            label="Data de nascimento"
            name="birthdate"
            register={register}
            type="date"
            size="inputModalEditAddressLarge"
            value={formatBirthdate(user?.birthdate)}
          />
          <TextArea
            defaultValue={user?.description}
            register={register}
            name="description"
            error={errors.description?.message}
          />
        </div>

        <div className="divButtons">
          <Button
            color="buttonColorGrayModalEditAddress"
            size="buttonSizeModalEditAddressSmall"
            type="button"
            onClick={() => setOpenModalEditUser(false)}
          >
            Cancelar
          </Button>
          <Button
            color="buttonColorBlueLogin"
            size="buttonSizeModalEditAddressMedium"
            type="submit"
            disabled={load}
          >
            {load ? "Salvando..." : "Salvar alteração"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalEditUser };
