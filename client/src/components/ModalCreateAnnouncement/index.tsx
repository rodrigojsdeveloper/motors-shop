import { yupResolver } from "@hookform/resolvers/yup";
import { IProductProps } from "../../interfaces";
import { TypeOfVehicle } from "../TypeOfVehicle";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { AdType } from "../AdType";
import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";

interface IModalCreateAnnouncement {
  setCloseModalCreateAnnouncement: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const ModalCreateAnnouncement = ({
  setCloseModalCreateAnnouncement,
}: IModalCreateAnnouncement) => {
  const [product, setProduct] = useState<IProductProps>({} as IProductProps);

  const [buyerOrAdvertiserVehicleType, setBuyerOrAdvertiserVehicleType] =
    useState<string>("");

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

  const onSubmitFunction = (data: any) => {console.log(data)};

  return (
    <Container>
      <HeaderModal
        title="Criar anúncio"
        setCloseModal={setCloseModalCreateAnnouncement}
      />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <AdType product={product} />

        <h4>Informações do veículo</h4>

        <Input
          label="Título"
          name="title"
          register={register}
          placeholder="Digitar título"
          autoComplete="off"
          type="text"
          error={errors.title?.message}
          required={true}
          size="inputModalEditAddressLarge"
        />

        <div>
          <Input
            label="Ano"
            name="year"
            register={register}
            placeholder="Digitar ano"
            autoComplete="off"
            type="number"
            error={errors.year?.message}
            required={true}
            size="inputModalCreateAnnouncementSmall"
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
          />
          <Input
            label="Preço"
            name="price"
            register={register}
            placeholder="Digitar preço"
            autoComplete="off"
            type="text"
            error={errors.price?.message}
            required={true}
            size="inputModalCreateAnnouncementSmall"
          />
        </div> 
        <TextArea register={ register } name="description" error={ errors.description?.message } />

        <TypeOfVehicle setBuyerOrAdvertiserVehicleType={ setBuyerOrAdvertiserVehicleType } />

        <Input
          label="Imagem da capa"
          name="cover_image"
          register={register}
          placeholder="Inserir URL da imagem"
          autoComplete="off"
          type="text"
          error={errors.cover_image?.message}
          required={true}
          size="inputModalEditAddressLarge"
        />
        <Input
          label="1º Imagem da galeria"
          name="gallery_image"
          register={register}
          placeholder="Inserir URL da imagem"
          autoComplete="off"
          type="text"
          error={errors.gallery_image?.message}
          required={true}
          size="inputModalEditAddressLarge"
        />

        <div>
          <Button
            color="buttonColorGrayModalEditAddress"
            size="buttonSizeModalEditAddressSmall"
            type="button"
            onClick={() => setCloseModalCreateAnnouncement(false)}
          >
            Cancelar
          </Button>
          <Button
            color="buttonColorBlueLogin"
            size="buttonSizeModalEditAddressMedium"
            type="submit"
          >
            Criar anúncio
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalCreateAnnouncement };
