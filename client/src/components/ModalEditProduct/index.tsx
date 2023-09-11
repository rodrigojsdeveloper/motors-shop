import { yupResolver } from "@hookform/resolvers/yup";
import { IsPublishedEdit } from "../IsPublishedEdit";
import { IModalEdit } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import * as yup from "yup";

const ModalEditProduct = ({
  product,
  setOpenModalEdit,
  setOpenModalDelete,
}: IModalEdit) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [isPublished, setIsPublished] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    year: yup.number().required("Ano obrigatório"),
    kilometers: yup.number().required("Kilometros obrigatório"),
    price: yup.string().required("Preço obrigatório"),
    cover_image: yup.string().required("Imagem da capa obrigatória"),
    gallery_image: yup.string().required("1º Imagem da galeria obrigatória"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    isPublished ? (data.is_published = true) : (data.is_published = false);

    api
      .patch(`/products/${product.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setOpenModalEdit(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <HeaderModal title="Editar anúncio" setCloseModal={setOpenModalEdit} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h4>Informações do veículo</h4>

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
          name="gallery_image"
          register={register}
          placeholder="https://image.com"
          type="url"
          defaultValue={product.primary_image}
        />
        <Input
          label="2º Imagem da galeria"
          name="gallery_image"
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
