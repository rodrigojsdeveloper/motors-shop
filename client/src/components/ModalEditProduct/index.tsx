import { TypeOfVehicleEdit } from "../TypeOfVehicleEdit";
import { yupResolver } from "@hookform/resolvers/yup";
import { IModalEdit } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";
import { IsPublishedEdit } from "../IsPublishedEdit";

const ModalEditProduct = ({
  product,
  setOpenModalEdit,
  setOpenModalDelete,
}: IModalEdit) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [buyerOrAdvertiserVehicleType, setBuyerOrAdvertiserVehicleType] =
    useState<boolean>(false);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    isPublished ? (data.is_published = true) : (data.is_published = false);

    buyerOrAdvertiserVehicleType
      ? (data.vehicle_type = "car")
      : (data.vehicle_type = "motorcycle");

    api
      .patch(`/products/${product?.id}`, data, {
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
          label="Título"
          name="title"
          register={register}
          placeholder="Título"
          type="text"
          error={errors.title?.message}
          size="inputModalEditAddressLarge"
          defaultValue={product?.title}
        />

        <div className="divInputs">
          <Input
            label="Ano"
            name="year"
            register={register}
            placeholder="1998"
            type="number"
            error={errors.year?.message}
            size="inputModalCreateAnnouncementSmall"
            defaultValue={product?.year}
          />
          <Input
            label="Quilometragem"
            name="kilometers"
            register={register}
            placeholder="0"
            type="number"
            error={errors.kilometers?.message}
            size="inputModalCreateAnnouncementSmall"
            className="inputKilometers"
            defaultValue={product?.kilometers}
          />
          <Input
            label="Preço"
            name="price"
            register={register}
            placeholder="R$ 0,00"
            type="text"
            error={errors.price?.message}
            size="inputModalCreateAnnouncementSmall"
            defaultValue={product?.price}
          />
        </div>

        <TextArea
          defaultValue={product?.description}
          register={register}
          name="description"
          error={errors.description?.message}
        />

        <TypeOfVehicleEdit
          setBuyerOrAdvertiserVehicleType={setBuyerOrAdvertiserVehicleType}
          vehicle_type={product.vehicle_type}
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
          type="text"
          error={errors.cover_image?.message}
          size="inputModalEditAddressLarge"
          defaultValue={product?.cover_image}
        />
        <Input
          label="1º Imagem da galeria"
          name="gallery_image"
          register={register}
          placeholder="https://image.com"
          type="text"
          error={errors.gallery_image?.message}
          size="inputModalEditAddressLarge"
          defaultValue={product?.gallery_image}
        />

        <div className="divButtons">
          <Button
            color="buttonColorGrayModalEditAddress"
            size="buttonSizeModalEditProduct"
            type="button"
            onClick={() => {
              setOpenModalEdit(false);
              setOpenModalDelete(true);
            }}
          >
            Excluir anúncio
          </Button>
          <Button
            color="buttonColorBlueLogin"
            size="buttonSizeModalEditAddressMedium"
            type="submit"
            disabled={load}
          >
            {load ? "Salvando..." : "Salvar alterações"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalEditProduct };
