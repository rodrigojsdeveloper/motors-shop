import { IModalCreateAnnouncement } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
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
        />

        <Input
          label="Modelo"
          name="model"
          register={register}
          placeholder="Digitar modelo"
        />

        <div className="divInputs">
          <Input
            label="Ano"
            name="year"
            register={register}
            placeholder="2020"
            type="number"
          />
          <Input
            label="Combustível"
            name="fuel"
            register={register}
            placeholder="Gasolina/Etanol"
          />
        </div>

        <div className="divInputs">
          <Input
            label="Quilometragem"
            name="kilometers"
            register={register}
            placeholder="30.000"
            type="number"
          />
          <Input
            label="Cor"
            name="color"
            register={register}
            placeholder="Branco"
          />
        </div>

        <div className="divInputs">
          <Input
            label="Tabela FIPE"
            name="fipe"
            register={register}
            placeholder="R$ 48.000,00"
            type="number"
          />
          <Input
            label="Preço"
            name="price"
            register={register}
            placeholder="R$ 50.000,00"
            type="number"
          />
        </div>

        <TextArea
          register={register}
          name="description"
        />

        <Input
          label="Imagem da capa"
          name="cover_image"
          register={register}
          placeholder="https://image.com"
          type="url"
        />
        <Input
          label="1º Imagem da galeria"
          name="gallery_image"
          register={register}
          placeholder="https://image.com"
          type="url"
        />
        <Input
          label="2º Imagem da galeria"
          name="gallery_image"
          register={register}
          placeholder="https://image.com"
          type="url"
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
          <Button color="blue" size="193px" type="submit" disabled={load}>
            {load ? "Criando..." : "Criar anúncio"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalCreateProduct };
