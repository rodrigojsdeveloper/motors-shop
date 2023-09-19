import { ICommentProps, IModalEditComment } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderModal } from "../HeaderModal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { TextArea } from "../TextArea";
import { Container } from "./style";
import { Button } from "../Button";
import * as yup from "yup";

const ModalEditComment = ({ comment_id, setOpenModal }: IModalEditComment) => {
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
      .then((_) => setOpenModal(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <HeaderModal title="Editar comentário" setCloseModal={setOpenModal} />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <TextArea
          defaultValue={comment?.content}
          register={register}
          name="description"
          error={errors.description?.message}
        />

        <div className="divButtons">
          <Button color="blue" size="193px" type="submit" disabled={load}>
            {load ? "Salvando..." : "Salvar alteração"}
          </Button>
          <Button
            color="grey-6"
            size="126px"
            type="button"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Container>
  );
};

export { ModalEditComment };
