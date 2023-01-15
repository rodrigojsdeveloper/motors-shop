import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IComment, IProductProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Button } from "../Button";
import { Container } from "./style";
import * as yup from "yup";
import { api } from "../../services/api";

interface ICreateComment {
  product: IProductProps;
  ListCommentsFunc: (comment: IComment) => void;
}

const CreateComment = ({ product, ListCommentsFunc }: ICreateComment) => {
  const [disable, setDisable] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const token = sessionStorage.getItem("Motors shop: token");

  useEffect(() => {
    token ? setDisable(false) : setDisable(true);
  }, []);

  const schema = yup.object().shape({
    content: yup.string().required("content required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    api
      .post(`/comments/${product?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => ListCommentsFunc(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      {token && (
        <div className="divUserPhotoAndName">
          <AvatarUser userName={product.user.name} />
          <h4>{product.user.name}</h4>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <textarea
          placeholder={
            disable
              ? "Digitar comentário"
              : "Carro muito confortável, foi uma ótima experiência de compra..."
          }
          {...register("content")}
          name="content"
          disabled={disable ? disable : load}
        />
        <Button
          size="buttonSizeProductCarDetails"
          color="buttonColorBlueLogin"
          type="submit"
          disabled={disable ? disable : load}
        >
          {load ? "Comentando..." : "Comentar"}
        </Button>
      </form>

      <div className="divReadyComments">
        <p>Gostei muito!</p>
        <p>Incrível</p>
        <p>Recomendarei para meus amigos!</p>
      </div>
    </Container>
  );
};

export { CreateComment };
