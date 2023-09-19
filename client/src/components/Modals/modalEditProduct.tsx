import { ProductContext } from "../../contexts/product.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { IsPublishedEdit } from "../IsPublishedEdit";
import { IModalEdit } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalEditProduct = ({
  product,
  setOpenModalEdit,
  setOpenModalDelete,
}: IModalEdit) => {
  const { handleEditProduct } = useContext(ProductContext);

  const [isPublished, setIsPublished] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required().typeError("year must be a number").integer(),
    fuel: yup.mixed().oneOf(["Gasolina", "Etanol"]).required(),
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
    handleEditProduct(setLoad, isPublished, data, product, setOpenModalEdit);

  return (
    <Container>
      <HeaderModal title="Editar anúncio" setCloseModal={setOpenModalEdit} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Informações do veículo</h3>

        <Input
          label="Marca"
          name="brand"
          register={register}
          placeholder="Digitar marca"
          defaultValue={product.brand}
        />

        <Input
          label="Modelo"
          name="model"
          register={register}
          placeholder="Digitar modelo"
          defaultValue={product.model}
        />

        <div className="divInputs">
          <Input
            label="Ano"
            name="year"
            register={register}
            placeholder="Digitar ano"
            type="number"
            defaultValue={product.year}
          />
          <Input
            label="Combustível"
            name="fuel"
            register={register}
            placeholder="Gasolina/Etanol"
            defaultValue={product.fuel}
          />
        </div>

        <div className="divInputs">
          <Input
            label="Quilometragem"
            name="kilometers"
            register={register}
            placeholder="0"
            type="number"
            defaultValue={product.kilometers}
          />
          <Input
            label="Cor"
            name="color"
            register={register}
            placeholder="Digite a cor"
            defaultValue={product.color}
          />
        </div>

        <div className="divInputs">
          <Input
            label="Preço tabela FIPE"
            name="fipe"
            register={register}
            placeholder="0"
            type="number"
            defaultValue={product.fipe}
          />
          <Input
            label="Preço"
            name="price"
            register={register}
            placeholder="0"
            type="number"
            defaultValue={product.price}
          />
        </div>

        <TextArea
          defaultValue={product.description}
          register={register}
          name="description"
        />

        <IsPublishedEdit
          setIsPublished={setIsPublished}
          is_published={product.is_published}
        />

        <Input
          label="Imagem da capa"
          name="cover_image"
          register={register}
          placeholder="https://image.com"
          type="url"
          defaultValue={product.cover_image}
        />
        <Input
          label="1º Imagem da galeria"
          name="primary_image"
          register={register}
          placeholder="https://image.com"
          type="url"
          defaultValue={product.primary_image}
        />
        <Input
          label="2º Imagem da galeria"
          name="second_image"
          register={register}
          placeholder="https://image.com"
          type="url"
          defaultValue={product.second_image}
        />

        <div className="divButtons">
          <Button
            color="grey-6"
            size="262px"
            type="button"
            onClick={() => {
              setOpenModalEdit(false);
              setOpenModalDelete(true);
            }}
            disabled={!product.is_published}
          >
            Excluir anúncio
          </Button>
          <Button color="blue" size="193px" type="submit" disabled={load}>
            {load ? "Salvando..." : "Salvar alterações"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalEditProduct };
