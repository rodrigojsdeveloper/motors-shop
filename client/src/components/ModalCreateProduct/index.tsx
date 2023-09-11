import { IModalCreateAnnouncement } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { TypeOfVehicle } from "../TypeOfVehicle";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";

const ModalCreateProduct = ({
  setCloseModalCreateAnnouncement,
  listMotorcyclesFunc,
  listCarsFunc,
}: IModalCreateAnnouncement) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [buyerOrAdvertiserVehicleType, setBuyerOrAdvertiserVehicleType] =
    useState<boolean>(true);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    year: yup.number().positive().integer().required("Ano obrigatório"),
    kilometers: yup.number().integer().required("Kilometros obrigatório"),
    price: yup.string().required("Preço obrigatório"),
    cover_image: yup.string().required("Imagem da capa obrigatória").url(),
    gallery_image: yup
      .string()
      .required("1º Imagem da galeria obrigatória")
      .url(),
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

    buyerOrAdvertiserVehicleType
      ? (data.vehicle_type = "car")
      : (data.vehicle_type = "motorcycle");

    api
      .post("/products", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.vehicle_type == "car") {
          listCarsFunc(res.data);
        }

        if (res.data.vehicle_type == "motorcycle") {
          listMotorcyclesFunc(res.data);
        }

        setCloseModalCreateAnnouncement(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <HeaderModal
        title="Criar anúncio"
        setCloseModal={setCloseModalCreateAnnouncement}
      />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h4>Informações do veículo</h4>

        <Input
          label="Marca"
          name="brand"
          register={register}
          placeholder="Digitar marca"
          type="text"
        />
        
        <Input
          label="Modelo"
          name="model"
          register={register}
          placeholder="Digitar modelo"
          type="text"
        />

        <div className="divInputs">
          <Input
            label="Ano"
            name="year"
            register={register}
            placeholder="Digitar ano"
            type="number"
            maxLength={4}
          />
          <Input
            label="Combustível"
            name="fuel"
            register={register}
            placeholder="Gasolina/Etanol"
            type="text"
          />
        </div>
        
        <div className="divInputs">
          <Input
            label="Quilometragem"
            name="kilometers"
            register={register}
            placeholder="0"
            type="number"
          />
          <Input
            label="Cor"
            name="color"
            register={register}
            placeholder="Digite a cor"
            type="text"
          />
        </div>
        
        <div className="divInputs">
          <Input
            label="Preço tabela FIPE"
            name="fipe"
            register={register}
            placeholder="0"
            type="number"
          />
          <Input
            label="Preço"
            name="price"
            register={register}
            placeholder="0"
            type="number"
          />
        </div>

        <TextArea
          register={register}
          name="description"
          error={errors.description?.message}
        />

        <TypeOfVehicle
          setBuyerOrAdvertiserVehicleType={setBuyerOrAdvertiserVehicleType}
        />

        <Input
          label="Imagem da capa"
          name="cover_image"
          register={register}
          placeholder="Inserir URL da imagem"
          type="text"
          error={errors.cover_image?.message}
        />
        <Input
          label="1º Imagem da galeria"
          name="gallery_image"
          register={register}
          placeholder="Inserir URL da imagem"
          type="text"
          error={errors.gallery_image?.message}
        />

        <div className="divButtons">
          <Button
            color="grey-6"
            size="126px"
            type="button"
            onClick={() => setCloseModalCreateAnnouncement(false)}
          >
            Cancelar
          </Button>
          <Button
            color="blue"
            size="193px"
            type="submit"
            disabled={load}
          >
            {load ? "Criando..." : "Criar anúncio"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalCreateProduct };
