import { yupResolver } from "@hookform/resolvers/yup";
import { ICommentProps } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import * as yup from "yup";

interface IModalEditComment {
  comment_id: string;
  setOpenModalEditComment: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalEditComment = ({
  comment_id,
  setOpenModalEditComment,
}: IModalEditComment) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [comment, setComment] = useState<ICommentProps>({} as ICommentProps);

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

  token &&
    useEffect(() => {
      api
        .get(`/comments/specific/${comment_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setComment(res.data))
        .catch((error) => console.error(error));
    }, []);

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
        title="Editar comentário"
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
          color="buttonColorBlueLogin"
          size="buttonSizeModalEditAddressMedium"
          type="submit"
          disabled={load}
        >
          {load ? "Salvando..." : "Salvar alteração"}
        </Button>
        <Button
          color="buttonColorGrayModalEditAddress"
          size="buttonSizeModalEditAddressSmall"
          type="button"
          onClick={() => setOpenModalEditComment(false)}
        >
          Cancelar
        </Button>
      </div>
    </Container>
  );
};

export { ModalEditComment };
