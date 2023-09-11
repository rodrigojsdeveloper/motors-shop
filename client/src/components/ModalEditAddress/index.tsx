import { yupResolver } from "@hookform/resolvers/yup";
import { IModalEditAddress } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalEditAddress = ({ setOpenModalEditAddress }: IModalEditAddress) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<any>();

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    zip_code: yup.number().required("CEP obrigatória"),
    state: yup.string().required(""),
    city: yup.string().required(""),
    district: yup.string().required("Bairro obrigatório"),
    street: yup.string().required("Rua obrigatória"),
    number: yup.number().required("Número obrigatório"),
    complement: yup.string(),
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

    const address = {
      zip_code: data.zip_code,
      state: data.state,
      city: data.city,
      district: data.district,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };

    data.address = address;

    api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setOpenModalEditAddress(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <HeaderModal
        title="Editar endereço"
        setCloseModal={setOpenModalEditAddress}
      />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Infomações de endereço</h3>

        <Input
          label="CEP"
          name="zip_code"
          register={register}
          placeholder="00000-000"
          type="number"
          value={user?.address.zip_code}
        />

        <div className="divInputs">
          <Input
            label="Estado"
            name="state"
            register={register}
            placeholder="Digitar estado"
            type="text"
            value={user?.address.state}
          />
          <Input
            label="Cidade"
            name="city"
            register={register}
            placeholder="Digitar cidade"
            type="text"
            value={user?.address.city}
          />
        </div>

        <Input
          label="Bairro"
          name="district"
          register={register}
          placeholder="Digitar bairro"
          type="text"
          value={user?.address.district}
        />
        <Input
          label="Rua"
          name="street"
          register={register}
          placeholder="Digitar rua"
          type="text"
          value={user?.address.street}
        />

        <div className="divInputs">
          <Input
            label="Número"
            name="number"
            register={register}
            placeholder="Digitar número"
            type="number"
            value={user?.address.number}
          />
          <Input
            label="Complemento"
            name="complement"
            register={register}
            placeholder="Ex: Apart 307"
            type="text"
            value={user?.address.complement}
          />
        </div>

        <div className="divButtons">
          <Button
            color="buttonColorGrayModalEditAddress"
            size="buttonSizeModalEditAddressSmall"
            type="button"
            onClick={() => setOpenModalEditAddress(false)}
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

export { ModalEditAddress };
