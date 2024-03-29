import { ProductContext } from "../../contexts/product.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "../Selects/selectCreate";
import { IOpenModal } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalCreateProduct = ({ setOpenModal }: IOpenModal) => {
  const { handlePostProduct } = useContext(ProductContext);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required().typeError("year must be a number").integer(),
    fuel: yup.mixed().oneOf(["gasoline", "ethanol"]).required(),
    kilometers: yup
      .number()
      .required()
      .typeError("kilometers must be a number")
      .integer(),
    color: yup.string().required(),
    fipe: yup.number().required().typeError("fipe must be a number").integer(),
    price: yup
      .number()
      .required()
      .typeError("price must be a number")
      .integer(),
    description: yup.string().required(),
    cover_image: yup.string().required().url(),
    primary_image: yup.string().required().url(),
    second_image: yup.string().required().url(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) =>
    handlePostProduct(setLoad, data, setOpenModal);

  return (
    <Container>
      <HeaderModal title="Criar anúncio" setCloseModal={setOpenModal} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Informações do veículo</h3>

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
          <Select name="fuel" register={register} />
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

        <TextArea register={register} name="description" />

        <Input
          label="Imagem da capa"
          name="cover_image"
          register={register}
          placeholder="https://image.com"
          type="url"
        />
        <Input
          label="1º Imagem da galeria"
          name="primary_image"
          register={register}
          placeholder="https://image.com"
          type="url"
        />
        <Input
          label="2º Imagem da galeria"
          name="second_image"
          register={register}
          placeholder="https://image.com"
          type="url"
        />

        <div className="divButtons">
          <Button
            color="grey-6"
            size="126px"
            type="button"
            onClick={() => setOpenModal(false)}
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
