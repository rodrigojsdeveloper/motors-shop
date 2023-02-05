import { ICommentProps, IListComments } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Comment } from "../Comment";
import { Container } from "./style";

const ListComments = ({ comments, loaded }: IListComments) => {
  return (
    <Container>
      <h3>Comentários</h3>

      <menu>
        {loaded ? (
          <div className="loadScreen">
            <div></div>
          </div>
        ) : comments.length > 0 ? (
          comments.map((comment: ICommentProps) => (
            <Comment comment={comment} key={comment.id} />
          ))
        ) : (
          <EmptyMessage message="Não há comentários" />
        )}
      </menu>
    </Container>
  );
};

export { ListComments };
