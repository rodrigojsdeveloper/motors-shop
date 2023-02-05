import { TypeOfVehicleEdit } from "../TypeOfVehicleEdit";
import { yupResolver } from "@hookform/resolvers/yup";
import { IModalEdit } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useEffect, useState } from "react";
import { AdTypeEdit } from "../AdTypeEdit";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const ModalEdit = ({
  product,
  setOpenModalEdit,
  setOpenModalDelete,
}: IModalEdit) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [changePostedToYes, setChangPostedToYes] = useState<boolean>(true);

  const [changePostedToNo, setChangPostedToNo] = useState<boolean>(false);

  const [saleOrAuctionAdType, setSaleOrAuctionAdType] =
    useState<boolean>(false);

  const [buyerOrAdvertiserVehicleType, setBuyerOrAdvertiserVehicleType] =
    useState<boolean>(false);

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

    saleOrAuctionAdType ? (data.ad_type = "sale") : (data.ad_type = "auction");

    buyerOrAdvertiserVehicleType
      ? (data.ad_type = "car")
      : (data.ad_type = "motorcycle");

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

  useEffect(() => {
    if (product?.is_published) {
      setChangPostedToYes(true);
      setChangPostedToNo(false);
    } else {
      setChangPostedToYes(false);
      setChangPostedToNo(true);
    }
  }, []);

  return (
    <Container>
      <HeaderModal title="Editar anúncio" setCloseModal={setOpenModalEdit} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <AdTypeEdit
          setSaleOrAuctionAdType={setSaleOrAuctionAdType}
          ad_type={product.ad_type}
        />

        <h4>Informações do veículo</h4>

        <Input
          label="Título"
          name="title"
          register={register}
          placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
          autoComplete="off"
          type="text"
          error={errors.title?.message}
          required={true}
          size="inputModalEditAddressLarge"
          value={product?.title}
        />

        <div>
          <Input
            label="Ano"
            name="year"
            register={register}
            placeholder="2018"
            autoComplete="off"
            type="number"
            error={errors.year?.message}
            required={true}
            size="inputModalCreateAnnouncementSmall"
            value={product?.year}
          />
          <Input
            label="Quilometragem"
            name="kilometers"
            register={register}
            placeholder="0"
            autoComplete="off"
            type="number"
            error={errors.kilometers?.message}
            required={true}
            size="inputModalCreateAnnouncementSmall"
            className="inputKilometers"
            value={product?.kilometers}
          />
          <Input
            label="Preço"
            name="price"
            register={register}
            placeholder="50.000,00"
            autoComplete="off"
            type="text"
            error={errors.price?.message}
            required={true}
            size="inputModalCreateAnnouncementSmall"
            value={product?.price}
          />
        </div>
        <TextArea
          value={product?.description}
          register={register}
          name="description"
          error={errors.description?.message}
        />

        <TypeOfVehicleEdit
          setBuyerOrAdvertiserVehicleType={setBuyerOrAdvertiserVehicleType}
          vehicle_type={product.vehicle_type}
        />

        <div>
          <h4>Publicado</h4>
          <div className="divButtons">
            <Button
              onClick={() => {
                setChangPostedToYes(true);
                setChangPostedToNo(false);
              }}
              style={
                changePostedToYes
                  ? {
                      background: "#4529E6",
                      color: "#fff",
                      borderColor: "#4529E6",
                    }
                  : {
                      background: "#fff",
                      color: "#000",
                      borderColor: "#ADB5BD",
                    }
              }
              size="buttonSizeSignUp"
              color="buttonColorWhiteSignUp"
              type="button"
              className="changeButton"
            >
              Sim
            </Button>
            <Button
              onClick={() => {
                setChangPostedToNo(true);
                setChangPostedToYes(false);
              }}
              style={
                changePostedToNo
                  ? {
                      background: "#4529E6",
                      color: "#fff",
                      borderColor: "#4529E6",
                    }
                  : {
                      background: "#fff",
                      color: "#000",
                      borderColor: "#ADB5BD",
                    }
              }
              size="buttonSizeSignUp"
              color="buttonColorWhiteSignUp"
              type="button"
              className="changeButton"
            >
              Não
            </Button>
          </div>
        </div>

        <Input
          label="Imagem da capa"
          name="cover_image"
          register={register}
          placeholder="https://image.com"
          autoComplete="off"
          type="text"
          error={errors.cover_image?.message}
          required={true}
          size="inputModalEditAddressLarge"
          value={product?.cover_image}
        />
        <Input
          label="1º Imagem da galeria"
          name="gallery_image"
          register={register}
          placeholder="https://image.com"
          autoComplete="off"
          type="text"
          error={errors.gallery_image?.message}
          required={true}
          size="inputModalEditAddressLarge"
          value={product?.gallery_image}
        />

        <div>
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

export { ModalEdit };
