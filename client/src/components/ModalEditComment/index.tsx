import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderModal } from "../HeaderModal";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import * as yup from "yup";

interface IModalEditComment {
  comment_id: string
}

const ModalEditComment = ({ comment_id }: IModalEditComment) => {
  const [openModalEditComment, setOpenModalEditComment] =
    useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    content: yup.string().required("Content obrigatório"),
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
      .patch(`/comments/${comment_id}`, data)
      .then((_) => setOpenModalEditComment(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <HeaderModal
        title="Editar commentário"
        setCloseModal={setOpenModalEditComment}
      />

      <TextArea
        defaultValue={comment?.content}
        register={register}
        name="description"
        error={errors.description?.message}
      />

      <div className="divButtons">
        <Button
          color="buttonColorGrayModalEditAddress"
          size="buttonSizeModalEditAddressSmall"
          type="button"
          onClick={() => setOpenModalEditComment(false)}
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
    </Container>
  );
};

export { ModalEditComment };
