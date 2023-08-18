import { IComment, IUserProps } from "../../interfaces";
import { ModalEditComment } from "../ModalEditComment";
import { ModalBackground } from "../ModalBackground";
import { showDate } from "../../utils/dateCreated";
import { useEffect, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { api } from "../../services/api";
import { Container } from "./style";

const Comment = ({ comment }: IComment) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [openModalEditComment, setOpenModalEditComment] =
    useState<boolean>(false);

  useEffect(() => {
    token &&
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((error) => console.error(error));
  }, [user]);

  return (
    <>
      {openModalEditComment ? (
        <ModalBackground>
          <ModalEditComment
            comment_id={comment.id}
            setOpenModalEditComment={setOpenModalEditComment}
          />
        </ModalBackground>
      ) : null}
      <Container>
        <div>
          <AvatarUser username={comment.user.name} />

          <p>{showDate(comment.created_at)}</p>

          {token ? (
            user.id == comment.user.id ? (
              <div className="divEditAndDelete">
                <p onClick={() => setOpenModalEditComment(true)}>Editar</p>
                <hr />
                <p>Deletar</p>
              </div>
            ) : null
          ) : null}
        </div>

        <p>{comment.content}</p>
      </Container>
    </>
  );
};

export { Comment };
